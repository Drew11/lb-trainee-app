import React, {useEffect, useState } from 'react';
import Filter from '../filter/filter';
import Table from '../table/table';
import axios from 'axios';
import './app.css';

function App() {

  const [stats, setStats] = useState(null);
  const [order, setOrder] = useState(1);
  const [sortQuery, setSortQuery] = useState( 'id' );
  const [filterQuery, setFilterQuery] = useState( '' );

  const sortCallbackMap = {
          sort_numbers: (a, b) => {
              const numbA = parseFloat(a[sortQuery]);
              const numbB = parseFloat(b[sortQuery]);
              if(numbA > numbB){
                  return order * 1
              }else if (numbA < numbB) {
                  return order * (-1)
              }else
                  return 0
          },
          sort_strings: (a, b) => {
              if(order === 1) {
                  return a[sortQuery].split(' ')[1].localeCompare(b[sortQuery].split(' ')[1]);
              }
              return b[sortQuery].split(' ')[1].localeCompare(a[sortQuery].split(' ')[1]);
          }
      };

  const getSortedStats = ()=>{
      let sortedStats;

      if (sortQuery === 'name') {
          sortedStats = [...stats].sort(sortCallbackMap['sort_strings']);
      } else {
          sortedStats = [...stats].sort(sortCallbackMap['sort_numbers']);
      }
      return sortedStats;
  };

  const getFilteredStats = ()=>{
      return getSortedStats().filter(stat => stat.name.split(' ')[1].toLocaleLowerCase().includes(filterQuery.toLocaleLowerCase()));
  };


  const filteredStats = stats? getFilteredStats(): null;
  const loading = !stats? <h2>Loading...</h2>: null;
  const table = filteredStats && filteredStats.length?
      <Table stats={filteredStats}
             sortQuery={sortQuery}
             setSortQuery={setSortQuery}
             setOrder={setOrder}
             order={order}
      />: null;

  useEffect(()=>{
        async function fetchData() {
            const promise = await axios.get('https://lb-trainee-app.herokuapp.com/stats');
            setStats(promise.data);
        }
        fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
          <h1>Test task</h1>
      </header>
        <main>
            <Filter
                filterQuery={filterQuery}
                setFilterQuery={setFilterQuery}
            />
            { loading }
            { table }
        </main>
        <footer>
        </footer>
    </div>
  );
}

export default App;
