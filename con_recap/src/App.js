import React from 'react';

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
            prevTaskArr.push(`Thing ${myArr.length + 1}`)
            console.log('after state function: ',prevTaskArr);
        })

    }
  return (
    <div className='container'>
        <button onClick={handleClick}>Add items</button>
        {data}
    </div>
  )
}

export default App;