import React, { useState } from 'react';
import { Character } from '../types/types';

type Props = {};

const FilterButtons = ({ label, results, callback }: any) => {
  const filterLabels = [
    ...new Set(results.map((result: any) => result[label])),
  ];

  return (
    <div>
      <h3>{label}</h3>
      {/* {[
        ...new Set(
          results.map((result: any) => (
            <button onClick={() => callback(result[label])}>
              {result[label]}
            </button>
          ))
        ),
      ]} */}
      {filterLabels.map((filters) => (
        <button onClick={() => callback(filters)}>{filters}</button>
      ))}
    </div>
  );
};

export default FilterButtons;
