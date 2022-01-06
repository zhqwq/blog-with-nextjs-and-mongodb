import Link from 'next/link'
import Image from 'next/image'
import Card from '../components/card'

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="w-2/5 mx-auto">
        <div className="py-8 ">
          <h2 className="font-extrabold text-4xl text-white">Soul Tango</h2>
        </div>
        <Image className="rounded-full" src="/IDR_PROFILE_AVATAR_33@2x.png" alt="me" width="64" height="64" />
        <div className="text-base text-white my-4">
          Personal blog by{' '}
          <Link href="/about">
            <a className="text-emerald-500">Kaiwei</a>
          </Link>
          .
          <br />
          Share front-end tech in a simple and clear way.
        </div>
        <Card />
        <Card />
      </div>
    </div>
  )
}
