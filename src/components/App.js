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

  return (
    <div>
      <ListContacts contacts={contacts} onDeleteContact={removeContact} />
      <ContactList contacts={[ { name: 'Goodnews' }, { name: 'Egho' }, { name: 'Ozioma' } ]} />
      <ContactList contacts={[ { name: 'Alvin' }, { name: 'Beauty' }, { name: 'Samuel' } ]} />
    </div>
  );
}

export default App;
