import { Client } from "pg";
// get the client using pg 
export async function getClient() {
    const client = new Client("postgresql://postgres:jay_vegad@127.0.0.1:5432/assignment")
    await client.connect();
    return client;
}