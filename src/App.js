import React, {useEffect, useState} from 'react';
import Table from './components/table';
import axios from 'axios';
import './App.css';

function App() {

  const [stats, setStats] = useState(null);
  const callbackMap = {
      sort_by_score: ()=> {

      }

  };

  useEffect(()=>{
        async function fetchData() {
            const promise = await axios.get('https://lb-trainee-app.herokuapp.com/stats');

            setStats(promise.data);
        }
        fetchData();
  },[]);

  const loading = !stats? <h1>Loading...</h1>: null;
  const table = stats? <Table stats={stats}/>: null;

  return (
    <div className="App">
      <header className="App-header">
      </header>
        <main>
            { loading }
            { table }
        </main>
        <footer>
        </footer>
    </div>
  );
}

export default App;
