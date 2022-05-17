import logo from './logo.svg';
import './App.css';

const ContactList = (props) =>  {
  const people = props.contacts;

  return (
    <ol>
      {people.map(person => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  )
}

function App() {
  return (
    <div className="App">
      <ContactList contacts={[ { name: 'Goodnews' }, { name: 'Egho' }, { name: 'Ozioma' } ]} />
      <ContactList contacts={[ { name: 'Alvin' }, { name: 'Beauty' }, { name: 'Samuel' } ]} />
    </div>
  );
}

export default App;
