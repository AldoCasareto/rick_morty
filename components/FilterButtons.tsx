import React, { useState } from 'react';
import { Character } from '../types/types';

type Props = {};

const FilterButtons = ({ label, results, callback }: any) => {
  //   const { status, gender, species } = results;

  //   console.log(`filter = `, labelFilter);
  //   console.log('status', results[0].status);
  //   console.log(label);

  const labelFilter = `${label}`;

  //   const labelFilter = [...new Set(results.map(({ label }) => label))];

  return (
    <div>
      {results.map(({ labelFilter }: any) => (
        <button onClick={() => callback(status)}>{status}</button>
      ))}
    </div>
  );
};

export default FilterButtons;
