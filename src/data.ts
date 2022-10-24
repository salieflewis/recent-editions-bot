import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch';

// https://api.thegraph.com/subgraphs/name/iainnash/erc721drop-goerli
// https://api.thegraph.com/subgraphs/name/iainnash/zora-editions-mainnet

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/iainnash/erc721drop-goerli',
    fetch,
  }),
  cache: new InMemoryCache(),
});

const NEW_DROPS = gql`
  query NEW_DROPS {
    erc721Drops(orderBy: createdAt, orderDirection: desc, first: 1) {
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
`;

client
  .query({
    query: NEW_DROPS,
  })
  .then((data) => console.log('Subgraph data: ', data))
  .catch((err) => console.log('Error: ', err));

// Watches the cache store of the query and returns an ObservableQuery
const observer = client.watchQuery({
  query: NEW_DROPS,
});

const result = observer.subscribe({
  next(value) {
    console.log('result:', result);
    console.log('value:', value.data.erc721Drops);
  },
});
