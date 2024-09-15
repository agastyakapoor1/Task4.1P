import React from 'react';

function Tutorials() {
  const tutorials = [
    { id: 1, title: 'Tutorial One', description: 'Description of Tutorial One' },
    { id: 2, title: 'Tutorial Two', description: 'Description of Tutorial Two' },
  
  ];

  return (
    <section>
      <h2>Tutorials</h2>
      <ul>
        {tutorials.map(tutorial => (
          <li key={tutorial.id}>
            <h3>{tutorial.title}</h3>
            <p>{tutorial.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Tutorials;
