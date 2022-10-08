import React from 'react';
import CharacterDetail from '../../components/CaracterDetail';
import { Character } from '../../types/types';

const Character = ({ character }: Character) => {
  console.log(character);
  return <CharacterDetail character={character} />;
};

export default Character;

export async function getServerSideProps({ params: { id } }: any) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character = await res.json();

  return {
    props: {
      character,
    },
  };
}
