import React, { createContext,useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import {createUploadLink} from "apollo-upload-client"
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { CartProvider } from "react-use-cart";
const link= createUploadLink({
  uri:'http://localhost:1337/graphql'
})

const client = new ApolloClient({
link,
  cache: new InMemoryCache(),
});



ReactDOM.createRoot(document.getElementById('root')).render(
      <ApolloProvider client={client}>
      <Provider store={store}>
      <CartProvider>
    <App />
    </CartProvider>
    </Provider>,
    </ApolloProvider>
)
