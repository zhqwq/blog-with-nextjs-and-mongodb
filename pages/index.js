import Link from 'next/link'
import Image from 'next/image'
import Card from '../components/card'
import { fetchData } from '../util/request'
import Head from 'next/head'

export default function Home({ blogs }) {
  return (
    <>
      <Head>
        <title>Soul Tango</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="my-6">
        <h2 className="font-extrabold text-4xl text-white">Soul Tango</h2>
      </div>
      <Image className="rounded-full" src="/IDR_PROFILE_AVATAR_33@2x.png" alt="me" width="64" height="64" />
      <div className="text-base text-white my-4">
        Personal blog by{' '}
        <Link href="/me">
          <a className="text-emerald-500">Kaiwei</a>
        </Link>
        .
        <br />
        Share front-end tech in a simple and clear way.
      </div>
      {blogs?.map(item => (
        <Card meta={item} key={item.id} />
      ))}
    </>
  )
}

export async function getServerSideProps() {
  let blogs = await fetchData('/api/blog')

  return {
    props: { blogs } // will be passed to the page component as props
  }
}
