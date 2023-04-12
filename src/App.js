import NavBar from './Component/Navbar/NavBar';
import "./App.css";
import { originals,actions} from './urls';
import Banner from './Component/Banner/Banner';
import Rowpost from './Row_Post/Rowpost';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rowpost url={originals} title="Netflix Trendings"/>
      <Rowpost url={actions} title="Actions" isSmall/>
    </div>
  );
}

export default App;
