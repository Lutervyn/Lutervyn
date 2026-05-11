import os
import re

# Directory to walk through
target_dirs = ["components", "app"]
base_path = "/Lutervyn"

# File extensions to look into
extensions = [".tsx", ".ts", ".js", ".jsx", ".css"]

# Asset extensions to prefix
asset_extensions = [".png", ".jpg", ".jpeg", ".svg", ".webp", ".mp3", ".wav"]

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find strings starting with / and ending with an asset extension
    # Example: "/github.png" -> "/Lutervyn/github.png"
    # We avoid already prefixed ones
    def replace_func(match):
        path = match.group(1)
        if path.startswith(base_path):
            return f'"{path}"'
        return f'"{base_path}{path}"'

    # Search for strings like "/icon.png"
    pattern = r'"(/[^"]+\.(?:png|jpg|jpeg|svg|webp|mp3|wav))"'
    new_content = re.sub(pattern, replace_func, content)
    
    # Also handle single quotes
    pattern_single = r"\'(/[^']+\.(?:png|jpg|jpeg|svg|webp|mp3|wav))\'"
    def replace_func_single(match):
        path = match.group(1)
        if path.startswith(base_path):
            return f"'{path}'"
        return f"'{base_path}{path}'"
    
    new_content = re.sub(pattern_single, replace_func_single, new_content)

    if content != new_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated: {file_path}")

for d in target_dirs:
    for root, dirs, files in os.walk(d):
        for file in files:
            if any(file.endswith(ext) for ext in extensions):
                process_file(os.path.join(root, file))
