import {IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-services";
import { serviceFilterEpisodes } from "../services/filter-episodes-services";
import { ContentType } from "../utils/content-type"
import { filterPodcastModels } from "../models/filter-podcast-models";



export const getListEpisodes = async (
  req: IncomingMessage, 
  res: ServerResponse) => {
    
  const content: filterPodcastModels = await serviceListEpisodes('');

  res.writeHead(content.statusCode, {'Content-type': ContentType.JSON});
  res.write(JSON.stringify(content.body));
  res.end();
}

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) =>  {

  const content: filterPodcastModels   = await serviceFilterEpisodes(req.url);

  res.writeHead(content.statusCode, {'Content-type': ContentType.JSON});
  res.write(JSON.stringify(content.body));
  res.end();
}
