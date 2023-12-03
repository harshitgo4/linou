import React from 'react';
import Header from './header'
import First from './first';
import '../styles/app.css'
import Second from './second';
import Third from './Third';
import Four from './four';
import Five from './five';
import Six from './six';
import Cards from './cards';
import FAQ from './FAQ';
import Pricing from './Pricing';
import Footer from './Footer';
import Penultimate from './penultimate';
import ReviewsContainer from './reviewcontainer';
import Reviewheader from './reviewheader'
function App() {
  return (
    <div className="App">
      <Header/>
      <First/>
      <Second/>
      <Third/>
      <Four/>
      <Five/>
      <Six/>
      <Cards/>
      <Reviewheader/>
      <ReviewsContainer/>
      <ReviewsContainer/>
      <ReviewsContainer/>
      <Pricing/>
      <FAQ/>
      <Penultimate/>
      <Footer/>
    </div>
  );
}

export default App;
