import os
import subprocess

# Directorios de entrada y salida
directorio_entrada = r"/workspaces/kit-camaras/COMPRESOR/imagenes0/INICIO_VERTICAL"
directorio_salida = r"/workspaces/kit-camaras/src/assets/INICIO_VERTICAL"

# Crear directorio de salida si no existe
os.makedirs(directorio_salida, exist_ok=True)

# Archivo para almacenar los nombres de los archivos procesados
archivo_nombres = os.path.join(directorio_salida, "nombres_archivos.txt")

# Limpiar el archivo si ya existe
with open(archivo_nombres, "w") as f:
    pass

# Comprobar si GraphicsMagick (gm) está instalado
def verificar_instalacion_gm():
    try:
        subprocess.run(["gm", "-version"], check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        print("GraphicsMagick detectado correctamente.")
    except FileNotFoundError:
        print("GraphicsMagick no está instalado. Instálalo antes de ejecutar este script.")
        exit(1)

# Procesar cada archivo en el directorio de entrada
def procesar_imagenes():
    for archivo in os.listdir(directorio_entrada):
        ruta_original = os.path.join(directorio_entrada, archivo)
        if os.path.isfile(ruta_original):
            nombre_sin_extension = os.path.splitext(archivo)[0]
            ruta_guardado = os.path.join(directorio_salida, f"{nombre_sin_extension}.webp")

            # Comando para convertir la imagen con optimizaciones adicionales
            calidad_inicial = 75  # Inicia con una calidad más baja para reducir iteraciones innecesarias
            
            while True:
                comando_convertir = [
                    "gm", "convert", ruta_original,
                    "-resize", "1080x1080^",
                    "-gravity", "center",
                    "-extent", "1080x1080",
                    "-quality", str(calidad_inicial),
                    ruta_guardado
                ]
                try:
                    subprocess.run(comando_convertir, check=True)
                except subprocess.CalledProcessError as e:
                    print(f"Error al convertir '{archivo}': {e}")
                    break
                
                # Verificar el tamaño del archivo (ajusta si es necesario)
                if os.path.exists(ruta_guardado) and os.path.getsize(ruta_guardado) <= 50 * 1024:
                    break

                # Si es demasiado grande, reduce la calidad y vuelve a intentarlo
                if calidad_inicial > 30:
                    calidad_inicial -= 5  
                else:
                    print(f"No se pudo reducir el tamaño de '{ruta_guardado}' a menos de 50 KB.")
                    break

            if os.path.exists(ruta_guardado):
                with open(archivo_nombres, "a") as f:
                    f.write(nombre_sin_extension + "\n")
                print(f"¡Imagen '{archivo}' convertida a .webp y guardada con éxito!")

if __name__ == "__main__":
    verificar_instalacion_gm()
    procesar_imagenes()
    print("¡Proceso completado! Nombres de archivos guardados en 'nombres_archivos.txt'")
