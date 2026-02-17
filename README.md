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

From repo root or from `frontend/`:

```bash
cd frontend   # or omit if you're already in frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port Vite shows).

## Deploy (Dokploy)

The app lives in **`frontend/`**. Set **Root Directory** to **`frontend`** in Dokploy so `frontend/.env` can be created and the build runs from `frontend/`. See [DEPLOY.md](DEPLOY.md) for details.

## Build

```bash
npm run build
npm run preview   # serve dist/
```

## Docker

**Option A – build from `frontend/` (recommended for Dokploy):**

```bash
cd frontend
docker build -t syaa-clothing .
docker run -p 3000:80 syaa-clothing
```

**Option B – build from repo root:**

```bash
docker build -t syaa-clothing .
docker run -p 3000:80 syaa-clothing
```

Or with Docker Compose (from repo root):

```bash
docker compose up --build
```

Site is at [http://localhost:3000](http://localhost:3000).

## Project structure

- **`frontend/`** – app source and build
- `frontend/src/pages/` — Home, Shop, ProductDetail, Cart, Checkout, OrderConfirmation
- `frontend/src/components/` — Layout, Header, Footer, ProductCard, ProductImage
- `frontend/src/context/CartContext.jsx` — cart state and helpers
- `frontend/src/data/products.js` — crop top catalog (18 products, 6 types × 3 colors)
