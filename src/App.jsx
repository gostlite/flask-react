import React from 'react';
import mInput from './components/input';
import { useEffect, useState } from 'react';




function App() {
  const [data, updateData] = useState([{}])

useEffect(() => {
  try {
    const all_data = async () => {
      const all_data = await fetch("http://localhost:5000/products")
      if (all_data.status !== 200) return 
      const data = await all_data.json()
      console.log(await data)
      updateData(await data)     
    };
    all_data()
  } catch (error) {
    console.error(error)
  }
 

  }, [])
  return (
    <div>
<table>
      <thead>
        <tr>
        <th>
          id
        </th>
        <th>
          Item
        </th>
        <th>
          Amount
        </th>
        </tr>
        </thead>
        
        <tbody>
          {data.map((ele,i) => {
            return <tr key={i}>
              <td>{ele.id}</td>
              <td>{ele.name}</td>
              <td>{ele.price}</td>
            </tr>
      })}
        
        </tbody>
      </table>
      <mInput />
    </div>
    
  
  );
}

export default App;
