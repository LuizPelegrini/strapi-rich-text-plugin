import { useStrapiApp } from "@strapi/strapi/admin"

export const Test = () => {
  const components = useStrapiApp('MEDIALIB', (state) => state.components);

  return (
    <h1>Test</h1>
  );
}