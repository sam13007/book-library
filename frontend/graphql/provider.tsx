"use client";
import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;
