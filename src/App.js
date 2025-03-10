// App.js

// import React from 'react';
// import Homepage from './Container/Home/Home';
// function App() {
//     return (
//         <div>
//             <Homepage />
//         </div>
//     );
// }

// export default App;
import React from 'react';
import ImageCut from './Container/Cut';
import CallApi from './Container/api';
// import {Homepage} from './Container/Home/Home';
import LimitedTextDiv from './Container/Home/Home';
import ChatApp from './Components/chat';
const App = () => {
  const imageUrl = 'https://via.placeholder.com/500'; // Replace with your image URL

  return (
    <div>
      <CallApi/>
      {/* <h1>Image Cut Example</h1> */}
      {/* <LimitedTextDiv/> */}
     {/* <ChatApp/> */}
      {/* <ImageCut imageUrl={imageUrl} /> */}
    </div>
  );
};

export default App;
