import Box from '../components/Box';

const Persons = ({ persons }) => {
  return (
    <>
      <h2>Persons</h2>
      <div className="boxes">
        {persons.map((person) => (
          <Box key={person.id} {...person} />
        ))}
      </div>
    </>
  );
};

export default Persons;
