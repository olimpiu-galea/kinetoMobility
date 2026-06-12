"""Crop title/footer + side labels, remove gray background."""
from pathlib import Path

import cv2
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "images" / "body-model-reference.png"
OUT = ROOT / "public" / "images" / "body-model.png"

# Crop title, footer, and side label columns
CROP_LEFT = 108
CROP_TOP = 132
CROP_RIGHT = 711
CROP_BOTTOM = 922

img = Image.open(SRC).convert("RGBA")
cropped = img.crop((CROP_LEFT, CROP_TOP, CROP_RIGHT, CROP_BOTTOM))
data = np.array(cropped)
h, w = data.shape[:2]
rgb = data[:, :, :3].astype(np.uint8)
alpha = data[:, :, 3].copy()

r, g, b = rgb[:, :, 0], rgb[:, :, 1], rgb[:, :, 2]

# Gray background → transparent
bg = (
    (r.astype(np.int16) > 178)
    & (g.astype(np.int16) > 178)
    & (b.astype(np.int16) > 178)
    & (np.abs(r.astype(np.int16) - g.astype(np.int16)) < 32)
    & (np.abs(g.astype(np.int16) - b.astype(np.int16)) < 32)
)
alpha[bg] = 0

# Erase leftover label text in thin side strips only
xx = np.arange(w, dtype=np.int16)
X, _ = np.meshgrid(xx, np.arange(h))
strip = (X < 12) | (X > w - 12)
dark = (r.astype(np.int16) < 160) & (g.astype(np.int16) < 160) & (b.astype(np.int16) < 160)
strip_mask = (strip & dark).astype(np.uint8) * 255

bgr = cv2.cvtColor(rgb, cv2.COLOR_RGB2BGR)
inpainted = cv2.inpaint(bgr, strip_mask, 3, cv2.INPAINT_TELEA)
rgb = cv2.cvtColor(inpainted, cv2.COLOR_BGR2RGB)

out = np.dstack([rgb, alpha])
Image.fromarray(out).save(OUT, optimize=True)
print(f"Saved {OUT} ({w}x{h}), offset=({CROP_LEFT},{CROP_TOP})")
