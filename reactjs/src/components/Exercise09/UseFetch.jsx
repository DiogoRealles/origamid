import { useCallback, useState } from "react"

const UseFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const request = useCallback(async (url, options) => {
    let response;
    let json;

    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      setLoading(false);
    } catch (error) {
      json = null;
      setError('Error, Try again let more!');
    } finally {
      setData(json);
      setLoading(false);
      return {response, json}
    }
  }, []);

  return {data, error, loading, request}
}

export default UseFetch;
