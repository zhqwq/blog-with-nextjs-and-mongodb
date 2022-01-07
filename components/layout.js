export default function Home({ children }) {
  return (
    <div className="bg-gray-900 min-h-screen py-2 px-2">
      <div className="w-2/5 mx-auto">{children}</div>
    </div>
  )
}
