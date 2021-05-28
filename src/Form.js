import React from 'react'
import Button from './components/Button'

export default class Form extends React.Component {
state = {
  name: "",
  username: "",
  email: "",
  password: "",
}

render() {
  return(
  <div className="App-form">
  <form className="Fields" onSubmit={() => alert('You have successfully signed up!')}>
  <div className="sub-field">
    <label htmlFor="name" className="label-inputs">Name </label>
    <input type="text" 
    id="name" 
    className="form-inputs" 
    placeholder="Enter your full name" 
    value={this.state.name}
    onChange={e => this.setState({name: e.target.value})}/>
  </div>
  <div className="sub-field">
    <label htmlFor="username" className="label-inputs">Username </label>
    <input type="username" 
    id="username"
    className="form-inputs" 
    placeholder="Choose a username"
    value={this.state.username}
    onChange={e => this.setState({username: e.target.value})}/>
  </div>
  <div className="sub-field">
    <label htmlFor="email" className="label-inputs">Email </label>
    <input type="email" 
    id="email" 
    className="form-inputs" 
    placeholder="Enter your email here"
    value={this.state.email}
    onChange={e => this.setState({email: e.target.value})} />
  </div>
  <div className="sub-field">
    <label htmlFor="password" className="label-inputs">Password </label>
    <input type="password" 
    id="password" 
    className="form-inputs" 
    placeholder="Choose a password"
    value={this.state.password}
    onChange={e => this.setState({password: e.target.value})} />
  </div>
  <Button type="submit" name="Sign up"/>
  </form>
</div>
);
}
};

