import React from 'react';
import CardList from '../CardList/CardList';
import ExpandDark from '../../assets/img/Main/more_vert/1x/more_vert.png';
import ExpandLight from '../../assets/img/Main/more_vert-white/1x/more_vert.png';
import './css/Main.css';



class Main extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            note: false,
            close: false,
            title: false
        }

    }

    onClickTitle = () => {
        if(!this.state.note) {
            this.setState({note: true});
            this.setState({close: true});
            this.setState({title: true});
        }
    }

    onClickClose = () => {
        if(this.state.close) {
            this.setState({close: false});
            this.setState({note: false});
            this.setState({title: false});
        }
    }



    render() {
        return (
            <div>
                <main>
                    <div  className={!this.props.dark ? "input-area-light" : "input-area-dark"}>
                        <div onClick = {this.onClickTitle} className={!this.props.ham ? "invisible-box" : "invisible-box"}>
                            <input type="text" className={!this.state.title ? "box" : "box box-v"} placeholder="Take a note"/>
                        </div>

                        <div className="title-box">
                            <input type="text" className={!this.state.note ? "title" : "title title-v"} onChange = {this.props.onTitleChange} placeholder="Title"/>
                        </div>

                        <div className="note">
                            <textarea  className={!this.state.note ? "label" : "label expand"} onChange = {this.props.onBodyChange} placeholder="Take a note..."/>
                        </div>

                        <div className={!this.state.close ? "btn" : "btn v"}>
                            <div onClick = {this.props.onAdd} className="add">
                                Add
                            </div>
                            
                            <div onClick = {this.onClickClose} className="close">
                                Close
                            </div>

                            <div className="more">
                                {
                                    !this.props.dark
                                    ?
                                    <img onClick = {this.props.onClickReset} src={ExpandDark} alt="expand" className="more-ver"/>
                                    :
                                    <img onClick = {this.props.onClickReset} src={ExpandLight} alt="expand" className="more-ver"/>
                                }
                            </div>
    
                        </div>
                    </div>
                    <CardList 
                    add = {this.props.add} 
                    dark = {this.props.dark} 
                    title = {this.props.title}
                    body = {this.props.body}
                    onBodyChange = {this.props.onBodyChange}
                    onTitleChange = {this.props.onTitleChange}/>
                </main>
            </div>
        )
    }
}

export default Main;