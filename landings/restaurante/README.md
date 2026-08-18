# Casa Lumbre — Landing de restaurante

Landing estática para el asador **Casa Lumbre**. Sin build ni dependencias: abre `index.html` o sírvela con cualquier servidor estático.

## Estructura

```
landing-restaurante/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── hero.jpg
│   ├── plato-1.jpg
│   ├── plato-2.jpg
│   └── salon.jpg
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

El formulario de reservas es demostrativo: valida los campos y muestra un mensaje de confirmación local.

## Secciones

- **Hero** a pantalla completa (marca, titular, texto y CTAs)
- **Filosofía** de cocina a la brasa
- **Carta** del día con precios
- **Salón** / atmósfera
- **Reservas** (formulario interactivo)

## Personalización

| Qué | Dónde |
|-----|--------|
| Textos y platos | `index.html` |
| Colores y tipografía | variables en `css/styles.css` (`:root`) |
| Imágenes | carpeta `assets/` (mismos nombres o actualizar rutas) |
| Fuentes | Syne y Fraunces (Google Fonts) |

## ZIP

El archivo `landing-restaurante.zip` incluye HTML, CSS, JS, assets y `README.pdf`.

---

Imágenes de Unsplash (uso demostrativo). Sustitúyelas por fotos propias antes de producción.
