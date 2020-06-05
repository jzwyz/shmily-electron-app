# 生成macos的图标

sips -z 16 16 icon.png --out icon_16x16.png
sips -z 16 16 icon.png --out icon_16x16@2x.png
sips -z 24 24 icon.png --out icon_24x24.png
sips -z 24 24 icon.png --out icon_24x24@2x.png
sips -z 32 32 icon.png --out icon_32x32.png
sips -z 32 32 icon.png --out icon_32x32@2x.png
sips -z 48 48 icon.png --out icon_48x48.png
sips -z 48 48 icon.png --out icon_48x48@2x.png
sips -z 64 64 icon.png --out icon_64x64.png
sips -z 64 64 icon.png --out icon_64x64@2x.png
sips -z 86 96 icon.png --out icon_96x96.png
sips -z 86 96 icon.png --out icon_96x96@2x.png
sips -z 128 128 icon.png --out icon_128x128.png
sips -z 128 128 icon.png --out icon_128x128@2x.png
sips -z 256 256 icon.png --out icon_256x256.png
sips -z 256 256 icon.png --out icon_256x256@2x.png
sips -z 512 512 icon.png --out icon_512x512.png
sips -z 512 512 icon.png --out icon_512x512@2x.png
sips -z 1024 1024 icon.png --out icon_1024x1024.png
sips -z 1024 1024 icon.png --out icon_1024x1024@2x.png

iconutil -c icns ../icons.iconset -o icon.icns
