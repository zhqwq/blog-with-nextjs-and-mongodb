import Link from 'next/link'

export default function Card({ meta }) {
  return (
    <div className="mt-12 space-y-1">
      <h3 className="font-extrabold text-xl text-emerald-500">
        <Link href={`/blog/${meta.id}`}>{meta.title}</Link>
      </h3>
      <p className="text-white text-xs">{meta.date}</p>
      <p className="text-white text-sm">{meta.description}</p>
    </div>
  )
}
