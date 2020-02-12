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
                    <div className={!this.props.dark ? !this.props.ham ? "input-area-light" : "input-area-light side" : !this.props.ham ? "input-area-dark" : "input-area-dark side"}>
                        <div onClick={this.onClickTitle} className={!this.props.ham ? "invisible-box" : "invisible-box"}>
                            <input type="text" className={!this.state.title ? "box" : "box box-v"} placeholder="Take a note" />
                        </div>

                        <div className="title-box">
                            <input type="text" className={!this.state.note ? "title" : "title title-v"} onChange={this.props.onTitleChange} placeholder="Title" />
                        </div>

                        <div className="note">
                            <textarea className={!this.state.note ? "label" : "label expand"} onChange={this.props.onBodyChange} placeholder="Take a note..." />
                        </div>

                        <div className={!this.state.close ? "btn" : "btn v"}>
                            <div onClick={this.props.onAdd} className="add">
                                Add
                            </div>

                            <div onClick={this.onClickClose} className="close">
                                Close
                            </div>

                            <div className="more">
                                <i onClick={this.props.onClickReset} className = "material-icons ">more_vert</i>
                            </div>

                        </div>
                    </div>
                    <CardList
                        add={this.props.add}
                        ham = {this.props.ham}
                        dark={this.props.dark}
                        title={this.props.title}
                        body={this.props.body}
                        onDelete={this.props.onDelete}
                        onBodyChange={this.props.onBodyChange}
                        onTitleChange={this.props.onTitleChange} />
                </main>
            </div>
        );
    }
}

export default Archive;