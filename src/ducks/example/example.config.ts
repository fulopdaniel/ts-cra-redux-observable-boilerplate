const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export const exampleConfig = {
  endpoints: {
    fetch: () => `${API_ENDPOINT}/api/auth/register`,
  },
};
