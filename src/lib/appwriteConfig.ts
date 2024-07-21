import { Client, Databases } from "appwrite";

const client = new Client();


client
.setEndpoint("https://cloud.appwrite.io/v1")
.setProject("669ce60f001a6a65e695");


export const DATABASE_ID = "669ce9820006303801d1";
export const POST_COLLECTION_ID = "669ce998000fa10311fd";
export const VIEWS_COLLECTION_ID = "669d31d200337db4814f";
export const TAGS_COLLECTION_ID = "669cfe4c00343e80bc27";
export const db = new Databases(client);
