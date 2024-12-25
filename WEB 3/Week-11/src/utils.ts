import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://postgres:jay_vegad@127.0.0.1:5432/jvdb");
    await client.connect();
    return client;
}