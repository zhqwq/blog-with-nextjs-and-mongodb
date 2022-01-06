export default function Card({ metaData }) {
  if (!metaData) {
    metaData = {
      title: 'This is my first Blog Title',
      date: 'Auguest 8, 2021',
      description: 'Found 123456 items'
    }
  }
  return (
    <div className="mt-12 space-y-1">
      <h3 className="font-extrabold text-xl text-emerald-500">{metaData.title}</h3>
      <p className="text-white text-xs">{metaData.date}</p>
      <p className="text-white text-sm">{metaData.description}</p>
    </div>
  )
}
