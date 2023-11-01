import Head from "next/head";

export function FavIcon() {
  return (
    <Head>
      <link
        rel="icon"
        sizes="16x16"
        type="image/png"
        href="/favicon/favicon-16x16.png"
      />
      <link
        rel="icon"
        sizes="32x32"
        type="image/png"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        sizes="48x48"
        type="image/x-icon"
        href="/favicon/favicon.ico"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="/favicon/android-chrome-512x512.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="manifest"
        crossOrigin="use-credentials"
        href="/favicon/site.webmanifest"
      />
    </Head>
  );
}
