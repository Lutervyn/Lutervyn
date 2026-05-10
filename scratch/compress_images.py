from PIL import Image
import os

def compress_image(file_path, quality=85):
    size_before = os.path.getsize(file_path) / (1024 * 1024)
    img = Image.open(file_path)
    # Convert to RGB if it's RGBA (for JPGs)
    if img.mode == 'RGBA':
        img = img.convert('RGB')
    img.save(file_path, "JPEG", quality=quality, optimize=True)
    size_after = os.path.getsize(file_path) / (1024 * 1024)
    print(f"Compressed {os.path.basename(file_path)}: {size_before:.2f}MB -> {size_after:.2f}MB")

target_files = [
    "public/wallpaper-day2.jpg",
    "public/wallpaper-night2.jpg",
    "public/macos-portfolio-demo.png"
]

for f in target_files:
    if os.path.exists(f):
        compress_image(f)
    else:
        print(f"File not found: {f}")
