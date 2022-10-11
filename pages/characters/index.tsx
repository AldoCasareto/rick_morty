import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Data } from '..';

import FilterButtons from '../../components/FilterButtons';
import { useRouter } from 'next/router';
import CharacterDetail from '../../components/CharacterDetail';
import { Character } from '../../types/types';
import CharacterCard from '../../components/CharacterCard';

const defaultEndpoint = 'https://rickandmortyapi.com/api/character';

const Characters = ({ data, query }: any) => {
  const { info, results: defaultResults = [] } = data;
  const [results, setResults] = useState<Character>(defaultResults);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');

  const router = useRouter();

  useEffect(() => {
    // if (!search && !status && !gender && !species) return;

    async function updatePage() {
      const res = await fetch(
        `${defaultEndpoint}/?page=${currentPage}&name=${
          search ?? search
        }&status=${status ?? status}&gender=${gender}&species=${species}`
      );
      const { results } = await res.json();

      setResults(results);

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    updatePage();

    router.push(
      `characters/?page=${query.page}&name=${query.name}&status=${query.status}&gender=${query.gender}&species=${query.species}`,
      undefined,
      { shallow: true }
    );
  }, [currentPage, search, status, gender, species]);

  return (
    <div>
      <input type='text' onChange={(e) => setSearch(e.target.value)} />
      <>
        <FilterButtons label='status' results={results} callback={setStatus} />
        <FilterButtons
          label='species'
          results={results}
          callback={setSpecies}
        />
        <FilterButtons label='gender' results={results} callback={setGender} />
        <button
          onClick={() => {
            setSpecies('');
            setStatus('');
            setGender('');
            router.push('/characters');
          }}
        >
          Clear Filters
        </button>
        <CharacterCard results={results} />
        <div className='buttons'>
          {currentPage === 1 ? (
            ''
          ) : (
            <button onClick={() => setCurrentPage(currentPage - 1)}>
              Previous
            </button>
          )}

          <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        </div>
      </>
    </div>
  );
};

export default Characters;

export async function getServerSideProps({ query, params }: any) {
  const res = await fetch(defaultEndpoint);
  const data: Data = await res.json();

  console.log('query', query);
  console.log(`foo = `, query.status);
  console.log('params', params);

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
      query,
    },
  };
}
