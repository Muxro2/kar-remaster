import { promises as fs } from 'fs'

export async function getAlbums() {
  const file = await fs.readFile(process.cwd() + '/app/lib/albums.json', 'utf8')
  const data = JSON.parse(file)
  return data
}
