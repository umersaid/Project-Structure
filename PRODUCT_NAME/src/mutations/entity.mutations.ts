import { axiosClient } from "@/libs";
import type { Entity } from "@/types";

export async function createEntity(payload: Partial<Entity>) {
  // TODO: replace with real endpoint.
  const response = await axiosClient.post<Entity>("/entities", payload);
  return response.data;
}
