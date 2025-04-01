#!/bin/bash
echo "🔍 Patching asset paths in HTML/TS files..."
find ./src -type f \( -name "*.html" -o -name "*.ts" \) -print0 |
  xargs -0 sed -i '' 's/src="assets\//src="\/assets\//g'
echo "✅ Pfade aktualisiert!"
