import { useEffect, useState } from 'react';
import useFetch from 'react-fetch-hook';
import './App.css';
import ContactCard from './ContactCard';

function App() {
  const url = 'https://randomuser.me/api/';
  const {isLoading, data, error} = useFetch(url+'?results=200');
  const [contactList, setContactlist] = useState(null);
  const [filterQuery, setFilterQuery] = useState(null);

  useEffect(() => {
    if (filterQuery) {
      const queryString = filterQuery.toLowerCase();
      const filteredData = data?.results?.filter(contact => {
        const fullName = `${contact.name.first} ${contact.name.last}`

        if (queryString.length === 1) {
          const firstLetter = fullName.charAt(0).toLowerCase()
          return firstLetter === queryString
        }
        else {
          return fullName.toLowerCase().includes(queryString)
        }
      })
      setContactlist(filteredData)
    }
    else{
      setContactlist(data?.results);
    }
  }, [data, filterQuery]);

  return (
    <div className="bg-gray-100">
      <section className="text-center">
        <form>
          <input type="text" className="ml-20 mt-6 rounded-md p-2 border-2 border-purple-500 hover:border-pink-500 placeholder-pink-500" onChange={event => setFilterQuery(event.target.value)} placeholder="Type here to filter..." />
        </form>
      </section>
      <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 p-20">
        {contactList?.length < 1 && (
          <h1>No data matches you're searching</h1>
        )}
        <ContactCard contactList = {contactList} />
      </section>
    </div>
  );
}

export default App;
