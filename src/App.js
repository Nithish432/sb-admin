import "./App.css";
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

function App() {

  let data = {
    earningsMonthly:"4,00,000",
    earningsAnnual:"45,00,000",
    task:"80",
    pendingRequest:18,
  }

  return <>
  <div id="wrapper">
    <Sidebar/>
    <Dashboard data={data}/>
    
  </div>
  </>
}

export default App;
