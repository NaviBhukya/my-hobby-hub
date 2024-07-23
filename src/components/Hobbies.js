import React from 'react';
import { Link } from 'react-router-dom';

const hobbies = [
  { id: 1, name: 'Photography' },
  { id: 2, name: 'Gardening' },
  { id: 3, name: 'Cooking' },
  // Add more hobbies here
];

const Hobbies = () => {
  return (
    <div>
      <h2>Hobbies</h2>
      <ul>
        {hobbies.map(hobby => (
          <li key={hobby.id}>
            <Link to={`/hobbies/${hobby.id}`}>{hobby.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
