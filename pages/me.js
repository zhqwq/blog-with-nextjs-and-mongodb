import Link from 'next/link'

export default function About() {
  return (
    <div>
      <h2 className="text-white mt-6">Hello, My Name is Zhang Kaiwei</h2>
      <br />
      <Link href="/">
        <a className="text-emerald-500">Back</a>
      </Link>
    </div>
  )
}
