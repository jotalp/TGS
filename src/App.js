import './App.css';
import DropdownMenu from './components/dropdownMenu';
import Modal from 'react-modal';
import React, { useState } from 'react';
import MySvgComponent from './components/MySvgComponent';
import Footer from './components/Footer';
import LoginModal from './components/Login';
import CountryList from './components/CountryList';


Modal.setAppElement('#root');


function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <DropdownMenu />
        <LoginModal />
        <CountryList />

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
        <h1>Welcome To Trademark Global Search</h1>

        <p>Welcome to our network of experienced lawyers specializing in intellectual property law since 1980. We handle a wide range of practices related to patents and trademarks. To enhance our services, we have developed a user-friendly website, www.trademarksearchglobal.com, designed to facilitate quick and user-friendly trademark searches and registrations worldwide.<br /> <br />

          Our team boasts extensive expertise in managing intellectual property matters on a global scale. We are dedicated to assisting you with any IP-related services you may require, and we can recommend internationally renowned law firms as needed.
          <br /> <br />

          <h2>Here's how our process works:</h2> <br /> <br />

          When you engage with us for trademark services, we will assign a dedicated IP consultant to work with you. Your consultant will handle all your IP service requests specific to your desired country or jurisdiction.

          Different countries and jurisdictions have unique requirements and timelines for intellectual property matters. Our consultants will provide expert advice and oversee the processes entrusted to the attorneys working with us, ensuring you are kept informed of any progress made.

          Rest assured, regardless of the number of countries involved in your service requests, you can monitor the progress of your applications by contacting us via email at www.tmsearchglobal@gmail.com.

          We are committed to delivering exceptional service and protecting your intellectual property rights. Choose us for a seamless and efficient experience in trademark searches and registrations worldwide.</p>

          
      </header>
      <Footer />
    </div>
  );
}

export default App;