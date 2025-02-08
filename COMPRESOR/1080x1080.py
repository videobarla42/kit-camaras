from PIL import Image, ImageOps
import os

# Directorio de entrada y salida con rutas completas
directorio_entrada = r"/workspaces/kits_camaras/COMPRESOR/imagenes0/gggg"
directorio_salida = r"/workspaces/kits_camaras/src/assets/DS-2CE56D0T-IRPF(2.8mm)(C)"

# Obtener lista de archivos en el directorio de entrada
archivos = os.listdir(directorio_entrada)

# Lista para almacenar los nombres de los archivos procesados
nombres_archivos = []

for archivo in archivos:
    try:
        # Ruta completa del archivo de entrada
        ruta_original = os.path.join(directorio_entrada, archivo)

        # Abrir la imagen original
        imagen_original = Image.open(ruta_original)

        # Convertir la imagen al modo RGB si no está en ese formato
        if imagen_original.mode != "RGB":
            imagen_original = imagen_original.convert("RGB")

        # Crear un lienzo cuadrado de 1080x1080 manteniendo la relación de aspecto
        imagen_nueva = ImageOps.fit(imagen_original, (1080, 1080), Image.LANCZOS)

        # Ruta para guardar la nueva imagen con el mismo nombre que la original, pero con extensión .webp
        nombre_sin_extension = os.path.splitext(archivo)[0]
        ruta_guardado = os.path.join(directorio_salida, nombre_sin_extension + ".webp")

        # Guardar la nueva imagen con compresión optimizada para webp
        calidad_predeterminada = 85  # Calidad predeterminada
        imagen_nueva.save(ruta_guardado, format="WEBP", quality=calidad_predeterminada, method=6)

        # Verificar el tamaño del archivo y reducir la calidad si es necesario
        while os.path.getsize(ruta_guardado) > 50 * 1024:  # 50 KB en bytes
            calidad_predeterminada -= 5
            imagen_nueva.save(ruta_guardado, format="WEBP", quality=calidad_predeterminada, method=6)

        # Agregar el nombre del archivo a la lista
        nombres_archivos.append(nombre_sin_extension)

        print(f"¡Imagen '{archivo}' convertida a .webp y guardada con éxito!")
    except Exception as e:
        print(f"Error al procesar la imagen '{archivo}':", e)

# Guardar los nombres de los archivos en un archivo de texto
ruta_archivo_txt = os.path.join(directorio_salida, "nombres_archivos.txt")
with open(ruta_archivo_txt, "w") as archivo_txt:
    for nombre_archivo in nombres_archivos:
        archivo_txt.write(nombre_archivo + "\n")

print("¡Nombres de archivos guardados en 'nombres_archivos.txt'!")
