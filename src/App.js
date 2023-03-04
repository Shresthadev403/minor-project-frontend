import logo from './logo.svg';
import './App.css';
import Header from './components/client/header/header';
import ClientMap from './components/client/map/clientMap';
import AdminMap from './components/admin/map/adminMap';



function App() {
  return (
    <div className="App">
    <Header/>
    {/* <ClientMap/> */}

    <AdminMap/>
    </div>
  );
}

export default App;
