import React from 'react';
import './lost-aadhaar.styles.scss' 

import FormInput from '../../../form-input/form-input.component'
import CustomButton from '../../../custom-button/custom-button.component'

class LostAadhaar extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      aadhaarNo : '',
      aadhaarName : '',
      dob : ''
    }
  }

  handleChange = event => {
    let { name, value } = event.target;
    
    this.setState({
      [name] : value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    // backend job to verify the user
  }

  render() {
    const { aadhaarName, aadhaarNo, dob } = this.state;
    //const today = new Date();
    // console.log(maxDate)
    return (
      <div className="lost">
        <h3 className="title">I have lost my aadhaar card.</h3>
        <span className="subtile">Search your aadhaar card with aadhaar number or name and date of birth.</span>
        <form onSubmit={ this.handleSubmit } className="lost-form">
          <FormInput
            type='text'
            name='aadhaarNo'
            value ={aadhaarNo}
            handleChange={this.handleChange}
            label='Aadhaar No'
          />
          <h3 className="center">OR</h3>
          <FormInput
            type='text'
            name='aadhaarName'
            value ={aadhaarName}
            handleChange={this.handleChange}
            label='Name on aadhaar'
          />
          <FormInput
            type='date'
            min="1940-01-01"
            max="1950-01-01"
            name='dob'
            value ={dob}
            handleChange={this.handleChange}
            label='Date of birth'
          />
          <CustomButton type='submit'>Search</CustomButton>
        </form>
      </div>
    )
  }
}

export default LostAadhaar;