import React from 'react';
import CardList from '../../CardList/CardList';
import './css/Archive.css';



class Archive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: false,
            close: false,
            title: false
        }

    }

    onClickTitle = () => {
        if (!this.state.note) {
            this.setState({ note: true });
            this.setState({ close: true });
            this.setState({ title: true });
        }
    }

    onClickClose = () => {
        if (this.state.close) {
            this.setState({ close: false });
            this.setState({ note: false });
            this.setState({ title: false });
        }
    }



    render() {
        return (
            <div>
                <main>
                    <CardList
                        add={this.props.add}
                        list={this.props.list}
                        ham = {this.props.ham}
                        dark={this.props.dark}
                        title={this.props.title}
                        body={this.props.body}
                        onDelete={this.props.onDelete}
                        onBodyChange={this.props.onBodyChange}
                        onTitleChange={this.props.onTitleChange} 
                    />
                </main>
            </div>
        );
    }
}

export default Archive;