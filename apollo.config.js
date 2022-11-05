module.exports = {
  client: {
    service: {
      name: 'shin-admin',
      // URL to the GraphQL API
      url: 'http://localhost:8023/graphql',
    },
    // Files processed by the extension
    includes: ['src/**/*.vue', 'src/**/*.ts'],
  },
}
