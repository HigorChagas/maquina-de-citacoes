import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Font = () => {
  return (
    <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
  );
}

const App = () => {
  return (
    <div id='wrapper'>
      <div id='quote-box'>
        <div className='quote-text'>
          <span id='text'>Dreaming, after all, is a form of planning.
          </span>
        </div>
        <div className='quote-author' style={{opacity: '1'}}>
          -
          <span id='author'></span>
        </div>
      </div>
    </div>
  );
}

export default App;
