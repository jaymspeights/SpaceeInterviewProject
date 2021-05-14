import { readFile } from 'fs/promises';
import Config from '../config/config';
import { getPhotos } from './MarsPhotoService';


//Startup function
//Loads some data from fs and uses it to pre-fetch some photos
export async function runStartup() {
    try {
        let file = await readFile(`${Config.STARTUP_FILE_NAME}`, 'utf8');
        let date_promises = file.split("\n")
                .map(date_string => getPhotos(date_string));
        Promise.allSettled(date_promises)
        .then((res) => {
        });
        
    } catch (e) {
        //Let's just let the application continue.
        //Perhaps we would want to throw an error here instead
        console.error(e); 
    }
    
}