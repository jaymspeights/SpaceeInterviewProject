import { writeFile, readFile } from 'fs/promises'
import { MarsRoverPhoto } from '../objects/marsRoverResponse'
import config from '../config/appConfig'
import { mkdirSync } from 'fs'

class DataCacheSingleton {
  constructor () {
    // Ensure that our cache folder exists
    try {
      mkdirSync(config.PHOTOS_DIR)
    } catch (err) {
      console.warn("Error thrown making photos dir. It's probably just that the folder exists " +
            'already but otherwise this should be handled most likely: ', err)
    }
  }

  async get (date: string): Promise<Array<MarsRoverPhoto>> {
    const res = await readFile(config.PHOTOS_DIR + date + '.json', 'utf8')
    const cache = JSON.parse(res) as Array<MarsRoverPhoto>
    return cache
  }

  put (date: string, data: Array<MarsRoverPhoto>): void {
    writeFile(config.PHOTOS_DIR + date + '.json', JSON.stringify(data))
      .then(() => {
        console.log('Wrote file: ' + date + '.json')
      })
      .catch(err => {
        console.error('Failed to save', err)
      })
  }
}

export default class DataCache {
    static instance: DataCacheSingleton;

    static getInstance () : DataCacheSingleton {
      if (!this.instance) {
        this.instance = new DataCacheSingleton()
      }
      return this.instance
    }
}
