import { useStrapiApp } from "@strapi/strapi/admin"

export const Test = () => {
  const components = useStrapiApp('MEDIALIB', (state) => state.components);
  console.log(components);
  return (
    <h1>Hello World</h1>
  );
}