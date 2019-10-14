import React from 'react';
import ExpandDark from '../../assets/img/Main/more_vert/1x/more_vert.png';
import ExpandLight from '../../assets/img/Main/more_vert-white/1x/more_vert.png';
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
    }


    render () {
        return (
            <div>
                <div className={!this.props.dark ? "cards-light" : "cards-dark"}>
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
                        {
                            !this.props.dark
                            ?
                            <img onClick = {this.onClickOption} src={ExpandDark} alt="expand" className="more-ver"/>
                            :
                            <img onClick = {this.onClickOption} src={ExpandLight} alt="expand" className="more-ver"/>
                        }

                        <ul className={ !this.state.option ? "options" : "options vis"}>
                            <li onClick = {this.props.onDelete} className="op-list">Delete</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        )
    }
    
}

export default Cards;