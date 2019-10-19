import React from 'react';
import { validate } from 'indicative/validator';
import './css/register.css';

const clearInvalid = {
    invalidFirstName: '',
    invalidEmail: '',
    invalidPassword: '',
    isFastName: false,
    isEmail: false,
    isPassword: false,
}

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            signInEmail: '',
            signInPassword: '',
            clearInvalid
        }
    }

    onFirstNameChange = (event) => {
        this.setState({firstName: event.target.value});
    }

    onLastNameChange = (event) => {
        this.setState({lastName: event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }

    onSubmitbtn = (event) => {
        event.preventDefault();
        const data = this.state;
        const rules = {
            firstName: 'required|alpha',
            signInEmail: 'required|email',
            signInPassword: 'required|min:8',
          };

        const messages = {
            required:  'This is required',
            'Name': 'Name must contain aphabets',
            'email': 'This email is invalid',
            'password': 'Password length should be 8 characters long' 
        }
        
        validate( data, rules, messages )
        .then (() => {
            this.props.onRouteChange('signin');
        })
        .catch(errors => {
            errors.forEach ( error => {
                if(error.field === "firstName") {
                    this.setState(clearInvalid);
                    this.setState({invalidFirstName: 'Name must contain aphabets' });
                    this.setState({isFastName: !this.state.isFastName});
                }else if(error.field === "signInEmail"){
                    this.setState(clearInvalid);
                    this.setState({invalidEmail: error.message});
                    this.setState({isEmail: !this.state.isEmail});
                }else if (error.field === 'signInPassword') {
                    this.setState(clearInvalid);
                    this.setState({invalidPassword: 'Password length should be 8 characters long'})
                    this.setState({isPassword: !this.state.isPassword});
                }
            })
        })
        
    }


    render () {
        return (
            <article>            
                <main>
                    <div className = "dimensions-reg">
                        <div className="register">Register</div>
                        <div className="firstName">
                            <input type="text" placeholder="First Name" onChange={this.onFirstNameChange}/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                        </div>
                        <p className={!this.state.isFastName ? "error hidden" : "error"}>{this.state.invalidFirstName}</p>
                        <div className="lastName">
                            <input type="text" placeholder="Last Name" onChange={this.onLastNameChange}/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                        </div>
                        <div className="email">
                            <input type="email" placeholder="Email" onChange={this.onEmailChange}/>
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/></svg>
                        </div>
                        <p className={!this.state.isEmail ? "error hidden" : "error"}>{this.state.invalidEmail}</p>
                        <div className="password">
                            <input type="password" placeholder="Password" onChange={this.onPasswordChange}/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><path d="M0 0h24v24H0V0z"/><path opacity=".87" d="M0 0h24v24H0V0z"/></g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
                        </div>
                        <p className={!this.state.isPassword ? "error hidden" : "error"}>{this.state.invalidPassword}</p>
                        <div>
                            <input onClick={this.onSubmitbtn} className="submit-btn" type="submit" value="Sign Up"/>
                        </div>
                        <div className="or">
                            Or existing user
                        </div>
                        <div>
                            <input onClick={() => this.props.onRouteChange('signin')} className="register-btn" type="submit" value="Sign In"/>
                        </div>
                    </div>
                </main>           
            </article>
        )
    }
}

export default Register;