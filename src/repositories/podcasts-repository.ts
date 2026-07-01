import fs from 'fs';
import path from 'path';
import { PodcastTransferModel } from '../models/podcast-models';


const pathData = path.join(__dirname, "podcasts.json");

export const repositoryPodcasts = async (
    podcastName?: string
): Promise<PodcastTransferModel[]> => { 
const language = "utf-8";

    const rawdata = fs.readFileSync(pathData, language);
    let jasonFile = JSON.parse(rawdata);

if(podcastName){
    jasonFile = jasonFile.filter(
        (podcast: PodcastTransferModel) => podcast.podcastName === podcastName);
}


    return jasonFile;
}
