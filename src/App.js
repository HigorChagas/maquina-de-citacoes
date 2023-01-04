import './App.css';

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
          <span id='author'>Alguem ai</span>
        </div>
        <div className='buttons'>
          <a className='button' id='instagram-quote' href='#' style={{backgroundColor: '#7F8DFA'}}></a>
          <a className='button' id='instagram-quote' href='#' style={{backgroundColor: '#7F8DFA'}}></a>
        </div>
      </div>
    </div>
  );
}

export default App;
