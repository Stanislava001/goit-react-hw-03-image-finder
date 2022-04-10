import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import './App.css';

class App extends Component {
  // state = {
  //   loading: false,
  // };

  render() {
    return (
      <>
        <Searchbar />
        <Loader />
        {/* <Modal /> */}
        <ImageGallery />
        <ImageGalleryItem />
        <Button />
      </>
    );
  }
}

export default App;
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         textTransform: 'uppercase',
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
