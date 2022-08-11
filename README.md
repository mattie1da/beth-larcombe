# Beth Larcombe's Portfolio

Welcome! My name is Matthew Wyatt ([mattie.world](https://mattie.world)), I built this project for Beth using [Next.js](https://nextjs.org/).

## Getting Started

Once you have cloned this project locally, be sure you have installed the dependencies required to run this project.

```bash
npm install
# or
yarn
```

Now, you can spin up the application locally by entering the following command:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing pages by modifying `pages/(page-name).tsx`. The page will auto-update as you edit the file, no need to refresh the site each time.

## Adding new projects

I've tried to keep things easy to update from one or two (okay.. three) places.

### Data

The site widely uses the data in `lib/projects/data.tsx`, it is here you need add to the existing array of objects. Each object is one project, I recommend copy and pasting an existing object (to the bottom of the list) and amending it as per the spec of your new project.

### Creating a new project page

Next.js cleverly spins up pages whenever something is added to `pages/`.
Once the data has been added, duplicate an existing project from `pages/project/blah.tsx`, and rename it.
Important note: the file name will become the slug in the URL, so choose a nice name!

### Changing the project index

In the new project page you've creeated, you will see an index variable near the top of the file. `const index = 1`.
This index gets the relevant object from the data array you have amended before, so be sure to adjust the index accordingly.
Once the index is set, it will also let the breadcrumbs ('previous' and 'next' buttons at the bottom of the project) work out which order the projects are in.

## Deployed on Netlify

This project is deployed and hosted on Netlify.

## More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Help

I'm more than happy to help with any queries on the site. Please, get in touch with me directly: [hello@mattie.world](mailto:hello@mattie.world).
