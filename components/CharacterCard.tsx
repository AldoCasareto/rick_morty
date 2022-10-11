import React from 'react';
import { Character } from '../types/types';
import Image from 'next/image';
import Link from 'next/link';
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';
import { BiQuestionMark } from 'react-icons/bi';

type Props = {};

const Card = ({ results }: any) => {
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
    <div className='cards'>
      {results.map((character: any) => (
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
                    backgroundColor: `${statusColor[`${character.status}`]}`,
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
  );
};

export default Card;
