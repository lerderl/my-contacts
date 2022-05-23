import { useState, useEffect } from 'react';

import '../css/App.css';
import ListContacts from './ListContacts';
import * as ContactsAPI from '../utils/ContactsAPI';

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
  const removeContact = (contact) => {
    ContactsAPI.remove(contact);
    setContacts(contacts.filter(c => c.id !== contact.id));
  }

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const res = await ContactsAPI.getAll(); //Asynchronous request to our Contacts API
      setContacts(res); //Response is passed into setContacts() which updates our contacts state
    }

    getContacts();
  }, []);
  
  const [count, setCount] = useState(0);

  // Side effect cleanup
  useEffect(() => {
    console.log("This is the side effect.");
    return () => {
      console.log(
        "The component re-rendered. This is part of the cleanup before the next effect."
      );
    };
  });

  return (
    <div>
      <ListContacts contacts={contacts} onDeleteContact={removeContact} />
      <ContactList contacts={[ { name: 'Goodnews' }, { name: 'Egho' }, { name: 'Ozioma' } ]} />
      <ContactList contacts={[ { name: 'Alvin' }, { name: 'Beauty' }, { name: 'Samuel' } ]} />
      
      <p>The current count is: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase the Count
      </button>
    </div>
  );
}

export default App;
