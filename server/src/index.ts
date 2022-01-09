import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { createConnection } from"typeorm";
import {schema} from "./Schema";
import {Users} from "./Entities/Users";

const main = async () => {
    await createConnection({
        type: "mysql",
        database: "crud",
        username: "root",
        password: "root",
        logging: true,
        synchronize: false,
        entities: [Users],
    });

    const app = express();
    app.use(cors())
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }));
    app.listen(3001, () => {
        console.log("SERVER RUNNING ON PORT 3001");
    });
};

main().catch((err) => {
    console.log(err);
});
