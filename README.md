# 👨‍💻 Dani Dev | Portfolio

Portfolio web personal de **Daniel García**, desarrollador Full Stack.  
Construido como una SPA moderna y responsive para mostrar experiencia, proyectos y perfil profesional.

## 🚀 Demo

[https://danidev.es](https://danidev.es)

## 🛠️ Tecnologías

| Capa          | Tecnología                         |
|---------------|------------------------------------|
| Framework     | React 18                           |
| Build tool    | Vite 8                             |
| Estilos       | CSS plano (BEM con prefijo `pf-`)  |
| Iconos        | react-icons (Font Awesome, Simple Icons) |
| Despliegue    | GitHub Pages                       |
| Dominio       | danidev.es                         |

## 📦 Scripts

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción → dist/
npm run preview  # Vista previa del build local
npm run lint     # ESLint
npm run deploy   # Build + publicar en GitHub Pages
```

## 📁 Estructura

```
src/
├── main.jsx              # Punto de entrada
├── App.jsx               # Layout principal
├── App.css / index.css   # Estilos globales
├── components/           # Componentes con CSS co-localizado
│   ├── HeaderComponent
│   ├── PresentationComponent
│   ├── ProyectsComponent
│   ├── ContactLink
│   ├── LogoComponent
│   ├── IconComponent
│   └── .jsx              # LanguageCard
└── assets/               # Imágenes comprimidas
```

## 🌐 Despliegue

El sitio se publica en GitHub Pages con dominio personalizado.  
El `CNAME` (danidev.es) está en la raíz del repo y se despliega automáticamente con `gh-pages`.

```bash
npm run deploy
```
