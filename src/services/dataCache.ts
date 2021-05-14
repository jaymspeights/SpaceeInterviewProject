import { writeFile, readFile } from 'fs/promises';
import { MarsRoverPhoto } from '../objects/MarsRoverResponse';

class DataCacheSingleton {

    async get(date: string): Promise<Array<MarsRoverPhoto>> {
        let res = await readFile(date+'.json', 'utf8');
        let cache = JSON.parse(res) as Array<MarsRoverPhoto>;
        return cache;
    }

    put(date: string, data: Array<MarsRoverPhoto>): void {
        writeFile(date+'.json', JSON.stringify(data))
        .then(() => {
            console.log("Wrote file: " + date+".json");
        })
        .catch(err => {
            console.error("Failed to save", err);
        }) 
    }

}

export default class DataCache {
    static instance: DataCacheSingleton;

    static getInstance() : DataCacheSingleton {
        if (!this.instance) {
            this.instance = new DataCacheSingleton();
        }
        return this.instance;
    }
}