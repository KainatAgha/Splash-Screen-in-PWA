import React, { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <SplashScreen />
      ) : (
        <div>
          <h1 className='header'>Image Gallery</h1>
          <div className="grid-container">
          <div className="grid-item">
            <img
              src="https://www.queensland.com/us/en/places-to-see/experiences/nature-and-wildlife/cute-baby-animals-at-australia-zoo.thumb.800.480.jpg"
              alt="Image 1"
            />
          </div>
          <div className="grid-item">
            <img
              src="https://a-z-animals.com/media/tiger_laying_hero_background.jpg"
              alt="Image 2"
            />
          </div>
          <div className="grid-item">
            <img
              src="https://media.wired.com/photos/593261cab8eb31692072f129/master/w_2560%2Cc_limit/85120553.jpg"
              alt="Image 3"
            />
          </div>
          <div className="grid-item">
            <img
              src="https://aldf.org/wp-content/uploads/2018/05/lamb-iStock-665494268-16x9-e1559777676675.jpg"
              alt="Image 4"
            />
          </div>
          <div className="grid-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe7FaZ1c0jggZP_BwENoJHT8ah5CleWermxg&usqp=CAU.jpg"
              alt="Image 5"
            />
          </div>
          <div className="grid-item">
            <img
              src="https://s28151.pcdn.co/wp-content/uploads/sites/2/2022/03/Coyote-animal-sentience-research.jpg"
              alt="Image 6"
            />
          </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default App;
