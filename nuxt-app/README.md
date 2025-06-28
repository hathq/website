# HAT Website Nuxt APP

## TIPS

* Compress asset files.

```
mkdir -p public/images/hats && for file in public/images/original/*.png; do npx sharp-cli -i "$file" -o "public/images/hats/$(basename "${file%.png}.webp")" resize 500 --compression webp; done
```