import os
import shutil

src = "temp_app"
dest = "."

for item in os.listdir(src):
    s = os.path.join(src, item)
    d = os.path.join(dest, item)
    shutil.move(s, d)

os.rmdir(src)
