import '../css/App.css';
import ListContacts from './ListContacts';

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
  const contacts = [
    {
      id: "richard",
      name: "Richard Kalehoff",
      handle: "@richardkalehoff",
      avatarURL: "http://localhost:5001/richard.jpg",
    },
    {
      id: "goodnews",
      name: "Goodnews Samuel",
      handle: "@goodnews_perfect",
      avatarURL: "http://localhost:5001/karen.jpg",
    },
    {
      id: "tyler",
      name: "Tyler McGinnis",
      handle: "@tylermcginnis",
      avatarURL: "http://localhost:5001/tyler.jpg",
    },
  ];

  return (
    <div>
      <ListContacts contacts={contacts} />
      <ContactList contacts={[ { name: 'Goodnews' }, { name: 'Egho' }, { name: 'Ozioma' } ]} />
      <ContactList contacts={[ { name: 'Alvin' }, { name: 'Beauty' }, { name: 'Samuel' } ]} />
    </div>
  );
}

export default App;
