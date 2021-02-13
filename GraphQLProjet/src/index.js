import express from 'express';
import cors from 'cors';
import {graphqlHTTP} from 'express-graphql';
import {buildSchema} from 'graphql';
import typedefs from './schema';
import * as rootValue from './datas';

const port = process.env.PORT || 8000;

const app = express();
const schema = buildSchema(typedefs);

app.use(cors());

app.use('/', graphqlHTTP({
    schema: schema,
    rootValue,
    graphiql: true,
}));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});