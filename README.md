# Project
This is the README for the **Milkshaker** web application. **Milkshaker** is an ap where users can upload their ratings for milkshakes they have tasted around the world. These ratings are saved and can be compared and searched for based on location.  Milkshakes are saved against their Google-Places ID.

This project serves primarily as a fun project to explore NextJs and React as frontend technologies, as well as ExpressJs as a backend technology. 

To get started clone this repo and follow the steps below.

# Backend
This project uses Express.js for the api. For development purposes `nodemon`, `typescript`, and `concurrently` are used to create a working environment that changes as you save files.

## Getting Started
1. `cd` in to the `milkshaker-api` directory.
2. Run `npm install` to get all of the packages necessary.
3. Run  `npm run dev` to start up the development server.
4. Navigate to `localhost:3001` in your browser to check if everything is working as intended.

The server uses the `dotenv` package to dictate which port it should run on. By default, this port is `3001`, but can be changed by editing the `.env` file in the `/milkshaker-api/` directory.

# Frontend
*This text was automatically generated and slightly edited as seen fit for the project.*

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
