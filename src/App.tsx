import Possible from "./components/Possible"
import Welcome from './components/Welcome';

import './styles/possible.css'

function App() {
  return (
    <div>
      <Welcome />
      {false ? <Possible /> : null}
    </div>
  );
}

export default App;
