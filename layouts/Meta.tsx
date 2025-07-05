import Head from "next/head";

interface metaInterface {
  title?: string;
  description?: string;
  image?: string;
}

export const Meta = ({
  // default meta attributes
  title = "Beth Larcombe - Graphic Designer",
  description = "A multi-disciplined designer based in Somerset with over 10 years experience on a variety of brand, print & digital projects.",
  image = "/sharing-image.png",
}: metaInterface) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://bethlarcombe.co.uk" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://bethlarcombe.co.uk" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
