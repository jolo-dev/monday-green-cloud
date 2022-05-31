// @ts-ignore
import AttentionBox from 'monday-ui-react-core/dist/AttentionBox.js';
import logo from './logo.svg';
import './App.css';
import 'monday-ui-react-core/dist/main.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Green Cloud</p>
        <AttentionBox
          title='Foo Bar'
          text="Let's start building your amazing app, which will change the world!"
          type='success'
        />
      </header>
    </div>
  )
}

export default App
