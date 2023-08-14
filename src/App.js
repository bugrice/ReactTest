import logo from './logo.svg';
import './App.css';

function App() {
  const name = "리액트";
  const showLink = true;
  const showLogo = 'none';
  const names = ['React', 'Vue', 'Angular'];

  return (
    //아래 같은 것을 JSX라고 부른다.
    // class가 이미 javaScript내에서 예악어기 때문이다.

    <div className="App">
      <header className="App-header">
        {
          showLogo === 'show' ?
          <img src={logo} className="App-logo" alt="logo" />
          : <h1>React</h1>
        }
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {showLink && (
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn {name}
        </a>
        )}
        
        <ul>
          {
            names.map(item => (
              <li key={item}>{item}</li>
            ))
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
