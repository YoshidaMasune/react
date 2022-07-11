
import './App.css';
import Nav from './components/Nav'
import Items from './components/Items'

import { v4 as uuidv4 } from 'uuid';

function App() {

  const data = [
    {fname: 'natee', lname: 'chaichana'},
    {fname: 'somchai', lname: 'chaichana'},
    {fname: 'sangsome', lname: 'chaichana'},
  ]

  return (
    <div className="App text-center">
      <Nav />

      <main>
        <h2>content</h2>

        {data.map(e => {
          return <Items {...e} key = {uuidv4()}/>
        })}
      
     
      </main>

    </div>
  );
}

export default App;
