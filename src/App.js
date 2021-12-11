import './App.css';

import {Header} from './Component/Header';
import {Newsfeed} from './Component/Newsfeed'
import {Stats} from './Component/Stats'
function App() {
  return (
    <div className="App">
      {/* {Header} */}
    <div className="app__header">
      <Header />
    </div>

      {/* {BOdy} */}
      <div className="app__body">
      <div className="app__container">
      <Newsfeed />
      {/* stats */}
      <Stats/>
      </div>

      </div>
    </div>
  );
}

export default App;