// // src/components/PeopleAPI.js
// import React, { useEffect } from 'react';
// import { gapi } from 'gapi-script';

// const CLIENT_ID = '2604471346-tajfrofv679l7rbjd0pfgaobgj56anmq.apps.googleusercontent.com';
// // const API_KEY = 'YOUR_API_KEY'; // Optional if already enabled
// const SCOPES = 'https://www.googleapis.com/auth/contacts.readonly';

// function PeopleAPI() {
//     useEffect(() => {
//       const start = () => {
//         gapi.client.init({ // Uncomment and put your API key here if needed
//           clientId: CLIENT_ID,
//           scope: SCOPES,
//           discoveryDocs: ['https://people.googleapis.com/$discovery/rest?version=v1'],
//         });
//       };
  
//       // Load the gapi client and auth2
//       gapi.load('client:auth2', start);
//     }, []);
  
//     const handleLogin = () => {
//         // Sign in with Google and prompt consent again if needed
//         gapi.auth2.getAuthInstance().signIn({
//           prompt: 'consent',  // This ensures the user is asked to consent with the required scopes
//         }).then(() => {
//           // Once signed in, fetch the user's contacts
//           gapi.client.people.people.connections.list({
//             resourceName: 'people/me',
//             personFields: 'names,emailAddresses',  // Specify what info you want
//           }).then(response => {
//             // Get the list of contacts
//             const contacts = response.result.connections;
      
//             // Check if contacts exist and loop through them
//             if (contacts && contacts.length > 0) {
//               // Loop through contacts and log their names
//               contacts.forEach(contact => {
//                 if (contact.names && contact.names.length > 0) {
//                   console.log('Name:', contact.names[0].displayName);  // Print the contact's name
//                 } else {
//                   console.log('Name: Not available');
//                 }
//               });
//             } else {
//               console.log('No contacts found.');
//             }
//           }).catch(err => {
//             console.error('Error fetching contacts:', err);
//           });
//         }).catch(err => {
//           console.error('Error signing in:', err);
//         });
//       };
      
  
//     return (
//       <div>
//         <button onClick={handleLogin}>Sign in with Google</button>
//       </div>
//     );
//   }
  
//   export default PeopleAPI;


import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PeopleAPI = () => {
  const location = useLocation();

//   useEffect(() => {
//     const fetchContacts = async () => {
//       const query = new URLSearchParams(location.search);
//       const code = query.get('code');
//       if (code) {
//         const res = await fetch('http://localhost:5000/get-contacts', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ code }),
//         });
//         const contacts = await res.json();
//         console.log('Contacts:', contacts);
//       }
//     };

//     fetchContacts();
//   }, [location]);

useEffect(() => {
    const fetchContacts = async () => {
      const query = new URLSearchParams(location.search);
      const code = query.get('code');
  
      if (code) {
        const res = await fetch('http://localhost:5000/get-contacts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code }),
        });
  
        const contacts = await res.json();
        console.log('Contacts:', contacts);
  
        // Save to localStorage so we can use after refresh
        localStorage.setItem('contacts', JSON.stringify(contacts));
  
        // Clear the code from the URL
        window.history.replaceState({}, document.title, '/');
      } else {
        // Load from localStorage after refresh
        const cached = localStorage.getItem('contacts');
        if (cached) {
          console.log('Cached Contacts:', JSON.parse(cached));
        }
      }
    };
  
    fetchContacts();
  }, [location]);
  

  const handleGoogleLogin = async () => {
    const res = await fetch('http://localhost:5000/auth-url');
    const data = await res.json();
    window.location.href = data.url;
    console.log(data.url,"url saved ")
  };

  return (
    <div>
      <h1>Google People API Integration</h1>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
    </div>
  );
};

export default PeopleAPI;