1. Create Strapi project (quickstart)
2. Run
  ```npx @strapi/sdk-plugin init my-strapi-plugin``` in the strapi root folder to create a local plugin
3. Answer 'yes' to all prompts, except installing eslint, editorconfig and prettier
  3.1 Ran into issue:
```
 file:///Users/luiz/.npm/_npx/cd5ad4e6f8ebfd78/node_modules/execa/lib/utils/max-listeners.js:1   │
│   import {addAbortListener} from 'node:events';                                                             │
│           ^^^^^^^^^^^^^^^^                                                                                  │
│   SyntaxError: The requested module 'node:events' does not provide an export named 'addAbortListener'
```
4. Proceed with plugin creation:
```sh
cd ./src/plugins/my-strapi-plugin
```
5. Run `npm i`
6. Ran into dependency resolution error between react 19,`@strapi/icons` and `@strapi/design-system` packages:
```sh
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR! 
npm ERR! While resolving: my-strapi-plugin@0.0.0
npm ERR! Found: react@19.0.0
npm ERR! node_modules/react
npm ERR!   dev react@"^19.0.0" from the root project
npm ERR! 
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^17.0.0 || ^18.0.0" from @strapi/icons@2.0.0-rc.14
npm ERR! node_modules/@strapi/icons
npm ERR!   @strapi/icons@"^2.0.0-rc.14" from the root project
npm ERR!   peer @strapi/icons@"^2.0.0 || ^2.0.0-beta || ^2.0.0-alpha" from @strapi/design-system@2.0.0-rc.14
npm ERR!   node_modules/@strapi/design-system
npm ERR!     @strapi/design-system@"^2.0.0-rc.14" from the root project
```
7. Modify plugin package.json back to react 18:
```jsonc
"devDependencies": {
    "@types/react": "^18", // <<< change from ^19.0.2 to ^18
    "@types/react-dom": "^18", // <<< change from ^19.0.2 to ^18
    "react": "^18", // <<< change from ^19.0.0 to ^18
    "react-dom": "^18", // <<< change from ^19.0.0 to ^18
  },
```
8. Run `npm i`
9. Ran into dependency issue between `@strapi/strapi` and `react-router-dom`
```sh
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR! 
npm ERR! While resolving: my-strapi-plugin@0.0.0
npm ERR! Found: react-router-dom@7.1.1
npm ERR! node_modules/react-router-dom
npm ERR!   dev react-router-dom@"^7.1.1" from the root project
npm ERR! 
npm ERR! Could not resolve dependency:
npm ERR! peer react-router-dom@"^6.0.0" from @strapi/strapi@5.6.0
npm ERR! node_modules/@strapi/strapi
npm ERR!   peer @strapi/strapi@"^5.6.0" from the root project
```
10. Remove `@strapi/strapi` from devDependencies and peerDependencies
11. Run `npm i`
12. Installation succeeded
13. Create `Test` component that uses `useStrapiApp` hook:
  ```jsx
import { useStrapiApp } from "@strapi/strapi/admin"

export const Test = () => {
    const components = useStrapiApp('MEDIALIB', (state) => state.components);

    return <h1>Test</h1>
}
```
14. Build plugin
```sh
npm run build
```
15. Navigate back to Strapi project at root
```sh
cd ../../..
```
16. Register plugin at `<root>/config/plugins.ts`
```ts
export default () => ({
  'my-strapi-plugin': {
    enabled: true,
    resolve: './src/plugins/my-strapi-plugin'
  }
});
```
17. Start Strapi in Dev mode
```sh
npm run develop
```
18. Create new collection-type (e.g Post) and add RichText  (Markdown) - Classic rich text editor field to it
19. Navigate to Content Manager > Post > + Create New Entry
20. Error `"MEDIALIB" must be used within "StrapiApp"` is thrown