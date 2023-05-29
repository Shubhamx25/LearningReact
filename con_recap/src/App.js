import React from 'react';
import Form from './Form';


const App = () => {

 /*   let [formData, setFormData] = React.useState({
     firstName : '',
     lastName: '',
     email: '',
     comment: '',
     isCorrect: true
   });

    console.table(formData);

   const handleChange = (e) => {
   
    let {name, value, type, checked} = e.target;
    
    setFormData(prevFormData => {
        console.log(`name: ${name} \nvalue: ${value}\n`);   
        return {
            ...prevFormData,
            [name]: type == 'checkbox' ? checked : value
        }
    })
   } */

   return (
    <div className='container'>
      {/*   <form>
            <input placeholder='First Name' type='text' onChange={handleChange} name='firstName' />
            <input placeholder='Last Name' type='text' onChange={handleChange} name= 'lastName' />
            <input type='email' placeholder='Enter email' onChange={handleChange} name='email' />
            <textarea value={formData.comment} name='comment' onChange={handleChange} /><br/>
            <input type='checkbox' id='is-Correct' onChange={handleChange} name='isCorrect'/>
            <label htmlFor='is-Correct' >Above data is correct</label>
        </form> */}
        <Form />
    </div>
   )
}

export default App;
