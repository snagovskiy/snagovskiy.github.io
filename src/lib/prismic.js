import { createClient } from '@prismicio/client';
import 'dotenv/config';

const repositoryName = 'snagovskiy'; // ваше имя репозитория

const clientConfig = {};

// Если у вас есть токен доступа (для приватного репозитория)
if (process.env.PRISMIC_ACCESS_TOKEN) {
  clientConfig.accessToken = process.env.PRISMIC_ACCESS_TOKEN;
}

export const client = createClient(repositoryName, clientConfig);