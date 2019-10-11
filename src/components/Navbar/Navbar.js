import React from 'react';

//Top navbar icons
import MenuDark from '../../assets/img/Light-mode/menu/2x/menu.png';
import MenuLight from '../../assets/img/Dark-mode/menu/2x/menu.png';

import SearchDark from '../../assets/img/Light-mode/black-18dp/2x/search.png';
import SearchLight from '../../assets/img/Dark-mode/search/2x/search.png';

import Back from '../../assets/img/Light-mode/back/2x/back.png';

import Dark from '../../assets/img/Light-mode/dark/2x/dark.png';
import Light from '../../assets/img/Dark-mode/light/1x/light.png';

import CloseDark from '../../assets/img/Light-mode/cloase-light/1x/cloase-light.png';
import CloseLight from '../../assets/img/Dark-mode/close-dark/1x/close-dark.png';

import RefreshDark from '../../assets/img/Light-mode/refresh/1x/refresh.png';
import RefreshLight from '../../assets/img/Dark-mode/refresh/1x/refresh.png';

//Navbar icons
import NotesDark from '../../assets/img/Navbar/note-black/1x/note.png';
import NotesLight from '../../assets/img/Navbar/note-white/1x/note.png';

import ReminderDark from '../../assets/img/Navbar/notifications/1x/notifications.png';
import ReminderLight from '../../assets/img/Navbar/notifications-white/1x/notifications.png';

import EditDark from '../../assets/img/Navbar/create-black/1x/edit.png';
import EditLight from '../../assets/img/Navbar/create-white/1x/edit.png';

import ArchiveBlack from '../../assets/img/Navbar/archive-black/1x/archive.png';
import ArchiveWhite from '../../assets/img/Navbar/archive-white/1x/archive.png';

import TrashDark from '../../assets/img/Navbar/delete-black/1x/trash.png';
import TrashLight from '../../assets/img/Navbar/delete-white/1x/trash.png';

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
                            {
                                !this.props.dark 
                                ?
                                    <img onClick = {this.props.onClickHam} src={MenuDark} alt="menu" className="menu"/>
                                :
                                    <img onClick = {this.props.onClickHam} src={MenuLight} alt="menu" className="menu"/>

                            }
                            
                        </div>
                        <div className={!this.props.dark ? "logo-black" : "logo-white"}>Keep</div>

                        <div className="icons">
                            <div className="searchbar">
                                {
                                    !this.props.dark 
                                    ?
                                        <img onClick = {this.onClickSearch} className={!this.state.search ? "search" : "search hide"} src={SearchDark} alt="search"/>
                                    :
                                        <img onClick = {this.onClickSearch} className={!this.state.search ? "search" : "search hide"} src={SearchLight} alt="search"/>
                                }
                                <img onClick = {this.onClickBack} className={!this.state.search ? "back" : "back back-v"} src={Back} alt="back"/> 
                               
                                <input 
                                    className={!this.state.search ? "search-input" : "search-input expand-search"} 
                                    type="search" placeholder="Search">
                                </input>
                            </div>
                            <div className="refresh">
                                {
                                    !this.props.dark 
                                    ?
                                        <img src={RefreshDark} alt="refresh" className="refresh"/>
                                    :
                                        <img src={RefreshLight} alt="refresh" className="refresh"/>
                                }
                            </div>
                
                            <div className="dark-icon">
                                {
                                    !this.props.dark 
                                    ?
                                        <img onClick = {this.props.onToggleTheme} src={Dark} alt="dark" className="dark"/>
                                    :
                                        <img onClick = {this.props.onToggleTheme} src={Light} alt="dark" className="dark"/>
                                }
                                
                            </div>
                            <div className="account-icon">
                                <div className="account"></div>
                            </div>
                        </div>

                        <ul className={!this.props.ham ? "nav-links" : "nav-links open"}>
                            {
                                !this.props.dark 
                                ?
                                    <img onClick = {this.props.onClickClose} src={CloseDark} alt="search" className="close-nav"/>
                                :
                                    <img onClick = {this.props.onClickClose} src={CloseLight} alt="search" className="close-nav"/>
                            }
                            <div className="nav-line"></div>
                            <div className={!this.props.dark ? "logo-nav-black" : "logo-nav-white"}>Keep Notes</div>
                            <li className="links-notes">Notes
                                {
                                    !this.props.dark 
                                    ?
                                        <img src={NotesDark} alt="notes" className="notes-icon"/>
                                    :
                                        <img src={NotesLight} alt="notes" className="notes-icon"/>
                                }
                                
                            </li>
                            <li className="links-reminder">Reminders
                                {
                                    !this.props.dark 
                                    ?
                                        <img src={ReminderDark} alt="reminder" className="reminder-icon"/>
                                    :
                                        <img src={ReminderLight} alt="reminder" className="reminder-icon"/>
                                }
                            </li>
                            <div className="hr1"></div>
                            <li className="links-edit">Edit labels
                                {
                                    !this.props.dark 
                                    ?
                                        <img src={EditDark} alt="edit" className="edit-icon"/>
                                    :
                                        <img src={EditLight} alt="edit" className="edit-icon"/>
                                }
                            </li>
                            <div className="hr2"></div>
                            <li className="links-archive">Archive
                                {
                                    !this.props.dark 
                                    ?
                                        <img src={ArchiveBlack} alt="archive" className="archive-icon"/>
                                    :
                                        <img src={ArchiveWhite} alt="archive" className="archive-icon"/>
                                }
                            </li>
                            <li className="links-trash">Trash
                                {
                                    !this.props.dark 
                                    ?
                                        <img src={TrashDark} alt="trash" className="trash-icon"/>
                                    :
                                        <img src={TrashLight} alt="trash" className="trash-icon"/>
                                }
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Navbar;