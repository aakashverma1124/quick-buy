import express from 'express';

const app = express();

import * as dotenv from 'dotenv';

dotenv.config();
if (!process.env.SERVER_PORT) {
    console.log(`Error to get ports`);
    process.exit(1);
}

console.log("hello");

const SERVER_PORT: number = parseInt(process.env.SERVER_PORT as string, 10);

app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}`);
})