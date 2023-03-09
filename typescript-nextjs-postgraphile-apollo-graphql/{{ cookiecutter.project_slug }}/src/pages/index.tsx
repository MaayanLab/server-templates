import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>{{ cookiecutter.project_name }}</title>
        <meta name="description" content="{{ cookiecutter.project_description }}" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        Hello World!
      </main>
    </>
  )
}
