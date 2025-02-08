import os
import subprocess

# Directorios de entrada y salida
directorio_entrada = r"/workspaces/kits_camaras/COMPRESOR/imagenes0/DS-2CE16D0T-IRPF(2.8mm)(C)"
directorio_salida = r"/workspaces/kits_camaras/src/assets/DS-2CE16D0T-IRPF(2.8mm)(C)"

# Crear directorio de salida si no existe
os.makedirs(directorio_salida, exist_ok=True)

# Archivo para almacenar los nombres de los archivos procesados
archivo_nombres = os.path.join(directorio_salida, "nombres_archivos.txt")
with open(archivo_nombres, "w") as f:
    pass  # Limpiar el archivo si ya existe

# Procesar cada archivo en el directorio de entrada
for archivo in os.listdir(directorio_entrada):
    ruta_original = os.path.join(directorio_entrada, archivo)
    if os.path.isfile(ruta_original):
        nombre_sin_extension = os.path.splitext(archivo)[0]
        ruta_guardado = os.path.join(directorio_salida, f"{nombre_sin_extension}.webp")

        # Comando para convertir la imagen con optimizaciones adicionales (reducir calidad inicialmente)
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
                print(f"Error al convertir {archivo}: {e}")
                break
            
            # Verificar el tamaño del archivo (ajusta según sea necesario)
            if not os.path.exists(ruta_guardado) or os.path.getsize(ruta_guardado) <= 50 * 1024:
                break
            
            # Si es demasiado grande o no se ha generado correctamente (por ejemplo por error), ajusta la calidad y vuelve a intentarlo.
            elif calidad_inicial > 30:  
                calidad_inicial -= 5  
                
        if not os.path.exists(ruta_guardado):
            print(f"No se pudo generar {ruta_guardado}.")
        
        else: 
            with open(archivo_nombres, "a") as f:
                    f.write(nombre_sin_extension + "\n")  
                    
                    # Corregido nfombre -> nombre 
                    
                    print(f"¡Imagen '{archivo}' convertida a .webp y guardada con éxito!")

print("¡Nombres de archivos guardados en 'nombres_archivos.txt'!")
