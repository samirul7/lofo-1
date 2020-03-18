import React from 'react'
import './found-aadhaar.styles.scss'

import FormInput from '../../../form-input/form-input.component'
import CustomButton from '../../../custom-button/custom-button.component'

class FoundAadhaar extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      aadhaarNo : '',
      aadhaarName : '',
      dob : ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name] : value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    // backend job to verify the user
  }
  
  render(){
    const { aadhaarName, aadhaarNo, dob } = this.state;
    return (
      <div className="found">
        <h3 className="title">I found an aadhaar card.</h3>
        <span className="subtile">Fill aadhaar number, name and date of birth.</span>
        <form onSubmit={ this.handleSubmit } className="lost-form">
          <FormInput
            type='text'
            name='aadhaarNo'
            value ={aadhaarNo}
            handleChange={this.handleChange}
            label='Aadhaar No'
            required
          />
          <FormInput
            type='text'
            name='aadhaarName'
            value ={aadhaarName}
            handleChange={this.handleChange}
            label='Name on aadhaar'
            required
          />
          <FormInput
            type='date'
            min="1940-01-01"
            max="2018-12-31"
            name='dob'
            value ={dob}
            handleChange={this.handleChange}
            label='Date of birth'
            required
          />
          <CustomButton type='submit'>Submit</CustomButton>
        </form>
      </div>
    )
  }
}

export default FoundAadhaar;