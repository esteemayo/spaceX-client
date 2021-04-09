import { ApolloClient, InMemoryCache, ApolloProvider as Provider } from '@apollo/client';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache()
});

export default function ApolloProvider(props) {
    return <Provider client={client} {...props} />
}