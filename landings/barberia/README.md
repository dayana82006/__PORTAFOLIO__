# Acero — Landing de barbería

Landing estática para **Acero Barbería**. Sin build ni dependencias: abre `index.html` o sírvela con cualquier servidor estático.

## Estructura

```
landing-barberia/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── hero.jpg
│   ├── corte-1.jpg
│   └── taller.jpg
├── README.md
└── README.pdf
```

## Cómo usar

1. Abre `index.html` en el navegador, **o**
2. Desde esta carpeta:

```bash
python3 -m http.server 8080
```

Luego visita [http://localhost:8080](http://localhost:8080).

El formulario de citas es demostrativo: valida los campos y muestra un mensaje de confirmación local.

## Secciones

- **Hero** a pantalla completa (marca, titular, texto y CTAs)
- **Oficio** — filosofía del corte
- **Servicios** con precios
- **El taller** / atmósfera
- **Citas** (formulario interactivo)

## Personalización

| Qué | Dónde |
|-----|--------|
| Textos y servicios | `index.html` |
| Colores y tipografía | variables en `css/styles.css` (`:root`) |
| Imágenes | carpeta `assets/` (mismos nombres o actualizar rutas) |
| Fuentes | Big Shoulders Display y Source Serif 4 (Google Fonts) |

## ZIP

El archivo `landing-barberia.zip` incluye HTML, CSS, JS, assets y `README.pdf`.

---

Imágenes de Unsplash (uso demostrativo). Sustitúyelas por fotos propias antes de producción.
