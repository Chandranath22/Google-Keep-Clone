import React from 'react';
import './css/SignIn.css';

class SignIn extends React.Component {
    render() {
        return (
            <article>            
                <main>
                    <div className = "dimensions">
                        <div className="signin">Sign In</div>
                        <div className="email">
                            <label htmlFor="Email">Email</label>
                            <input type="email" required/>
                        </div>
                        <div className="password">
                            <label htmlFor="Password">Password</label>
                            <input type="password" required/>
                        </div>
                        <div>
                            <input onClick={() => this.props.onRouteChange('home')} className="submit-btn" type="submit" value="Sign In"/>
                        </div>
                        <div className="or">
                            Or new user
                        </div>
                        <div>
                            <input onClick={() => this.props.onRouteChange('register')} className="register-btn" type="submit" value="Register"/>
                        </div>
                    </div>
                </main>           
            </article>
        )
    }
}

export default SignIn;