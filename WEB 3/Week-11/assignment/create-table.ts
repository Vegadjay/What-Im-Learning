import { getClient } from "./utils";

async function createTable() {
    
    // this is query for create new user in db
    const createUserTable = 
    `CREATE TABLE user (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) UNIQUE NOT NULL,
    )`

    const client = await getClient();

    // this is create new table using this query function
    await client.query(createUserTable);

    // for create todo table
    const createTodoTable = `
        CREATE TABLE todos (
            id SERIAL PRIMARY KEY,    
            user_id INTEGER REFRENCE user(id),
            title VARCHAR(255),
            description TEXT,
            done BOOLEAN DEFAULT FALSE,
            
        )
    `
    await client.query(createTodoTable);

    console.log("Tables Are Created")

}