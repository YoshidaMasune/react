
import './App.css';
import Nav from './components/Nav'
import Items from './components/Items'

import { v4 as uuidv4 } from 'uuid';
import From from './components/from/From';

function App() {

  const data = [
    {fname: 'natee', lname: 34523},
    {fname: 'somchai', lname: 4579945},
    {fname: 'sangsome', lname: 3451},
  ]

  return (
    <div className="App text-center">
      <Nav />

      <main>
        <h2>content</h2>

        <From />

        {data.map(e => {
          return <Items {...e} key = {uuidv4()}/>
        })}
     
      </main>

    </div>
  );
}

export default App;
