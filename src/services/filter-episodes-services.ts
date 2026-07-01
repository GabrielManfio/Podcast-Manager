
import { filterPodcastModels } from "../models/filter-podcast-models";
import { repositoryPodcasts } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<filterPodcastModels> => {

let responseFormat: filterPodcastModels = {
    statusCode: 200,
    body: []
};

    const queryString = podcastName?.split("?p=")[1] ?? "";
    const data = await repositoryPodcasts(queryString);

    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NoContent;
    responseFormat.body = data;

    return responseFormat;
}