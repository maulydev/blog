import { Query } from "appwrite";
import {
  POST_COLLECTION_ID,
  DATABASE_ID,
  db,
  VIEWS_COLLECTION_ID,
  TAGS_COLLECTION_ID,
} from "./appwriteConfig";
import { Post } from "./definitions";

export const getAllPosts = async () => {
  const response = await db.listDocuments(DATABASE_ID, POST_COLLECTION_ID, [
    Query.orderDesc("$createdAt"),
    Query.equal("is_published", true),
  ]);
  return response.documents as Post[];
};

export const getPopularPosts = async () => {
  const response = await db.listDocuments(DATABASE_ID, POST_COLLECTION_ID, [
    Query.orderDesc("views"),
    Query.equal("is_published", true),
    Query.limit(5),
  ]);
  return response.documents as Post[];
};

export const getAllTags = async () => {
  const response = await db.listDocuments(DATABASE_ID, TAGS_COLLECTION_ID, []);
  return response.documents;
};

export const getSinglePost = async (postId: string) => {
  const response = await db.getDocument(
    DATABASE_ID,
    POST_COLLECTION_ID,
    postId
  );
  return Object(response);
};

export const getRelatedPosts = async (postCategory: string) => {
  const response = await db.listDocuments(DATABASE_ID, POST_COLLECTION_ID, [
    Query.equal("category", postCategory),
  ]);
  return response.documents as Post[];
};

export const updateViews = async (postId: string) => {
  const response = await db.updateDocument(
    DATABASE_ID,
    VIEWS_COLLECTION_ID,
    postId,
    {
      $inc: { count: 1 },
    }
  );
  return response;
};
