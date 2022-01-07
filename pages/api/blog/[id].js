import { connectToDatabase } from '../../../util/mongodb'

export default async function getOneBlog(req, res) {
  const { id } = req.query
  const { db } = await connectToDatabase()
  const blog = await db.collection('blog').findOne({ id: id })
  res.json(blog)
}
