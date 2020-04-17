import React from 'react';
import Cards from '../Cards/Cards';

class CardList extends React.Component {

    newDivs = (item) => {
        return (
            <Cards
                ham = {this.props.ham}
                dark = {this.props.dark}
                id = {item.id}
                title = {item.title}
                body = {item.body}
                onDelete = {this.props.onDelete} 
                key = {item.id}
            />
        );
    }

    render() {
        return (
            <div>
                {this.props.list.map((item) => this.newDivs(item))}
            </div>
        )
    }
    
    
}

export default CardList;