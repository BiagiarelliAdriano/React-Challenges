import css from './App.module.css';
import Sidebar from "./components/Sidebar";
// import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';
import Content from "./components/Content";
import LifeCyclesCDU from './components/guides/LifeCyclesCDU';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <LifeCyclesCDU />
    </div>
  );
}

export default App;