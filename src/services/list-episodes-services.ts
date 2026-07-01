import { filterPodcastModels } from "../models/filter-podcast-models";
import { repositoryPodcasts } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (p0: string): Promise<filterPodcastModels> => {
    
    let responseFormat: filterPodcastModels = {
        statusCode: 0,
        body: []
    };  
    
     const data = await repositoryPodcasts();

        responseFormat = {
            statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent, body: data
        };


    return responseFormat;
}
