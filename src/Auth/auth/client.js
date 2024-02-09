import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';

const authMiddleware = new ApolloLink((operation, forward) => {
    // Token retrieval logic here - this is simplified
    const token = localStorage.getItem('token');
  
    // Use the setContext method to set the HTTP headers.
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  
    return forward(operation); 
  
  });

  const httpLink='http://localhost:1337/graphql'

  
export const client = new ApolloClient({
    uri: httpLink,
    cache: new InMemoryCache(),
  });