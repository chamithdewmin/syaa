# Deploying SYAA Clothing (Dokploy)

## Repository layout

- **`frontend/`** – Vite + React app (this is the deployable app).
- Root `Dockerfile` – builds from `frontend/` when context is repo root.

## Dokploy configuration

1. **Application root directory:** set to **`frontend`**  
   So the app path is `code/frontend/` after clone and `frontend/.env` can be created.

2. **Build:**
   - **Dockerfile path:** `frontend/Dockerfile` (or use root `Dockerfile` with build context **`.`**).
   - If using **root directory = `frontend`**: build context is `frontend/`, use `frontend/Dockerfile`.
   - If using **root directory = `.`**: build context is repo root, use root `Dockerfile`.

3. **Environment:**  
   `frontend/.env.example` is present. Create `frontend/.env` if your pipeline needs it (e.g. `cp frontend/.env.example frontend/.env`). The app runs without env vars.

## Quick fix for "Directory nonexistent" error

If you see:

```text
cannot create .../code/frontend/.env: Directory nonexistent
```

then the app was not under `frontend/`. This repo now has the app in **`frontend/`**. Set **Root Directory** in Dokploy to **`frontend`** and redeploy.
