import fetch from 'node-fetch';
import DataCache from './dataCache';
import Config from '../config/config';
import { MarsRoverPhoto } from '../objects/MarsRoverResponse';

//Gets photos from cache if exists,
//otherwise fetches from nasa api
export async function getPhotos(raw_date: string) {
    let date = formatDate(new Date(raw_date));
    try {
        var photo = await DataCache.getInstance().get(date);
        console.log("Found in cache, skipping api call");
    }
    catch {
        photo = await fetchFromApi(date);
        DataCache.getInstance().put(date, photo);
    }
    return photo;
}

//Formats Date object to YYYY-MM-DD
export function formatDate(date: Date) {
    let year = date.getFullYear().toString().padStart(4, '0');
    let month = (date.getMonth()+1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`
}

//Fetchs actual data from api
//throws error if anything goes wrong
async function fetchFromApi(date: string): Promise<Array<MarsRoverPhoto>> {
    try {
        let photo = await fetch(`${Config.MARS_PHOTO_ENDPOINT}?${Config.MARS_PHOTO_DATE_PARAM}=${date}&api_key=${Config.NASA_API_KEY}`);
        return (await photo.json()).photos;
    }
    catch (e) {
        console.error(e);
        throw e;
    }
}