import React, { useEffect, useState } from 'react';

type Props = {};

const useFilter = (props: Props) => {
  const [queries, setQueries] = useState({
    name: '',
    gender: '',
    status: '',
  });

  const { name, gender, status } = queries;

  const defaultEndpoint = 'https://rickandmortyapi.com/api/character';

  useEffect(() => {
    async function fetchQueries() {
      const res = await fetch(
        `${defaultEndpoint}/?name${name}&gender${gender}&status${status}`
      );
      const results = await res.json();

      setQueries(results);
    }
    fetchQueries();
    // return [queries, setQueries];
  }, [name, gender, status]);

  return <div>useFilter</div>;
};

export default useFilter;
