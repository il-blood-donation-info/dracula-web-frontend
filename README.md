# Dracula web frontend

The frontend behind the Dracula app.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Backend API config

- If you set `NEXT_PUBLIC_API_URL`, frontend will use that directly.
- Otherwise, it will use Next.js proxy at localhost:3000/api/, can set `PROXY_TO_URL` to configure.

Can use env vars and/or `.env*` files, doc:
https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#default-environment-variables

### Production backend direct

Default in prod — see `.env.production` file.  
WON'T WORK until next deploy dracula.betterw8.com supports CORS (next deploy).  
And may need to visit https://dracula.betterw8.com/schedule in your browser and accept cert?

### Production backend proxied

WON'T WORK until dracula.betterw8.com gets valid cert.

```
echo PROXY_TO_URL=https://dracula.betterw8.com > .env.local
npm run dev
```

### Local backend direct

```
git clone git@github.com:il-blood-donation-info/blood-donation-backend.git
cd blood-donation-backend/
git pull
docker-compose --env-file db.env up --build
```
Leave it running (^C when done).  
- Every time you start it, visit https://localhost:8443/schedule in your browser and accept (new) self-signed cert or API requests will fail.

Here in UI dir:
```
echo NEXT_PUBLIC_API_URL=https://localhost:8443 > .env.local
npm run dev
```

### Local backend proxied

Run backend in same way as above.  
- Here in UI dir, every time you start backend, execute:
```
docker run blood-donation-backend_blood-info /bin/cat cert.pem > cert.pem
export NODE_EXTRA_CA_CERTS=$PWD/cert.pem
echo PROXY_TO_URL=https://localhost:8443 > .env.local
npm run dev
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

Currently deploying on Vercel: https://il-blood-donation-info.vercel.app/
@cben manages that deploy config (TODO: upgrade to a team?)

* Deploy info: https://il-blood-donation-info.vercel.app/_src (parts public, parts only visible to @cben)
