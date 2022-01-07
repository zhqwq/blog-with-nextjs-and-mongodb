export async function fetchData(url) {
  // get the current environment
  let dev = process.env.NODE_ENV !== 'production'
  let { DEV_URL, PROD_URL } = process.env

  // request posts from api
  let response = await fetch(`${dev ? DEV_URL : PROD_URL}${url}`)

  // extract the blog
  let data = await response.json()

  return data
}
