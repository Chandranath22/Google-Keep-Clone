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
                    <nav className={!this.props.dark ? "nav-light" : "nav-dark"}>
                        <div  className="hamberger">                           
                            <i 
                                onClick = {this.props.onClickHam} 
                                className = "material-icons menu"
                            >
                                menu
                            </i>                            
                        </div>
                        <div className = {!this.props.dark ? "logo-black" : "logo-white"}>Keep</div>

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
                            <div className="refresh">                                
                                <i className = "material-icons refresh">refresh</i>                                   
                            </div>                
                            <div className = "dark-icon">                               
                                <i 
                                    onClick = {this.props.onToggleTheme} 
                                    className = "material-icons dark"
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
                            <div className="nav-line"></div>                            
                            <div onClick={() => this.props.onLinkRouteChange('notes')} className={!this.props.dark ? "logo-nav-black" : "logo-nav-white"}>Keep Notes</div>
                            <li onClick={() => this.props.onLinkRouteChange('notes')} className="links-notes">Notes
                                <i className = "material-icons notes-icon">import_contacts</i>
                            </li>
                            <li onClick={() => this.props.onLinkRouteChange('reminders')} className="links-reminder">Reminders
                                <i className = "material-icons reminder-icon">notifications_none</i>
                            </li>
                            <div className="hr1"></div>
                            <li className="links-edit">Edit labels
                                <i className = "material-icons edit-icon">edit</i>
                            </li>
                            <div className="hr2"></div>
                            <li onClick={() => this.props.onLinkRouteChange('archive')} className="links-archive">Archive
                                <i className = "material-icons archive-icon">archive</i>
                            </li>
                            <li onClick={() => this.props.onLinkRouteChange('trash')} className="links-trash">Trash
                                <i className = "material-icons trash-icon">delete_outline</i>
                            </li>
                            <li onClick={() => this.props.onRouteChange('signout')} className="links-signout">Sign out
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