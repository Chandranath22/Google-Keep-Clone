import React from 'react';
import './css/register.css';

class Register extends React.Component {
    render () {
        return (
            <article>            
                <main>
                    <div className = "dimensions-reg">
                        <div className="register">Register</div>
                        <div className="firstName">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" required/>
                        </div>
                        <div className="lastName">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" required/>
                        </div>
                        <div className="email">
                            <label htmlFor="Email">Email</label>
                            <input type="email" required/>
                        </div>
                        <div className="password">
                            <label htmlFor="Password">Password</label>
                            <input type="password" required/>
                        </div>
                        <div>
                            <input onClick={() => this.props.onRouteChange('signin')} className="submit-btn" type="submit" value="Sign Up"/>
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