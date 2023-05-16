import './App.css';
import DropdownMenu from './components/dropdownMenu';
import Modal from 'react-modal';
import React, { useState } from 'react';
import MySvgComponent from './components/MySvgComponent';
import Footer from './components/Footer';
import SignUpModal from './components/signUpComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

Modal.setAppElement('#root');

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);


  return (
    <div className="App">
      <header className="App-header">
        <DropdownMenu />

        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
          <ul className="modal-list">
            <a href='https://www.google.com'><h4>Americas</h4></a>
            <a href='https://www.google.com'><h4>Europe</h4></a>
            <a href='https://www.google.com'><h4>Africa</h4></a>
            <a href='https://www.google.com'><h4>Asia</h4></a>
            <a href='https://www.google.com'><h4>Oceania</h4></a>
            <a href='https://www.google.com'><h4>Antarctica</h4></a>
          </ul>
          <ul className="modal-list">
            <li><a href="https://www.google.com">United States</a></li>
            <li><a href="https://www.google.com">Canada</a></li>
            <li><a href="https://www.google.com">Mexico</a></li>
            <li><a href="https://www.google.com">Brazil</a></li>
            <li><a href="https://www.google.com">Argentina</a></li>
            <li><a href="https://www.google.com">Chile</a></li>
            <li><a href="https://www.google.com">Colombia</a></li>
            <li><a href="https://www.google.com">Peru</a></li>
            <li><a href="https://www.google.com">Venezuela</a></li>
            <li><a href="https://www.google.com">Ecuador</a></li>
            <li><a href="https://www.google.com">Guatemala</a></li>
            <li><a href="https://www.google.com">Cuba</a></li>
            <li><a href="https://www.google.com">Haiti</a></li>
            <li><a href="https://www.google.com">Bolivia</a></li>
            <li><a href="https://www.google.com">Dominican Republic</a></li>
            <li><a href="https://www.google.com">Honduras</a></li>
            <li><a href="https://www.google.com">Paraguay</a></li>
            <li><a href="https://www.google.com">Panama</a></li>
          </ul>
          <p>lorem </p>
          <div />
          <div>
            <button onClick={() => setModalIsOpen(false)}>Close</button>
          </div>
        </Modal>
        <MySvgComponent setModalIsOpen={setModalIsOpen} />
        <h1>My Site</h1>
        <p>About Trademark Global Search:

          At Trademark Global Search, we are a network of experienced lawyers specialized in the field of intellectual property since 1980. We are committed to providing comprehensive services related to patents and trademarks. To enhance our services, we have developed a user-friendly website, www.trademarksearchglobal.com, which enables you to conduct quick and efficient trademark searches and registrations around the world.

          Our team comprises skilled professionals who possess extensive experience in handling intellectual property matters on a global scale. We work in collaboration with leading international law firms, ensuring that you receive the best possible service.

          Here's how we operate:

          Once you approach us with your trademark query, we will assign a dedicated IP consultant who will handle all your requests concerning the country or jurisdiction of your interest. Our consultants have in-depth knowledge about the differing requirements and timeframes for intellectual property matters in different regions. They will provide you with expert advice and oversee the processes being handled by our partner attorneys, keeping you informed of any progress.

          You can track the progress of your applications across multiple countries in real-time by contacting us via email, irrespective of the number of countries being processed.

          We are dedicated to providing our clients with efficient and reliable services in the field of intellectual property. Choose Trademark Global Search to ensure that your trademark is protected worldwide.</p>
      </header>
      <Footer />
    </div>
  );
}

export default App;