# Next.js weather app

### What tech is used?

- `next.js`: 14.1
- `react`: 18.1
- `tailwind`: 4.0
- `typescript`: latest
- `eslint`: 8.5.6

### What features are implemented?

Shortly put, this website has a large (46k+) list of cities. The UI displays today's probability of rain in either your location, or a city of choice.

[Server components](https://nextjs.org/docs/app/building-your-application/rendering/server-components) are used to render and cache UI on the server, instead of letting the client execute the JS. This improves load times and performance on the client. It also enables web scraping of the page and better SEO.

Additionally, the repo has a internal API endpoints that the frontend communicates with. The backend makes external API calls to weather and location services. The website also uses cookies to save the user session in regards to preferred city.

## Running this project locally

First, run the development server:

```bash

npm  run  dev

# or

yarn  dev

# or

pnpm  dev

# or

bun  dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
