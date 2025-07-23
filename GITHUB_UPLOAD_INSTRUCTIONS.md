# Instrucciones para subir a GitHub

## Método 1: Subir archivos directamente en GitHub (Recomendado)

1. **Ve a tu repositorio:** https://github.com/JMMontelongo/contadora-romina-fanelli

2. **Haz clic en "uploading an existing file"** (en la página principal del repo)

3. **Arrastra estos archivos/carpetas desde Replit:**
   - client/ (toda la carpeta)
   - server/ (toda la carpeta)  
   - shared/ (toda la carpeta)
   - attached_assets/ (toda la carpeta)
   - package.json
   - package-lock.json
   - tsconfig.json
   - vite.config.ts
   - tailwind.config.ts
   - postcss.config.js
   - components.json
   - drizzle.config.ts
   - replit.md
   - .gitignore
   - .replit

4. **Commit message:** "Commit inicial - Sitio web profesional de contaduría para Romina Natalia Fanelli"

5. **Haz clic en "Commit changes"**

## Método 2: Si tienes Git en tu computadora local

```bash
# Clona el repositorio vacío
git clone https://github.com/JMMontelongo/contadora-romina-fanelli.git

# Copia todos los archivos del proyecto descargado de Replit

# Agrega todos los archivos
git add .

# Haz el commit inicial
git commit -m "Commit inicial - Sitio web profesional de contaduría"

# Sube al repositorio
git push origin main
```

## Archivos importantes que NO debes subir:
- node_modules/ (ya está en .gitignore)
- dist/ (archivos de build)
- .env (variables de entorno - mantén privadas)

## Variables de entorno para producción:
Cuando hagas deploy desde GitHub, necesitarás configurar estas variables:
- SENDGRID_API_KEY
- DATABASE_URL (si usas base de datos)