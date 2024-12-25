import { getClient } from "./utils";

async function createEntries() {
    const client = await getClient();
    
    // For user table
    const insertUserText = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id';
    const userValues = ['john.doe@example.com', 'new_secure_password'];

    let response = await client.query(insertUserText, userValues);
    
    // For todo table
    const insertTodoText = 'INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id';
    const todoValues = ['Finish homework', 'Complete the math and history assignments', response.rows[0].id, false];
    await client.query(insertTodoText, todoValues);

    console.log("Entries created!");
}

createEntries();
