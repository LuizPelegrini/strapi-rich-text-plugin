import path from 'node:path';

export default () => ({
  'my-strapi-plugin': {
    enabled: true,
    resolve: './src/plugins/my-strapi-plugin'
  }
});
