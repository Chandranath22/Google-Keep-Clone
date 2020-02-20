import React from 'react';

import './css/cards.css';

class Cards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            option: false
        }
    }

    inputValueTitle = () => {
        let len = this.props.title.length;
        if(len > 0) {
            let titleValue = [];
            titleValue.push(this.props.title);
            return titleValue[titleValue.length-1];
        }
    }

    inputValueBody = () => {
        let len = this.props.body.length;
        if(len > 0) {
            let bodyValue = [];
            bodyValue.push(this.props.body);
            return bodyValue[bodyValue.length-1];
        }
    }

    onClickOption = () => {
        this.setState({option: !this.state.option});
        console.log(this.props.key);
    }


    render () {
        return (
            <div>
                <main>
                    <div 
                        className={
                            !this.props.dark 
                                ? !this.props.ham ? "cards light" : "cards light side" 
                                : !this.props.ham ? "cards dark" : "cards dark side"
                            }
                    >
                        <div className="card-box">
                            <input 
                            type="text" 
                            className="card-title" 
                            placeholder="Title"
                            defaultValue = {this.inputValueTitle()}/>
                        </div>
                        <div className="details">
                            <textarea 
                            type="text" 
                            className="card-details" 
                            placeholder="Take a note" 
                            defaultValue = {this.inputValueBody()} />
                        </div>
                        <div className="more-options">
                            <i onClick = {this.onClickOption} className = "material-icons more-ver">more_vert</i>
                            <ul className={ !this.state.option ? "options" : "options vis"}>
                                <li onClick = {this.props.onDelete} className="op-list">Delete note</li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
            
        )
    }
    
}

export default Cards;