import { BaseAPI } from './BaseAPI';

export interface Repo {
  id: number;
  name: string;
  full_name: string;
  url: string;
  description: null | string;
  stars: number;
}

export type GithubSearchResponse = {
  login: string;
  id: number;
  repos: Repo[];
};

export async function searchGithubUsers(
  query: string,
): Promise<GithubSearchResponse[]> {
  const baseURL = 'https://glittering-pavlova-c6e9ab.netlify.app';
  const path = '.netlify/functions/github';
  const encodedQuery = `q=${encodeURIComponent(query)}`;
  const response = await BaseAPI<GithubSearchResponse[]>(
    `${baseURL}/${path}?${encodedQuery}`,
  );

  return response;
}
