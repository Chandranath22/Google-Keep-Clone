import React from 'react';

//Stylesheet
import './css/Navbar.css';


class Navbar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            search: false,
        }
    }

    onClickBack = () => {    
        this.setState({search: false});
    }

    onClickSearch = () => {
        this.setState({search: !this.state.search});
        this.setState({ham: false});
    }    

    render() {
        return (
            <div>
                <header>
                    <nav className={!this.props.dark ? "nav light" : "nav dark"}>
                        <div  className="hamberger">                           
                            <i 
                                onClick = {this.props.onClickHam} 
                                className = "material-icons menu"
                            >
                                menu
                            </i>                            
                        </div>
                        <div className = {!this.props.dark ? "logo light" : "logo dark"}>Keep</div>

                        <div className="icons">
                            <div className="searchbar">                               
                                <i 
                                    onClick = {this.onClickSearch} 
                                    className = {!this.state.search ? "material-icons search" : "material-icons search hide"}
                                >
                                    search
                                </i>                
                                <i 
                                    onClick = {this.onClickBack} 
                                    className = {!this.state.search ? "back" : "material-icons back back-v"}
                                >
                                    arrow_back
                                </i>
                                <input 
                                    className = {!this.state.search ? "search-input" : "search-input expand-search"} 
                                    type="search" placeholder="Search">
                                </input>
                            </div>
                            <div className = "refresh">                                
                                <i className = "material-icons refresh">refresh</i>                                   
                            </div>   
                            <div className = {!this.props.dark ? "dark-icon links-light" : "dark-icon links-dark"}>                               
                                <i 
                                    onClick = {this.props.onToggleTheme} 
                                    className = {!this.props.dark ? "material-icons dark-icon links-light" : "material-icons dark-icon links-dark"}
                                >
                                    invert_colors
                                </i>
                            </div>
                            <div className="account-icon">
                                <div className="account"></div>
                            </div>
                        </div>

                        <ul className={!this.props.ham ? "nav-links" : "nav-links open"}>
                            <i 
                                onClick = {this.props.onClickClose} 
                                className = "material-icons close-nav"
                            >
                                arrow_back_ios
                            </i>
                            <div className={!this.props.dark ? "nav-line line-light" : " nav-line line-dark"}></div>                            
                            <div onClick={() => this.props.onLinkRouteChange('notes')} className={!this.props.dark ? "logo-nav light-logo" : "logo-nav dark-logo"}>Keep Notes</div>
                            <li onClick={() => this.props.onLinkRouteChange('notes')} className={!this.props.dark ? "links-notes links-light" : "links-notes links-dark"}>Notes
                                <i className = "material-icons notes-icon">import_contacts</i>
                            </li>
                            <li onClick={() => this.props.onLinkRouteChange('reminders')} className={!this.props.dark ? "links-reminder links-light" : "links-reminder links-dark"}>Reminders
                                <i className = "material-icons reminder-icon">notifications_none</i>
                            </li>
                            <div className="hr1"></div>
                            <li className = {!this.props.dark ? "links-edit links-light" : "links-edit links-dark"}>Edit labels
                                <i className = "material-icons edit-icon">edit</i>
                            </li>
                            <div className="hr2"></div>
                            <li onClick={() => this.props.onLinkRouteChange('archive')} className = {!this.props.dark ? "links-archive links-light" : "links-archive links-dark"}>Archive
                                <i className = "material-icons archive-icon">archive</i>
                            </li>
                            <li onClick={() => this.props.onLinkRouteChange('trash')} className = {!this.props.dark ? "links-trash links-light" : "links-trash links-dark"}>Trash
                                <i className = "material-icons trash-icon">delete</i>
                            </li>
                            <li onClick={() => this.props.onRouteChange('signout')} className = {!this.props.dark ? "links-signout links-light" : "links-signout links-dark"}>Sign out
                                <i className = "material-icons exit-icon">logout_outline</i>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Navbar;