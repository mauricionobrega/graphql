const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
    test: String
  }
`);

const root = { hello: () => 'Hello world!', test: () => 'Testing!' };

graphql(schema, '{ hello test }', root).then((response) => {
  console.log(response);
});
