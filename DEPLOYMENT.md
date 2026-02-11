# Deployment Guide: Payviah

This guide explains how to deploy **Payviah** (formerly Nexum). We have simplified the architecture so you can host the entire application (Frontend + Backend) as a single service.

## Architecture

- **Database**: Neon (PostgreSQL)
- **Application**: Render or Google Cloud Run (Node.js API + React App)

---

## 1. Database Setup (Neon)

1. Go to [Neon.tech](https://neon.tech) and log in.
2. Create a project named `payviah`.
3. **Copy the Connection String**. format: `postgres://user:password@host/db?sslmode=require`
4. Save this for the next step.

---

## 2. Application Setup (Unified)

You can deploy the entire app to **Render** as a single service. This is the simplest method.

1. Go to [Render.com](https://render.com).
2. Click **New +** -> **Web Service**.
3. Connect your GitHub repository (`Payviah`).
4. **Settings**:
    - **Name**: `payviah-app`
    - **Root Directory**: `.` (leave empty)
    - **Environment**: Node
    - **Build Command**: `npm run build`
      *(This command will install backend deps, then go to frontend folder, install deps, and build the React app)*
    - **Start Command**: `npm start`
      *(This starts the Node server, which now serves both the API and the React frontend)*
    - **Plan**: Free

5. **Environment Variables** (Scroll down):
    - Key: `DATABASE_URL`
    - Value: Paste your Neon connection string.

6. Click **Create Web Service**.

### Why no separate Frontend host?

We modified the server to serve the React application automatically. This means you don't need Vercel anymore. Your entire app lives on one URL (e.g., `https://payviah-app.onrender.com`).

---

## 3. Alternative: Google Cloud Run

If you prefer Google Cloud:

1. Install Google Cloud SDK.
2. Run `gcloud run deploy` in the root directory.
3. Select "Source Code" (it will build partially using Buildpacks).
4. Set environment variable `DATABASE_URL` during deployment.
