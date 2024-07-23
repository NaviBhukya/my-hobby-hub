import React from 'react';
import { useParams } from 'react-router-dom';

const hobbies = [
  { id: 1, name: 'Photography', description: 'Capture the moments.' },
  { id: 2, name: 'Gardening', description: 'Grow your own garden.' },
  { id: 3, name: 'Cooking', description: 'Cook delicious meals.' },
  // Add more hobbies here
];

const HobbyDetail = () => {
  const { id } = useParams();
  const hobby = hobbies.find(h => h.id === parseInt(id));

  if (!hobby) {
    return <div>Hobby not found!</div>;
  }

  return (
    <div>
      <h2>{hobby.name}</h2>
      <p>{hobby.description}</p>
    </div>
  );
};

export default HobbyDetail;
