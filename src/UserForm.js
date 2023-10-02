import React from "react";

class UserForm extends React.Component {

  constructor (props) {
    super(props);
    this.state = {userName: "", description: "", gender: "female", "acceptTerms": false};
  }

  // handleChange = (e) => {
  //   // console.log(e.target.value);
  //   this.setState({userName: e.target.value});
  // };

  // handleGenderChange = (e) => {
  //   this.setState((prevState) => {
  //     console.log(`new gender: ${e.target.value}`);
  //     if(e.target.value === "" || e.target.value === "Choose...") {
  //       return {gender: prevState.gender};
  //     }
  //     return {gender: e.target.value};
  //   });
  // };

  // handleDescriptionChange = (e) => {
  //   this.setState({description: e.target.value});
  // };

  // handleAcceptTermsChange = (e) => {
  //   this.setState({acceptTerms: e.target.checked});
  // };

  handleChange = (e) => {
    this.setState((prevState) => {
      if (e.target.name === "gender") {
        if (e.target.value === "" || e.target.value === "Choose...") {
          return {gender: prevState.gender};
        }
        return {gender: e.target.value};
      }
      else if (e.target.name === "acceptTerms") {
        return {acceptTerms: e.target.checked};
      }
      return {[e.target.name]: e.target.value};
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`userName: ${this.state.userName} 
    \ngender: ${this.state.gender} 
    \ndescription: ${this.state.description} 
    \nacceptTerms: ${this.state.acceptTerms}`);
  };

  render () {
    return <form onSubmit={this.handleSubmit}>
      <div>
        <label>
          Name: 
          <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} />
        </label>
      </div>
      <div>
        <label>
          Gender: 
          <select name="gender" value={this.state.gender} onChange={this.handleChange}>
            <option>Choose...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Description: 
          <textarea name="description" rows="5" value={this.state.description} onChange={this.handleChange} ></textarea>
        </label>
      </div>
      <div>
        <label>
          Accept Terms: 
          <input type="checkbox" name="acceptTerms" checked={this.state.acceptTerms} onChange={this.handleChange} />
        </label>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>;
  }
}

export default UserForm;