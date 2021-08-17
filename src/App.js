import React, { useState } from 'react'
import './App.css';
import Header from "../src/components/Header";
import Homepage from "../src/components/Homepage";
import Footer from "../src/components/Footer";

function App() {
  const [selectedPic, setSelectedPic] = useState('food');
  return (
    <div className="App">
      <Header setSelectedPic={setSelectedPic} />
      <Homepage selectedPic={selectedPic} />
      <Footer />
    </div>
  );
}

export default App;
