import './App.css';
import { Header } from './components/Header';
import { UserList } from './components/UserList';

import { GlobalProvider} from './context/GlobalState'


function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header/>
        <UserList />
      </div>
    </GlobalProvider>
  );
}

export default App;