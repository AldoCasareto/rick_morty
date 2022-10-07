import Image from 'next/image';
import React from 'react';
import { Data } from '..';
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';
import { BiQuestionMark } from 'react-icons/bi';

const Characters = ({ data }: Data) => {
  const { info, results: defaultResults = [] } = data;

  console.log(`defaultResults = `, defaultResults);

  const statusColor: any = {
    Alive: 'green',
    Dead: 'red',
    Unknown: 'gray',
  };

  const color = 'alive';
  console.log(statusColor[color]);

  const GENDER: any = {
    Male: <BsGenderMale />,
    Female: <BsGenderFemale />,
    Unknown: <BiQuestionMark />,
  };

  return (
    <div>
      Characters
      <>
        <BsGenderMale />
        <BsGenderFemale />
        <BiQuestionMark />
        <div className='container'>
          <div className='cards'>
            {defaultResults.map((character) => (
              <div className='card' key={character.id}>
                <Image
                  src={character.image}
                  alt={character.name}
                  width='360'
                  height='360'
                />
                <div className='tags'>
                  <div>
                    <span
                      style={{
                        backgroundColor: `${
                          statusColor[`${character.status}`]
                        }`,
                      }}
                      className='status_dot'
                    >
                      {character.status}
                    </span>
                  </div>
                  {/* <span className='tag'>{character.status} </span> */}
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
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default Characters;

export async function getServerSideProps() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
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
