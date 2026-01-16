# Documentación Técnica - Portfolio Modernizado

## 📋 Índice
- [Resumen de Cambios](#resumen-de-cambios)
- [Estilos Globales (index.css)](#estilos-globales-indexcss)
- [HeaderComponent](#headercomponent)
- [HeroComponent](#herocomponent)
- [AboutComponent](#aboutcomponent)
- [Propiedades CSS Avanzadas](#propiedades-css-avanzadas)
- [Referencias y Recursos](#referencias-y-recursos)

---

## 🎯 Resumen de Cambios

Este documento detalla todas las clases CSS, propiedades y atributos implementados en la modernización del portfolio, explicando su función y por qué se eligieron.

### Archivos Modificados/Creados:
1. `src/index.css` - Variables globales y reset
2. `src/components/HeaderComponent.jsx` - Estructura del header
3. `src/components/HeaderComponent.css` - Estilos del header
4. `src/components/HeroComponent.jsx` - Sección hero (NUEVO)
5. `src/components/HeroComponent.css` - Estilos del hero (NUEVO)
6. `src/components/AboutComponent.jsx` - Sección about (NUEVO)
7. `src/components/AboutComponent.css` - Estilos del about (NUEVO)

---

## 🌍 Estilos Globales (`index.css`)

### Variables CSS (Custom Properties)

```css
:root {
  --color-primary: #10b981;
  --color-primary-dark: #059669;
  --color-text-dark: #1f2937;
  --color-text-gray: #6b7280;
  --color-bg-light: #f3f4f6;
  --color-bg-mint: #ecfdf5;
  --color-border: #e5e7eb;
}
```

#### **¿Qué son las Custom Properties?**
Son variables nativas de CSS que permiten reutilizar valores en toda la hoja de estilos.

**Sintaxis:**
- **Declaración:** `--nombre-variable: valor;`
- **Uso:** `color: var(--nombre-variable);`

**Ventajas:**
- ✅ Centralización de valores
- ✅ Fácil mantenimiento
- ✅ Cambios en todo el sitio con un solo edit
- ✅ Soporte para temas (light/dark mode)

---

### Reset Global

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

#### **Propiedades explicadas:**

| Propiedad | Valor | Explicación |
|-----------|-------|-------------|
| `*` | Selector universal | Aplica a todos los elementos |
| `box-sizing` | `border-box` | El `width` y `height` incluyen padding y border |
| `margin` | `0` | Elimina márgenes por defecto del navegador |
| `padding` | `0` | Elimina padding por defecto del navegador |

**¿Por qué `box-sizing: border-box`?**

```
Sin border-box:
width: 200px + padding: 20px + border: 2px = 222px total

Con border-box:
width: 200px (todo incluido) = 200px total
```

Hace que el modelo de caja sea más predecible.

---

### Patrón de Puntos en Background

```css
body {
  background-color: var(--color-bg-mint);
  background-image: radial-gradient(circle, #d1d5db 1px, transparent 1px);
  background-size: 24px 24px;
}
```

#### **Propiedades explicadas:**

| Propiedad | Valor | Explicación |
|-----------|-------|-------------|
| `background-image` | `radial-gradient(...)` | Crea un gradiente radial (circular) |
| `circle` | Forma del gradiente | Círculo perfecto |
| `#d1d5db 1px` | Color stop | Gris claro de 0 a 1px |
| `transparent 1px` | Color stop | Transparente desde 1px |
| `background-size` | `24px 24px` | Repite el patrón cada 24x24px |

**Resultado visual:** Puntos grises espaciados uniformemente en el fondo.

---

### Importación de Fuente

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
```

#### **Query Parameters explicados:**

- `family=Inter` - Nombre de la fuente
- `wght@400;500;600;700;800` - Pesos disponibles
  - 400 = Regular
  - 500 = Medium
  - 600 = SemiBold
  - 700 = Bold
  - 800 = ExtraBold
- `display=swap` - Muestra fuente del sistema mientras carga, luego intercambia

---

## 🧭 HeaderComponent

### Estructura JSX

```jsx
<header className="header">
  <div className="header-container">
    <div className="logo">...</div>
    <nav className="nav">...</nav>
    <button className="btn-contact">...</button>
  </div>
</header>
```

---

### Clases CSS del Header

#### `.header`

```css
.header {
  background-color: white;
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
}
```

| Propiedad | Valor | Explicación |
|-----------|-------|-------------|
| `position` | `sticky` | Se queda fijo al hacer scroll, como `fixed` pero respeta el flujo |
| `top` | `0` | Distancia desde el top cuando se "pega" |
| `z-index` | `100` | Prioridad de apilamiento (mayor = más arriba) |
| `border-bottom` | `1px solid ...` | Línea sutil de separación |

**¿Por qué `sticky` en lugar de `fixed`?**
- `fixed`: Siempre fijo, puede tapar contenido
- `sticky`: Solo se fija cuando llegas a su posición, más natural

---

#### `.header-container`

```css
.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

| Propiedad | Valor | Explicación |
|-----------|-------|-------------|
| `max-width` | `1200px` | Ancho máximo del contenido |
| `margin` | `0 auto` | Centra horizontalmente (`auto` en left/right) |
| `display` | `flex` | Activa Flexbox |
| `justify-content` | `space-between` | Espacio entre elementos (logo izq, botón der) |
| `align-items` | `center` | Alinea verticalmente al centro |

---

#### `.logo` y `.logo-icon`

```css
.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
}

.logo-icon {
  width: 32px;
  height: 32px;
  background-color: var(--color-primary);
  color: white;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

| Propiedad | Valor | Explicación |
|-----------|-------|-------------|
| `gap` | `0.75rem` | Espacio entre elementos flex (12px) |
| `border-radius` | `6px` | Esquinas redondeadas |
| `justify-content` | `center` | Centra horizontalmente el SVG dentro |

**Unidad `rem`**: Relativa al tamaño de fuente raíz (normalmente 16px)
- `1rem` = 16px
- `0.75rem` = 12px

---

#### Navegación con Underline Animado

```css
.nav ul li a {
  color: var(--color-text-gray);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
}

.nav ul li a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 50%;
  background-color: var(--color-primary);
  transition: all 0.3s ease;
}

.nav ul li a:hover::after {
  width: 100%;
  left: 0;
}
```

#### **Conceptos clave:**

##### 1. **Pseudo-elemento `::after`**
Crea un elemento virtual después del contenido.

```
<a>About</a>  →  <a>About[::after]</a>
```

##### 2. **`content: ""`**
Obligatorio para que `::after` funcione. Vacío porque solo queremos la línea.

##### 3. **Posicionamiento Absoluto**
```css
position: absolute;
bottom: -5px;  /* 5px debajo del texto */
left: 50%;     /* Empieza en el centro */
```

**Con `position: relative` en el padre**, el `::after` se posiciona relativo al enlace.

##### 4. **Animación del Underline**

**Estado inicial:**
```
width: 0;      /* Invisible */
left: 50%;     /* Anclado al centro */
```

**Estado hover:**
```
width: 100%;   /* Ancho completo */
left: 0;       /* Empieza desde la izquierda */
```

**Transición:**
```css
transition: all 0.3s ease;
```
- `all`: Anima todas las propiedades que cambien
- `0.3s`: Duración de 300 milisegundos
- `ease`: Curva de aceleración (lento-rápido-lento)

---

#### `.btn-contact`

```css
.btn-contact {
  background-color: var(--color-primary);
  color: white;
  border: none;
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.btn-contact:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(16, 185, 129, 0.2);
}
```

#### **Propiedades destacadas:**

##### 1. **`box-shadow`**
```css
box-shadow: offsetX offsetY blur spread color;
box-shadow: 0 4px 6px rgba(16, 185, 129, 0.2);
```

| Parámetro | Valor | Explicación |
|-----------|-------|-------------|
| offsetX | `0` | Sin desplazamiento horizontal |
| offsetY | `4px` | Sombra 4px hacia abajo |
| blur | `6px` | Difuminado de 6px |
| spread | (omitido) | Sin expansión |
| color | `rgba(...)` | Verde con 20% opacidad |

##### 2. **`transform: translateY(-1px)`**
Mueve el elemento 1px hacia arriba (eje Y negativo).

**¿Por qué usar `transform` en lugar de `top`?**
- `transform` usa GPU → más suave
- `transform` no afecta al layout
- Mejor performance en animaciones

##### 3. **`cursor: pointer`**
Cambia el cursor a manita al pasar sobre el botón (indica clickeable).

---

## 🎨 HeroComponent

### Estructura JSX Completa

```jsx
<section className="hero">
  <div className="hero-container">
    <article className="hero-content">
      <div className="badge-work">
        <span className="badge-dot"></span>
        OPEN TO WORK
      </div>
      <h1 className="hero-title">
        Junior Web Developer<br />
        <span className="hero-title-accent">in training.</span>
      </h1>
      <p className="hero-description">...</p>
      <div className="hero-actions">
        <button className="btn btn-primary">...</button>
        <button className="btn btn-secondary">...</button>
      </div>
      <div className="hero-tech">...</div>
    </article>
    
    <article className="hero-visual">
      <div className="hero-card-wrapper">
        <div className="hero-card">
          <img className="hero-image" />
          <div className="hero-card-overlay">...</div>
        </div>
        <div className="hero-card-decoration"></div>
      </div>
    </article>
  </div>
</section>
```

---

### Clases CSS del Hero

#### `.hero` y `.hero-container`

```css
.hero {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
```

#### **Propiedades destacadas:**

##### 1. **`calc(100vh - 80px)`**
Función CSS para cálculos matemáticos.

- `100vh` = 100% de la altura del viewport (pantalla)
- `-80px` = Resta la altura del header
- **Resultado:** Hero ocupa toda la pantalla menos el header

##### 2. **CSS Grid Layout**
```css
display: grid;
grid-template-columns: 1fr 1fr;
```

- `1fr` = 1 fracción del espacio disponible
- `1fr 1fr` = 2 columnas de igual tamaño (50% cada una)

**Diferencia con Flexbox:**
- **Grid:** Layout bidimensional (filas Y columnas)
- **Flexbox:** Layout unidimensional (fila O columna)

---

#### Badge "Open to Work" con Animación

```css
.badge-work {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(16, 185, 129, 0.1);
  color: var(--color-primary);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  width: fit-content;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background-color: var(--color-primary);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

#### **Propiedades destacadas:**

##### 1. **`rgba(16, 185, 129, 0.1)`**
Color RGB con canal Alpha (transparencia).

```
rgba(R, G, B, A)
    │  │  │  └─ Alpha: 0.1 = 10% opacidad
    │  │  └──── Blue: 129
    │  └─────── Green: 185
    └────────── Red: 16
```

##### 2. **`letter-spacing: 0.5px`**
Espacio entre letras (tracking tipográfico).

##### 3. **`width: fit-content`**
El elemento se ajusta al tamaño de su contenido (no ocupa toda la línea).

##### 4. **`border-radius: 50%`**
Crea un círculo perfecto (en elementos cuadrados).

##### 5. **`@keyframes` y `animation`**

**Definición de la animación:**
```css
@keyframes pulse {
  0% { opacity: 1; }      /* Estado inicial */
  50% { opacity: 0.5; }   /* Medio de la animación */
  100% { opacity: 1; }    /* Estado final (vuelve al inicio) */
}
```

**Aplicación:**
```css
animation: pulse 2s infinite;
        │    │    │    └─ Repetir infinitamente
        │    │    └────── Duración: 2 segundos
        │    └─────────── Nombre de la animación
        └──────────────── Propiedad
```

---

#### Título con Acento

```css
.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  color: var(--color-text-dark);
  margin: 0;
}

.hero-title-accent {
  color: var(--color-primary);
}
```

##### **`line-height: 1.1`**
Espacio entre líneas de texto.

- Valor sin unidad = multiplicador del tamaño de fuente
- `1.1` = 110% del font-size
- **Más bajo = líneas más juntas** (bueno para títulos grandes)

---

#### Botones con Efectos

```css
.btn-primary {
  background-color: var(--color-primary);
  color: white;
  box-shadow: 0 4px 6px rgba(16, 185, 129, 0.2);
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(16, 185, 129, 0.3);
}

.btn-secondary {
  background-color: white;
  color: var(--color-text-dark);
  border: 2px solid var(--color-border);
}

.btn-secondary:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}
```

**Efecto hover del botón primario:**
1. Color más oscuro
2. Se eleva 2px
3. Sombra más pronunciada

**Doble efecto visual** = sensación de presionar un botón físico.

---

#### Efectos Avanzados en la Imagen

##### 1. **Wrapper con Aspect Ratio**

```css
.hero-card-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  max-width: 500px;
}
```

##### **`aspect-ratio: 1`**
Propiedad CSS moderna que mantiene una relación ancho/alto.

- `aspect-ratio: 1` = cuadrado (1:1)
- `aspect-ratio: 16/9` = pantalla ancha
- `aspect-ratio: 4/3` = TV antigua

**Ventaja:** Sin necesidad de padding-hack tradicional.

---

##### 2. **Tarjeta con Rotación**

```css
.hero-card {
  position: absolute;
  inset: 0;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transform: rotate(3deg);
  transition: transform 0.5s ease-out;
  z-index: 10;
}

.hero-card:hover {
  transform: rotate(0deg);
}
```

##### **`inset: 0`**
Shorthand para posicionar en todos los lados.

```css
inset: 0;
/* Equivale a: */
top: 0;
right: 0;
bottom: 0;
left: 0;
```

##### **`overflow: hidden`**
Esconde cualquier contenido que se salga del contenedor (recorta la imagen en las esquinas redondeadas).

##### **`transform: rotate(3deg)`**
Rota el elemento 3 grados en sentido horario.

- Valores positivos = horario
- Valores negativos = antihorario

##### **Múltiples Box Shadows**
```css
box-shadow: sombra1, sombra2;
```
Superpone dos sombras para mayor profundidad:
1. Sombra grande difusa (20px down)
2. Sombra pequeña cercana (10px down)

##### **`transition: transform 0.5s ease-out`**

Curvas de aceleración:
- `ease`: Lento-rápido-lento (por defecto)
- `ease-in`: Empieza lento
- `ease-out`: Termina lento
- `linear`: Velocidad constante

---

##### 3. **Overlay Glassmorphism**

```css
.hero-card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
```

##### **`backdrop-filter: blur(8px)`**
Aplica desenfoque al contenido **detrás** del elemento.

```
Sin backdrop-filter:
┌────────────┐
│ ████████   │  ← Imagen nítida
│ [Badge]    │  ← Fondo opaco
└────────────┘

Con backdrop-filter:
┌────────────┐
│ ▓▓▓▓▓▓▓▓   │  ← Imagen desenfocada
│ [Badge]    │  ← Efecto cristal
└────────────┘
```

**Prefijo `-webkit-`:** Para compatibilidad con Safari/Chrome antiguos.

**Efecto glassmorphism:**
1. Fondo semi-transparente
2. Desenfoque del contenido detrás
3. Borde sutil
= Apariencia de vidrio esmerilado

---

##### 4. **Tarjeta Decorativa (Depth Layer)**

```css
.hero-card-decoration {
  position: absolute;
  inset: 0;
  border: 2px solid rgba(16, 185, 129, 0.3);
  border-radius: 16px;
  transform: rotate(-3deg) translate(1rem, 1rem);
  z-index: 0;
}
```

##### **`transform` con múltiples funciones**
```css
transform: rotate(-3deg) translate(1rem, 1rem);
           └─ Rota 3° antihorario
                         └─ Mueve 16px derecha y abajo
```

**Las transformaciones se aplican en orden:**
1. Primero rota
2. Luego traslada

##### **`z-index: 0` vs `z-index: 10`**
```
z-index: 10  ← hero-card (arriba)
z-index: 0   ← hero-card-decoration (abajo)
```

Crea efecto de capas apiladas.

---

#### Media Query Responsive

```css
@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-card-wrapper {
    max-width: 100%;
  }
}
```

##### **`@media (max-width: 768px)`**
"Si el ancho de la pantalla es 768px o menos..."

**Breakpoint común:**
- ≤ 768px = Tablet/Mobile
- > 768px = Desktop

**Cambios aplicados:**
- Grid de 2 columnas → 1 columna (apilado)
- Título más pequeño (2.5rem en lugar de 3.5rem)
- Imagen ocupa todo el ancho disponible

---


---

## 👤 AboutComponent

### Estructura JSX (Simplificada)

```jsx
<section className="about-section">
  <div className="about-container">
    {/* Columna Imagen */}
    <div className="about-image-wrapper"> ... </div>

    {/* Columna Contenido */}
    <div className="about-content">
      <div className="section-header"> ... </div>
      <h2 className="about-title"> ... </h2>
      <p className="about-description"> ... </p>
      <div className="about-actions"> ... </div>
      <div className="about-cards-grid"> ... </div>
    </div>
  </div>
</section>
```

### Clases CSS del About


### Clases CSS del About

#### `.about-container` (Grid Layout)

```css
.about-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
}
```

-   **Grid de 2 columnas:** `grid-template-columns: 1fr 1fr` divide el espacio en dos partes iguales.
-   **Alineación:** `align-items: start` alinea los elementos al inicio verticalmente (arriba), útil si las columnas tienen alturas diferentes.

#### `.about-image-wrapper` (Estructura de la Imagen)

```css
.about-image-wrapper {
    position: relative;
    width: 100%;
    max-width: 450px;
    aspect-ratio: 1; /* Cuadrado */
    margin: 0 auto;
}
```

-   **`aspect-ratio: 1`**: Asegura que el contenedor sea siempre un cuadrado, sin importar el ancho.
-   **`position: relative`**: Necesario para posicionar elementos absolutos dentro (el offset y el badge).

#### `.about-image-offset` (Decoración de Fondo)

```css
.about-image-offset {
    position: absolute;
    top: 2rem;
    left: 2rem;
    width: 100%;
    height: 100%;
    background-color: #d1fae5;
    border-radius: 24px;
    z-index: 0;
}
```

-   **Posicionamiento:** Desplazado `2rem` hacia abajo y derecha para crear el efecto de dos capas.
-   **Color:** `#d1fae5` (menta suave).
-   **Capas:** `z-index: 0` lo envía al fondo.

#### `.about-profile-img` (Estilo de la Foto)

```css
.about-profile-img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 24px;
    border: 8px solid white;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
    z-index: 10;
}
```

-   **Borde:** `8px solid white` crea el "marco" entre la foto y el offset.
-   **Sombra:** Doble sombra suave para profundidad.
-   **Capas:** `z-index: 10` la trae al frente.

#### `.about-badge` (Etiqueta "Open to Work")

```css
.about-badge {
    position: absolute;
    bottom: 2rem;
    right: -1rem;
    background: white;
    border-radius: 50px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    z-index: 20;
    /* ... flex props ... */
}
```

-   **Ubicación Flotante:** `bottom: 2rem`, `right: -1rem` la coloca superpuesta en la esquina inferior derecha.

#### Tipografía y Textos

-   **`.highlight-green`**: Crea un subrayado grueso y decorativo.
    ```css
    .highlight-green {
        text-decoration: underline;
        text-decoration-color: rgba(16, 185, 129, 0.3);
        text-decoration-thickness: 6px;
        text-underline-offset: 4px;
    }
    ```
-   **`.section-subtitle`**: Texto pequeño, en mayúsculas y espaciado (`letter-spacing: 1.5px`).

#### Botones (`.btn`)

Estilos base con variantes:
-   **`.btn-primary`**: Fondo verde (`#10b981`), texto blanco. Hover oscurece el fondo.
-   **`.btn-outline`**: Fondo blanco, borde gris. Hover cambia borde a gris oscuro.

#### Tarjetas (`.info-card`)

```css
.info-card {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); /* Sombra sutil */
    /* ... */
}
```

-   **Diseño:** Tarjetas limpias con iconos dentro de `.icon-box` (cajas cuadradas verdes).

#### Media Queries (Responsive)

-   **Mobile (`max-width: 968px`)**:
    -   `grid-template-columns: 1fr`: Columna única (apila imagen y texto).
    -   Reducción de tamaño de imagen.
-   **Small Screens (`max-width: 640px`)**:
    -   Ajustes de padding y tamaño de fuente del título.


---

## 🎓 Propiedades CSS Avanzadas

### Resumen de Conceptos Clave

| Concepto | Qué es | Uso en el proyecto |
|----------|--------|-------------------|
| **Custom Properties** | Variables CSS nativas | Paleta de colores centralizada |
| **Flexbox** | Layout unidimensional | Header, botones, badges |
| **Grid** | Layout bidimensional | Hero container (2 columnas) |
| **Pseudo-elementos** | Elementos virtuales | `::after` para underline animado |
| **Transforms** | Manipulación de geometría | Rotación 3D de tarjeta, elevación |
| **Transitions** | Animaciones de cambio de estado | Hover effects suaves |
| **Keyframes** | Animaciones complejas | Pulso del badge |
| **Backdrop Filter** | Filtros al fondo | Glassmorphism overlay |
| **Position** | Control de ubicación | Sticky header, absolute overlays |
| **Box Shadow** | Sombras | Profundidad en tarjetas y botones |

---

### Jerarquía de Selectores Usados

```css
.clase                    /* Clase simple */
.clase .clase-hija        /* Descendiente */
.clase:hover              /* Pseudo-clase */
.clase::after             /* Pseudo-elemento */
@media (condición)        /* Media query */
@keyframes nombre         /* Definición de animación */
```

---

## 📚 Referencias y Recursos

### Documentación Oficial
- [MDN Web Docs - CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [CSS Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Tricks - Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

### Herramientas Usadas
- [Google Fonts](https://fonts.google.com/) - Inter font family
- [Shields.io](https://shields.io/) - Tech badges

### Inspiración de Diseño
- Glassmorphism trend
- Material Design principles
- Modern portfolio best practices

---

## 🔍 Glosario de Términos

| Término | Definición |
|---------|------------|
| **Viewport** | Área visible del navegador |
| **Rem** | Unidad relativa al font-size raíz (16px por defecto) |
| **RGBA** | Red, Green, Blue, Alpha (color con transparencia) |
| **GPU** | Graphics Processing Unit (procesa `transform`) |
| **Responsive** | Diseño que se adapta a diferentes pantallas |
| **Breakpoint** | Punto donde cambia el diseño responsive |
| **Sticky** | Posicionamiento que se fija al hacer scroll |
| **Aspect Ratio** | Relación entre ancho y alto |
| **Glassmorphism** | Estilo de diseño con efecto vidrio |

---

**Última actualización:** 15 de Enero, 2026  
**Autor:** Mateo Castro Souto
