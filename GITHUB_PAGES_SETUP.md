# 🚀 GUÍA: Activar GitHub Pages

## Paso 1: Preparar tu repositorio

```bash
# Si aún no tienes Git instalado, descárgalo de: https://git-scm.com

# 1. Crea una carpeta para tu proyecto
mkdir gestor-dietas
cd gestor-dietas

# 2. Inicializa Git
git init

# 3. Copia estos archivos a la carpeta:
#    - index-final.html
#    - README.md

# 4. Renombra index-final.html a index.html (importante para GitHub Pages)
# En Windows: ren index-final.html index.html
# En Mac/Linux: mv index-final.html index.html
```

## Paso 2: Crear repositorio en GitHub

1. Ve a [GitHub.com](https://github.com) e inicia sesión
2. Haz clic en el botón **"+"** (arriba derecha) → **"New repository"**
3. Configuración del repositorio:
   - **Repository name**: `gestor-dietas` (o el nombre que prefieras)
   - **Description**: `Aplicación web para gestión de dietas y comisiones`
   - **Visibility**: 
     - ✅ **Public** (si quieres que sea visible y usar GitHub Pages gratis)
     - ⚠️ **Private** (GitHub Pages requiere plan de pago para repos privados)
   - ❌ NO marques "Add README" (ya lo tienes)
4. Haz clic en **"Create repository"**

## Paso 3: Subir tu código

```bash
# En tu terminal, dentro de la carpeta gestor-dietas:

# 1. Añade todos los archivos
git add .

# 2. Haz el primer commit
git commit -m "Initial commit - Gestor de Dietas v2.0"

# 3. Conecta con GitHub (reemplaza TU_USUARIO y TU_REPO)
git remote add origin https://github.com/TU_USUARIO/gestor-dietas.git

# 4. Sube el código
git branch -M main
git push -u origin main
```

**Ejemplo real:**
```bash
git remote add origin https://github.com/josefp/gestor-dietas.git
git push -u origin main
```

## Paso 4: Activar GitHub Pages

### Método Visual (Recomendado):

1. Ve a tu repositorio en GitHub
2. Haz clic en **"Settings"** (pestaña arriba)
3. En el menú izquierdo, busca **"Pages"** (sección Code and automation)
4. En **"Source"**, selecciona:
   - **Branch**: `main`
   - **Folder**: `/root`
5. Haz clic en **"Save"**
6. **¡Espera 1-2 minutos!** GitHub construye tu sitio
7. Recarga la página
8. Verás un mensaje verde: **"Your site is live at https://TU_USUARIO.github.io/gestor-dietas"**

### ⚠️ Importante:

- El archivo **DEBE llamarse `index.html`** (no `index-final.html`)
- Puede tardar hasta 10 minutos en aparecer la primera vez
- La URL será: `https://TU_USUARIO.github.io/NOMBRE_REPO`

## Paso 5: Actualizar el README

Una vez tengas tu URL de GitHub Pages:

1. Edita el `README.md`
2. Busca esta línea:
   ```markdown
   🌐 **Prueba la aplicación aquí:** [https://TU_USUARIO.github.io/gestor-dietas](https://TU_USUARIO.github.io/gestor-dietas)
   ```
3. Reemplaza `TU_USUARIO` con tu usuario real de GitHub
4. Guarda y sube los cambios:
   ```bash
   git add README.md
   git commit -m "Update demo URL"
   git push
   ```

## Paso 6: Verificar que funciona

1. Abre la URL en tu navegador: `https://TU_USUARIO.github.io/gestor-dietas`
2. Verifica que la app carga correctamente
3. Prueba todas las funcionalidades
4. Comprueba que funciona en móvil

## 🎉 ¡Listo!

Tu aplicación ahora está:
- ✅ **Documentada** con README profesional
- ✅ **Online** y accesible desde cualquier lugar
- ✅ **Compartible** con una URL simple
- ✅ **Gratis** gracias a GitHub Pages

## 🔄 Actualizar la app en el futuro

Cuando hagas cambios al código:

```bash
# 1. Modifica index.html
# 2. Guarda los cambios

# 3. En terminal:
git add index.html
git commit -m "Descripción de los cambios"
git push

# GitHub Pages se actualiza automáticamente en 1-2 minutos
```

## ⚠️ Solución de Problemas

### "La página muestra 404"
- Verifica que el archivo se llama `index.html` (no `index-final.html`)
- Espera 10 minutos y recarga
- Revisa que GitHub Pages esté activado en Settings

### "Los cambios no se reflejan"
- GitHub Pages tiene caché. Espera 2-5 minutos
- Prueba en modo incógnito
- Fuerza recarga con Ctrl+F5 (Windows) o Cmd+Shift+R (Mac)

### "No veo la opción Pages en Settings"
- Verifica que el repositorio sea **público**
- Comprueba que tienes permisos de administrador
- GitHub Pages gratis solo funciona con repos públicos

## 📧 ¿Necesitas ayuda?

Si tienes problemas, abre un Issue en el repositorio con:
- Captura de pantalla del error
- Navegador y sistema operativo
- URL de tu repositorio

---

**¡Felicidades! Tu app ya está online y profesionalmente documentada.** 🎊
