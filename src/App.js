import logo from './logo.svg';
import './App.css';
import DropdownMenu from './components/dropdownMenu';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" /> +
            </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <DropdownMenu/>
              </li>
            </ul>
          </div>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">FoodMind Robotics</h1>
        <p>
          "Revolutionizing the future of food with advanced robotics and AI technology."
        </p>
        <p> 
        lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        </p>
             
        <footer>
          <button>
            <a href="https://www.facebook.com/foodmindrobotics/" target="_blank">Facebook</a>
          </button>
          <button>

            <a href="https://www.instagram.com/foodmindrobotics/" target="_blank">Instagram</a>
          </button>
          <button>
            <a href="https://twitter.com/foodmindrobotic" target="_blank">Twitter</a>
          </button>
        </footer>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;


