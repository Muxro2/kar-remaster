import { promises as fs } from "fs"

export default async function Gallery() {

  const file = await fs.readFile(process.cwd() + '/app/albums.json', 'utf8')
  const data = JSON.parse(file)
  const collection = data.collection
  console.log(collection)

  return (
        <>
        
        </>
  )
}
