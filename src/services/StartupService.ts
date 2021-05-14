import { readFile } from 'fs/promises'
import Config from '@src/config/appConfig'
import { getPhotos } from '@src/services/marsPhotoService'

// Startup function
// Loads some data from fs and uses it to pre-fetch some photos
export async function runStartup () {
  try {
    const file = await readFile(`${Config.STARTUP_FILE_NAME}`, 'utf8')

    const datePromises = file.split('\n').map(dateString => getPhotos(dateString))

    await Promise.allSettled(datePromises)

    return Promise.resolve()
  } catch (e) {
    // Let's just let the application continue.
    // Perhaps we would want to throw an error here instead
    console.error(e)
  }
}
