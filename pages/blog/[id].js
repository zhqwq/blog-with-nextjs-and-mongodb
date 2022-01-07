import Link from 'next/link'
import { fetchData } from '../../util/request'
import Head from 'next/head'

export default function Blog({ blog }) {
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="my-6">
        <h2 className="font-extrabold text-2xl text-emerald-500">
          <Link href="/">
            <a>Soul Tango</a>
          </Link>
        </h2>
      </header>
      <main className="my-8">
        <h2 className="text-white text-4xl font-extrabold">{blog.title}</h2>
        <p className="text-white text-xs my-2">{blog.date}</p>
        <p className="text-white text-sm my-6">{blog.content}</p>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query
  let blog = await fetchData(`/api/blog/${id}`)

  return {
    props: { blog } // will be passed to the page component as props
  }
}
