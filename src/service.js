import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  timeout: 10000,
});

export const getGithubUser = async (username) => {
  const { data } = await githubApi.get(`/users/${username}`);
  return data;
};

export const getContributions = async (username) => {
  const query = {
    query: `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
            }
          }
        }
      }
    `,
    variables: {
      username,
    },
  };

  const { data } = await githubApi.post(
    "/graphql",
    query,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    }
  );

  return data.data.user.contributionsCollection
    .contributionCalendar.totalContributions;
};