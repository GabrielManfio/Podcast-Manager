import { PodcastTransferModel } from "./podcast-models";

export interface filterPodcastModels {
    statusCode: number;
    body: PodcastTransferModel[];
}