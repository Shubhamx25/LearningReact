import React from 'react';
import List from './List';

let myArr = ['Thing 1','Thing 2','Thing 3'];

const App = () => {

    const [tasks, setTasks] = React.useState(myArr)

    console.log('Tasks: ',tasks)

  
    let data =  tasks?.map((item) => {
            return (
                <p key={item}>{item}</p>
            )
        })
   

    let handleClick = () => {
        setTasks((prevTaskArr) => {
           return [...prevTaskArr, `Thing ${prevTaskArr.length + 1}`];
        })
 
    }
  return (
    <div className='container'>
        <button onClick={handleClick}>Add items</button>
        <List data = {data} />
    </div>
  )
}

export default App;
