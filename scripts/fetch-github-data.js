/* global process */

import fs from 'fs';
import path from 'path';
import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables from .env file when running locally
dotenv.config();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const USERNAME = 'BilalKhalifa';

if (!GITHUB_TOKEN) {
    console.error('ERROR: GITHUB_TOKEN is not defined in environment variables.');
    process.exit(1);
}

const githubApi = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
});

const getContributions = async (username) => {
    const query = {
        query: `
        query($username: String!) {
            user(login: $username) {
            publicRepositories: repositories(privacy: PUBLIC) {
                totalCount
            }
            contributionsCollection {
                contributionCalendar {
                totalContributions
                }
            }
            }
        }
        `,
        variables: { username },
    };

    try {
        const { data } = await githubApi.post('/graphql', query);
        
        if (data.errors) {
        throw new Error(JSON.stringify(data.errors));
        }

        const user = data.data.user;
        return {
        publicRepos: user.publicRepositories.totalCount,
        contribution: user.contributionsCollection.contributionCalendar.totalContributions,
        };
    } catch (error) {
        console.error('Error fetching GitHub data:', error.message);
        throw error;
    }
};

async function main() {
    try {
        console.log('Fetching GitHub stats...');
        const stats = await getContributions(USERNAME);

        const dir = path.resolve('src/data');
        if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        }

        // Write to a static JSON file
        fs.writeFileSync(
        path.join(dir, 'github-stats.json'),
        JSON.stringify(stats, null, 2)
        );
        console.log('GitHub stats saved to src/data/github-stats.json successfully!');
    } catch (error) {
        console.log('Fetch script failed:',error)
        process.exit(1);
    }
}

main();