import { connectToDatabase } from '../../../util/mongodb'

export default async function getAllBlog(req, res) {
  const { db } = await connectToDatabase()
  const blog = await db.collection('blog').find({}).sort({ date: -1 }).limit(20).toArray()
  res.json(blog)
}
