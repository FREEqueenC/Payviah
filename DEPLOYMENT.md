# Deployment Guide: Payviah

This guide explains how to deploy **Payviah**. We have simplified the architecture so you can host the entire application (Frontend + Backend) as a single service.

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

## 2. Application Setup (Google Cloud Run)

This is the recommended method for deploying the unified application.

1. **Install Google Cloud SDK**: If you haven't already, install the gcloud CLI.

2. **Authenticate**: Log in to your Google Cloud account by running:

    ```bash
    gcloud auth login
    ```

3. **Deploy**: Navigate to the root directory of the `Payviah` project in your terminal and run the following command:

    ```bash
    gcloud run deploy payviah-app --source . --allow-unauthenticated
    ```

4. **Follow the Prompts**:
    - You will be prompted to enable the Artifact Registry and Cloud Build APIs if they aren't already.
    - Select a region for your service (e.g., `us-central1`).

5. **Set Environment Variable**: When prompted to set environment variables, add the `DATABASE_URL` from the Neon setup:
    - **Key**: `DATABASE_URL`
    - **Value**: Paste your Neon connection string.

Deployment will take a few minutes. `gcloud` will build your application using Google Cloud Buildpacks and deploy it. Once complete, it will provide you with the public URL for your service.

### Why no separate Frontend host?

We modified the server to serve the React application automatically. This means you don't need Vercel anymore. Your entire app lives on one URL (e.g., `https://payviah-app.onrender.com`).

---

## 3. Alternative: Render

If you prefer Render:

1. Go to Render.com and create a **New Web Service**.
2. Connect your GitHub repository.
3. Use the following settings:
    - **Environment**: `Node`
    - **Build Command**: `npm run build`
    - **Start Command**: `npm start`
4. Add the `DATABASE_URL` as an environment variable.
5. Click **Create Web Service**.
