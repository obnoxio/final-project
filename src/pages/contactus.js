import React from 'react';
import './contactus.css'
class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
  
    render() {
      return(
        <div className="form">
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div class="pageTitle title">Contact Us </div>
            <div class="secondaryTitle title">Please fill this form to sign up.</div>
            <div>
              
              <input type="text" placeholder="Name"  className="name formEntry" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>
            <div>
            
            <input type="email" class="email formEntry" placeholder="Email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div>
            
            <textarea class="message formEntry" placeholder="Message" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit" className="submit formEntry" onclick="thanks()">Submit</button>
        </form>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit(event) {
  }
}

export default Form;