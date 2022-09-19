"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@apollo/client");
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const client = new client_1.ApolloClient({
    link: new client_1.HttpLink({
        uri: 'https://api.thegraph.com/subgraphs/name/iainnash/erc721drop-goerli',
        fetch: cross_fetch_1.default,
    }),
    cache: new client_1.InMemoryCache(),
});
client
    .query({
    query: (0, client_1.gql) `
      query NEW_DROPS {
        erc721Drops(
          orderBy: createdAt
          orderDirection: desc
          first: 1
        ) {
          name
          address
          owner
          symbol
          editionMetadata {
            imageURI
          }
          salesConfig {
            publicSalePrice
          }
        }
      }
    `,
})
    .then((result) => console.log(result));
//# sourceMappingURL=data.js.map