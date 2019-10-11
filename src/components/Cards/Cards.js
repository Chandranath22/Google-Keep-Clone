import React from 'react';
import ExpandDark from '../../assets/img/Main/more_vert/1x/more_vert.png';
import ExpandLight from '../../assets/img/Main/more_vert-white/1x/more_vert.png';
import './css/cards.css';

class Cards extends React.Component {

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
                            <img onClick = {this.props.onClickReset} src={ExpandDark} alt="expand" className="more-ver"/>
                            :
                            <img onClick = {this.props.onClickReset} src={ExpandLight} alt="expand" className="more-ver"/>
                        }
                    </div>
                </div>
                
            </div>
        )
    }
    
}

export default Cards;