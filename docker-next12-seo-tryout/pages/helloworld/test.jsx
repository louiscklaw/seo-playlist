import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>helloworld test title ?</title>
        <link rel="icon" href="/favicon.ico" />

        {/* Duplicate without user-selected canonical */}
        <link rel="canonical" href="https://docker-next12-seo.iamon99.com/helloworld/test" />
      </Head>

      <main>test ?</main>
    </div>
  )
}
