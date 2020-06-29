import algoliasearch from 'algoliasearch/lite';

const client = algoliasearch(
    process.env.REACT_APP_ALGOLIA_applicationId,
    process.env.REACT_APP_ALGOLIA_apiKey,
);

const index = client.initIndex('noa_aem_game_en_us');

export default client;

export { index }
