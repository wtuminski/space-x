import { createHttpClient } from "mst-gql";
import { API_URL } from "../Utils/constants";
import { RootStore } from "./";

export const rootStore = RootStore.create(undefined, {
    gqlHttpClient: createHttpClient(API_URL),
});
