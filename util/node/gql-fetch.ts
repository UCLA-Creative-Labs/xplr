/**
 * Run a graphql fetch.
 *
 * @param query The query to perform on the graphql engine
 * @returns 
 */
export const gqlFetch = async (query: string) => {
  const res = await fetch('http://localhost:3000/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({query}),
  });
  const {data, error} = await res.json();
  return {data, error};
}