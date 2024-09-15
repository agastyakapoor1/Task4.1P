import React from 'react';
import './styles.css';
import Header from './Header';
import FeaturedArticles from './FeaturedArticles';
import Tutorials from './Tutorials';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <FeaturedArticles />
      <Tutorials />
      <Footer />
    </div>
  );
}

export default App;
