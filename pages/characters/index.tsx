import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Data } from '..';
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';
import { BiQuestionMark } from 'react-icons/bi';
import Link from 'next/link';

const defaultEndpoint = 'https://rickandmortyapi.com/api/character';

const Characters = ({ data }: Data) => {
  const { info, results: defaultResults = [] } = data;
  const [results, setResults] = useState(defaultResults);
  const [currentPage, setCurrentPage] = useState(1);

  console.log(`currentPage = `, currentPage);

  useEffect(() => {
    if (currentPage === 1) return;

    async function updatePage() {
      const res = await fetch(`${defaultEndpoint}/?page=${currentPage}`);
      const { results } = await res.json();

      console.log(currentPage);

      console.log(`characters = `, results);

      setResults(results);
    }
    updatePage();
  }, [currentPage]);

  const statusColor: any = {
    Alive: 'green',
    Dead: 'red',
    unknown: 'gray',
  };

  const GENDER: any = {
    Male: <BsGenderMale />,
    Female: <BsGenderFemale />,
    Unknown: <BiQuestionMark />,
  };

  return (
    <div>
      Characters
      <>
        <div className='cards'>
          {results.map((character) => (
            <div className='card' key={character.id}>
              <Link href={`/characters/${character.id}`}>
                <a>
                  <Image
                    src={character.image}
                    alt={character.name}
                    width='480'
                    height='480'
                  />
                  <div className='tags'>
                    <span
                      style={{
                        backgroundColor: `${
                          statusColor[`${character.status}`]
                        }`,
                      }}
                      className='status_dot'
                    ></span>
                    <span className='tag'> {character.status}</span>
                    <span className='tag'>{character.species}</span>
                    <span className='tag'>
                      <>
                        {GENDER[character.gender]}
                        {character.gender}
                      </>
                    </span>
                  </div>

                  <div className='name'>{character.name}</div>
                  <div className='location'>{character.location.name}</div>
                </a>
              </Link>
            </div>
          ))}
        </div>
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

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data: Data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
}
