import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import NavBarSimple from './components/NavBarSimple';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Sidebar />
      <NavBarSimple />
      <EventsClass />
      <EventsFunctional />
    </div>
  );
}

export default App;