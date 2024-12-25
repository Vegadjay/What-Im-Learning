var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getClient } from "./utils";
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        // this is query for create new user in db
        const createUserTable = `CREATE TABLE user (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) UNIQUE NOT NULL,
    )`;
        const client = yield getClient();
        // this is create new table using this query function
        yield client.query(createUserTable);
        // for create todo table
        const createTodoTable = `
        CREATE TABLE todos (
            id SERIAL PRIMARY KEY,    
            user_id INTEGER REFRENCE user(id),
            title VARCHAR(255),
            description TEXT,
            done BOOLEAN DEFAULT FALSE,
            
        )
    `;
        yield client.query(createTodoTable);
        console.log("Tables Are Created");
    });
}
