import React from "react";

class UserForm extends React.Component {

  constructor (props) {
    super(props);
    this.state = {userName: "", description: "", gender: "female", "acceptTerms": false};
  }

  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({userName: e.target.value});
  };

  handleGenderChange = (e) => {
    this.setState((prevState) => {
      console.log(`new gender: ${e.target.value}`);
      if(e.target.value === "" || e.target.value === "Choose...") {
        return {gender: prevState.gender};
      }
      return {gender: e.target.value};
    });
  };

  handleDescriptionChange = (e) => {
    this.setState({description: e.target.value});
  };

  handleAcceptTermsChange = (e) => {
    this.setState({acceptTerms: e.target.checked});
  };

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
          <input type="text" value={this.state.userName} onChange={this.handleChange} />
        </label>
      </div>
      <div>
        <label>
          Gender: 
          <select value={this.state.gender} onChange={this.handleGenderChange}>
            <option>Choose...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Description: 
          <textarea rows="5" value={this.state.description} onChange={this.handleDescriptionChange} ></textarea>
        </label>
      </div>
      <div>
        <label>
          Accept Terms: 
          <input type="checkbox" checked={this.state.acceptTerms} onChange={this.handleAcceptTermsChange} />
        </label>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>;
  }
}

export default UserForm;