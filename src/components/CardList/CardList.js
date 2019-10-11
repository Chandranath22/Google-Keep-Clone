import React from 'react';
import Cards from '../Cards/Cards';

class CardList extends React.Component {

    newDivs = () => {
        let newItem = [];
        for(let i =0; i < this.props.add; i++) {
            newItem.push(<Cards dark = {this.props.dark} body = {this.props.body} title = {this.props.title} key = {i}/>);
        }
        return newItem;
    }

    render() {
        return (
            <div>
                {this.newDivs()}
            </div>
        )
    }
    
    
}

export default CardList;