# quick-buy

### creating `backend` and `frontend` directories
- create `backend` and `frontend` directory from inside the root directory of our project.

## backend

### setup the backend project and install dependencies
- `cd backend`
- run `npm init --yes`
- run `npm i -D typescript ts-node`
- run `npx tsc --init`, this will create `tsconfig.json` file.
- uncomment `"outDir"` entry and setting it to `"./build"` from inside `tsconfig.json`, which will put all of our compiled TypeScript files into that directory.
- run `npm i express dotenv mongoose --save`
- run `npm i --save-dev @types/express`

### create entry point for our backend application
- now create a `app.ts` file inside `/backend/src/`
- add `"start": "ts-node src/app.ts"` inside `package.json` inside the `scripts` block.
```js
import express from 'express';
const app = express();

app.listen(3000, () => {
    console.log(`server started on port 3000`);
})
```

### installing nodemon dependency
- run`npm start` from inside `backend`.
- run `npm i nodemon --save-dev`
- replace `"start": "ts-node src/app.ts"` to `"start": "nodemon src/app.ts",`.

