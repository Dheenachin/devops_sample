# DevOps Sample Web App

A tiny Node.js HTTP application for practicing Git, Docker, and GitHub Actions.

## Prerequisites

- Node.js 22 or newer (for running tests locally)
- Docker Desktop (for container practice)
- Git and a GitHub account (for CI practice)

## 1. Run locally

```bash
npm test
npm start
```

Open these URLs in your browser:

- http://localhost:3000/
- http://localhost:3000/health

Stop the app with `Ctrl+C`.

## 2. Run with Docker

```bash
docker build -t devops-sample-webapp .
docker run --rm -p 3000:3000 devops-sample-webapp
```

Or use Docker Compose:

```bash
docker compose up --build
```

To stop Compose, press `Ctrl+C`, then run `docker compose down` in another terminal if needed.

## 3. Push to GitHub and trigger CI

Create an empty GitHub repository, then run these commands from this project folder:

```bash
git init
git add .
git commit -m "Initial DevOps sample app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your own repository URL. GitHub Actions will run tests and build the Docker image on pushes to `main` and pull requests targeting `main`.

## What this first version does

- Serves a welcome JSON response at `/`
- Exposes a health endpoint at `/health`
- Runs a Node.js test in CI
- Builds a Docker image in CI

## Next upgrades

1. Add a frontend.
2. Add linting and dependency/security scanning.
3. Publish the image to GitHub Container Registry (GHCR).
4. Deploy to a test server or AWS.
5. Add monitoring and alerts.

## Safety notes

This starter project does not deploy to a public server or publish an image automatically. Do not commit passwords, access keys, or `.env` secrets to Git.
