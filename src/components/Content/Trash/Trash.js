import React from 'react';
import CardList from '../../CardList/CardList';

const Trash = (props) => {
    return (
        <CardList
            list={props.list}
            ham = {props.ham}
            dark={props.dark}
        />
    )
}

export default Trash;