import React from 'react'

const Form = () => {
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
        conPassword: '',
        fName: '',
        lName: '',
        subscribedNewsletter: false,
        tNC: false,
        gender: '',
        country: ''
    });

    console.table([formData])
    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }


  return (
   
        <div className="form_wrapper">
        <div className="form_container">
            <div className="title_container">
            <h2>Responsive Registration Form</h2>
            </div>
            <div className="row clearfix">
            <div className="">
                <form>
                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                            <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
                        </div>

                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                            <input type="password" name="password" placeholder="Password" onChange={handleChange} value={formData.password} required />
                        </div>

                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                            <input type="password" name="conPassword" placeholder="Re-type Password" onChange={handleChange} value={formData.conPassword}  required />
                            
                        </div>
                        <div>
                            <span style={{color:'red',fontSize:'10px'}}>{formData.conPassword && (formData.password == formData.conPassword ? '  ' : 'Password doesn\'t match')}</span>
                        </div>

                        <div className="row clearfix">
                            <div className="col_half">
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                    <input type="text" name="fName" placeholder="First Name" onChange={handleChange} value={formData.fName} />
                                </div>
                            </div>
                            <div className="col_half">
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                    <input type="text" name="lName" placeholder="Last Name" required onChange={handleChange} value={formData.lName}  />
                                </div>
                            </div>
                        </div>

                        <div className="input_field radio_option">
                            <input type="radio" name="gender" id="rd1" value='male' onChange={handleChange}  />
                            <label htmlFor="rd1">Male</label>
                            <input type="radio" name="gender" id="rd2" value='female' onChange={handleChange} />
                            <label htmlFor="rd2">Female</label>
                        </div>
                        
                        <div className="input_field select_option">
                                <select name='country' value={formData.country} onChange={handleChange}>
                                <option>Select a country</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                </select>
                            <div className="select_arrow"></div>
                        </div>

                        <div className="input_field checkbox_option">
                                <input type="checkbox" id="cb1" name='tNC' onChange={handleChange} />
                                <label htmlFor="cb1">I agree with terms and conditions</label>
                        </div>

                        <div className="input_field checkbox_option">
                                <input type="checkbox" id="cb2" name='subscribedNewsletter' onChange={handleChange}/>
                                <label htmlFor="cb2">I want to receive the newsletter</label>
                        </div>

                        <input className="button" type="button" value="Register" />
                </form>
            </div>
            </div>
        </div>
        </div>


  )
}

export default Form