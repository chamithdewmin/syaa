# SYAA Clothing

Frontend e-commerce site for **SYAA Clothing** — crop tops only, in **white**, **black**, and **teal**.

## Stack

- **React 19** + **Vite 7**
- **React Router** for routing
- **CSS Modules** + global theme (white / black / teal)

## Features

- **Home** — hero, featured crop tops, CTA
- **Shop** — all crop tops with filters by category (Ribbed, Oversized, Fitted, Wrap, Halter, Long Sleeve) and color (Teal, Black, White)
- **Product detail** — size, quantity, add to cart
- **Cart** — list, quantity update, remove, order summary
- **Checkout** — shipping form + payment form (demo only; no real payment)
- **Order confirmation** — thank-you page after “payment”

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview   # serve dist/
```

## Docker

```bash
docker build -t syaa-clothing .
docker run -p 3000:80 syaa-clothing
```

Or with Docker Compose:

```bash
docker compose up --build
```

Site is at [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/pages/` — Home, Shop, ProductDetail, Cart, Checkout, OrderConfirmation
- `src/components/` — Layout, Header, Footer, ProductCard, ProductImage
- `src/context/CartContext.jsx` — cart state and helpers
- `src/data/products.js` — crop top catalog (18 products, 6 types × 3 colors)
