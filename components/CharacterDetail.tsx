import React from 'react';
import { Character } from '../types/types';

const CharacterDetail = ({ character }: Character) => {
  return <div>{character.name}</div>;
};

export default CharacterDetail;
