import React from 'react';
import './App.css';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import CreateUser from "./Component/CreateUser";
import ListOfUser from "./Component/ListOfUser";

function App() {

    const client = new ApolloClient({
        uri: "http://localhost:3001/graphql",
        cache: new InMemoryCache(),
    });

    return (
        <>
            <ApolloProvider client={client}>
                <CreateUser/>
                <ListOfUser/>
            </ApolloProvider>
        </>
    );
}

export default App;
