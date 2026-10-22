import { axiosClient } from "@/libs";
import type { Entity } from "@/types";

export async function fetchEntities() {
  // TODO: replace with real endpoint.
  const response = await axiosClient.get<Entity[]>("/health");
  return response.data;
}
