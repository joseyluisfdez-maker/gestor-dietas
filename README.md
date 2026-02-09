# 📊 Gestor de Dietas Pro

> Aplicación web profesional para la gestión de dietas y comisiones de viaje de funcionarios públicos

![Version](https://img.shields.io/badge/version-2.0-blue)
![License](https://img.shields.io/badge/license-proprietary-red)
![Platform](https://img.shields.io/badge/platform-web-green)
![Status](https://img.shields.io/badge/status-active-success)

---

## 📋 Descripción

**Gestor de Dietas Pro** es una aplicación web diseñada específicamente para funcionarios públicos que necesitan gestionar sus dietas y comisiones de servicio. Permite calcular automáticamente las dietas según el país de destino, grupo salarial, y llevar un control completo de anticipos, autorizaciones y liquidaciones.

### ✨ Características Principales

- 📅 **Registro de Comisiones** - Introduce fechas de inicio/fin y calcula automáticamente
- 💰 **Cálculo Automático** - Dietas calculadas según país, grupo y duración
- 📝 **Gestión Completa** - Anticipos, autorizaciones y liquidaciones
- 📊 **Historial** - Consulta todas tus comisiones liquidadas
- 🌍 **Base de Datos Internacional** - 32 países con tarifas actualizadas
- 🔒 **Seguridad** - Protección con PIN de 4 dígitos
- 🌙 **Modo Oscuro** - Cuida tu vista en horarios nocturnos
- 📱 **100% Responsive** - Funciona en móvil, tablet y desktop
- 💾 **Almacenamiento Local** - Tus datos se guardan en tu navegador
- ⚡ **Sin Instalación** - Abre y usa, sin configuración

---

## 🚀 Inicio Rápido

### Instalación

**No requiere instalación.** Es un archivo HTML único que funciona offline.

1. Descarga el archivo `index-final.html`
2. Ábrelo con cualquier navegador moderno (Chrome, Firefox, Safari, Edge)
3. ¡Listo! Ya puedes empezar a usarlo

### Demo Online

🌐 **Prueba la aplicación aquí:** [https://joseyluisfdez-maker.github.io/gestor-dietas](https://joseyluisfdez-maker.github.io/gestor-dieta)

*(Reemplaza con tu URL real después de activar GitHub Pages)*

---

## 📖 Guía de Uso

### 1️⃣ Nueva Comisión

1. Introduce las **fechas de inicio y fin** del viaje
2. Selecciona el **país de destino** de la lista
3. Elige tu **grupo personal** (1, 2 o 3)
4. Marca las opciones si:
   - **Media manutención**: Llegada después de las 14h el último día
   - **Solicitar anticipo**: Se calculará automáticamente el porcentaje configurado
5. Haz clic en **"Registrar Comisión"**

### 2️⃣ Gestión de Comisiones

En esta sección verás todas tus comisiones pendientes con tres acciones:

- **ANTICIPO/COBRADO**: Marca cuando cobres el anticipo
- **AUTORIZAR/AUTORIZADO**: Marca cuando la comisión esté autorizada
- **LIQUIDAR**: Solo disponible si está autorizada. Mueve la comisión al histórico

### 3️⃣ Histórico

Consulta todas las comisiones liquidadas con el **total cobrado** acumulado. Puedes eliminar registros antiguos si es necesario.

### 4️⃣ Países

Base de datos completa de tarifas de dietas por país y grupo:
- **Alojamiento**: Importe por día
- **Manutención**: Importe por día
- **Total Día**: Suma de ambos conceptos
- Usa el **buscador** para encontrar países rápidamente

### 5️⃣ Ajustes

Personaliza la aplicación:
- **Nombre**: Aparecerá en el encabezado
- **PIN**: Protección de acceso (4 dígitos)
- **% Anticipo**: Por defecto 80% (recomendado)
- **PIN al iniciar**: Activa/desactiva protección
- **Modo Oscuro**: Cambia el tema visual

---

## 🛠️ Tecnologías

Esta aplicación está construida con:

- **HTML5** - Estructura semántica
- **CSS3** - Diseño moderno con variables CSS
- **JavaScript Vanilla** - Sin frameworks, código puro optimizado
- **LocalStorage API** - Persistencia de datos local
- **PWA Ready** - Instalable como aplicación

### Sin Dependencias

- ❌ No requiere Node.js
- ❌ No requiere npm
- ❌ No requiere servidor
- ❌ No requiere base de datos
- ✅ Un solo archivo HTML autocontenido

---

## 💾 Almacenamiento de Datos

### ¿Dónde se guardan mis datos?

Todos los datos se almacenan **localmente en tu navegador** usando `localStorage`. Esto significa:

- ✅ **Privacidad total**: Nada se envía a servidores externos
- ✅ **Sin internet**: Funciona completamente offline
- ✅ **Rápido**: Acceso instantáneo a tus datos
- ⚠️ **Limitación**: Los datos están vinculados al navegador y dispositivo

### ⚠️ Importante

- Si borras los datos del navegador, perderás la información
- Los datos **NO se sincronizan** entre dispositivos
- Se recomienda hacer **backup manual** exportando los registros periódicamente

---

## 📱 Compatibilidad

### Navegadores Soportados

| Navegador | Versión Mínima | Estado |
|-----------|----------------|--------|
| Chrome    | 90+            | ✅ Soportado |
| Firefox   | 88+            | ✅ Soportado |
| Safari    | 14+            | ✅ Soportado |
| Edge      | 90+            | ✅ Soportado |
| Opera     | 76+            | ✅ Soportado |

### Sistemas Operativos

- ✅ Windows 10/11
- ✅ macOS 10.15+
- ✅ Linux (todas las distros modernas)
- ✅ Android 8.0+
- ✅ iOS 14+

### Dispositivos

- ✅ Desktop (1920x1080 y superiores)
- ✅ Laptop (1366x768 y superiores)
- ✅ Tablet (768x1024)
- ✅ Móvil (375x667 y superiores)

---

## 🌍 Países Incluidos

La aplicación incluye tarifas actualizadas para **32 países**:

<details>
<summary>Ver lista completa de países</summary>

- 🇪🇸 España
- 🇦🇫 Afganistán
- 🇦🇱 Albania
- 🇩🇪 Alemania
- 🇦🇩 Andorra
- 🇦🇴 Angola
- 🇸🇦 Arabia Saudita
- 🇩🇿 Argelia
- 🇦🇷 Argentina
- 🇦🇺 Australia
- 🇦🇹 Austria
- 🇧🇪 Bélgica
- 🇧🇴 Bolivia
- 🇧🇷 Brasil
- 🇨🇱 Chile
- 🇨🇳 China
- 🇨🇴 Colombia
- 🇰🇷 Corea del Sur
- 🇩🇰 Dinamarca
- 🇪🇨 Ecuador
- 🇪🇬 Egipto
- 🇺🇸 Estados Unidos
- 🇫🇮 Finlandia
- 🇫🇷 Francia
- 🇬🇷 Grecia
- 🇮🇹 Italia
- 🇯🇵 Japón
- 🇲🇽 México
- 🇵🇹 Portugal
- 🇬🇧 Reino Unido
- 🇷🇺 Rusia
- 🇨🇭 Suiza

</details>

Cada país tiene 3 grupos con tarifas diferenciadas de alojamiento y manutención.

---

## 🔒 Seguridad y Privacidad

### Características de Seguridad

- 🔐 **PIN de 4 dígitos** opcional para proteger el acceso
- 🚫 **Sin conexión a internet** - tus datos nunca salen del dispositivo
- 💾 **Almacenamiento local cifrado** por el navegador
- 👁️ **Sin tracking ni analytics** - privacidad total

### Recomendaciones

1. Usa un PIN único, no lo compartas
2. No uses la app en ordenadores públicos sin activar el PIN
3. Haz backups periódicos de tus datos importantes
4. Cierra el navegador al terminar en dispositivos compartidos

---

## 🐛 Solución de Problemas

### La app no carga

- Asegúrate de usar un navegador moderno actualizado
- Verifica que JavaScript esté habilitado
- Prueba en modo incógnito para descartar extensiones

### Perdí mis datos

- Si borraste los datos del navegador, no se pueden recuperar
- Comprueba si usaste otro navegador o dispositivo
- Los datos NO se sincronizan entre dispositivos

### El PIN no funciona

- Verifica que tengas activada la opción "PIN al iniciar"
- El PIN debe tener exactamente 4 dígitos
- Si olvidaste el PIN, tendrás que borrar los datos del navegador

### No funciona en móvil

- Verifica que tengas Android 8+ o iOS 14+
- Usa Chrome, Safari o Firefox actualizados
- Comprueba que JavaScript esté habilitado

---

## 📝 Changelog

### Version 2.0 (2026-02-07)

#### Añadido
- ✨ Interfaz completamente rediseñada y optimizada
- 🎨 Modo oscuro completo
- 📱 Responsive mejorado para móviles
- 🔄 Sistema de modales profesional
- ⚡ Optimización de rendimiento
- 🛡️ Validaciones robustas de datos
- 🔍 Búsqueda con debounce en países

#### Mejorado
- 🚀 Rendimiento general de la aplicación
- 💅 Diseño visual más limpio y moderno
- 📊 Cálculos más precisos y rápidos
- 🎯 UX mejorada en formularios

#### Corregido
- 🐛 Problemas de compatibilidad en Android
- 🔧 Errores en el cálculo de fechas
- 📅 Validación de solapamiento de comisiones
- 🔒 Protección con PIN optimizada

---

## 📄 Licencia

© 2026 FP - Todos los derechos reservados

Este software es de uso **exclusivo y privado**. No está permitido:
- ❌ Redistribuir el código
- ❌ Modificar y redistribuir
- ❌ Uso comercial sin autorización
- ❌ Eliminar los créditos del autor

Para consultas sobre licencias comerciales, contacta al autor.

---

## 👨‍💻 Autor

**Desarrollado por FP**

© 2026 FP - Todos los derechos reservados

---

## 🤝 Contribuir

Este es un proyecto privado. Si encuentras algún error:

1. Abre un **Issue** describiendo el problema
2. Incluye capturas de pantalla si es posible
3. Especifica navegador, sistema operativo y versión

---

## ⭐ Soporte

Si esta aplicación te ha sido útil, considera:

- ⭐ Darle una estrella a este repositorio
- 🐛 Reportar bugs si encuentras alguno
- 💡 Sugerir mejoras en Issues
- 📢 Compartirla con otros funcionarios que la necesiten

---

## 📚 Recursos Adicionales

- [Wiki del proyecto](https://github.com/TU_USUARIO/gestor-dietas/wiki) - Documentación completa
- [Issues](https://github.com/TU_USUARIO/gestor-dietas/issues) - Reportar problemas
- [Releases](https://github.com/TU_USUARIO/gestor-dietas/releases) - Historial de versiones

---

<div align="center">

**Hecho con ❤️ por FP**

© 2026 FP - Todos los derechos reservados

*Gestor de Dietas Pro - Simplificando la gestión de comisiones desde 2026*

</div>
