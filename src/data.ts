import {
  ApolloClient,
  InMemoryCache,
  gql,
  HttpLink,
} from '@apollo/client';
import fetch from 'cross-fetch';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/iainnash/zora-editions-mainnet',
    fetch,
  }),
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
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
