import React from 'react';
import './App.css';
import singaporeImage from './zoo.Jpeg'; // Ensure the image is in the 'src' folder

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Treasure Hunt!</h1>
      </header>
      <section>
        <h2>My Treasure</h2>
        <p><strong>Name:</strong> [Your Name]</p>
        <p><strong>Learning Highlight:</strong> [Something you enjoyed learning]</p>
      </section>
      <section>
        <h2>My Singapore Experience</h2>
        <img src={singaporeImage} alt="Singapore" style={{ width: '100%', maxWidth: '600px' }} />
        <p>Here’s a picture from my trip to Singapore! It was an unforgettable experience. [Your commentary]</p>
      </section>
    </div>
  );
}

export default App;