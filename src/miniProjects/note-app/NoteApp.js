import React, { Component } from 'react'
import Note from './Note'
import ColorBox from './ColorBox'
import './NoteApp.css';

export default class NoteApp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            colors: [
                "#333",
                "#ffb121",
                "#1a9c00",
                "#0023ff",
                "#782400",
                "#ff0000"
            ],
            notes: [],
            noteTitle: '',
            inputColor: '#333'
        }

        this.cleanNote = this.cleanNote.bind(this)
    }

    componentDidMount() {
        console.log('پدر')
    }

    inputColorHandler(colorCode) {
        this.setState({ inputColor: colorCode })
    }
    inputChangeHandler(event) {
        this.setState({ noteTitle: event.target.value })
    }
    addNoteToList() {
        let newNote = {
            title: this.state.noteTitle,
            bgColor: this.state.inputColor,
            id: this.state.notes.length + 1
        }
        this.setState(prevState => {
            return { notes: [...prevState.notes, newNote] }
        })
        this.setState({ noteTitle: '', inputColor: '#333' })
    }
    noteRemoverFunc(id) {
        let updatedList = this.state.notes.filter(note => note.id !== id)
        this.setState({ notes: updatedList })
    }
    cleanNote() {
        this.setState({ noteTitle: '' });
    }

    render() {
        return (
            <>
                <div>
                    <section id="home">
                        <div className="container">
                            <div className="header upper">FARAZ Note App</div>

                            <br /><br />
                            <div className="flex row-gt-sm">
                                <div className="flex flex-50-gt-sm">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <input autoComplete='false' id="input-field" className="form-control" type="text" style={{ backgroundColor: this.state.inputColor }} placeholder="Something here..." value={this.state.noteTitle} onChange={(event) => this.inputChangeHandler(event)} />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <div id='color-select'>
                                            {this.state.colors.map(color => <ColorBox boxColor={color} key={color} onBtnClick={this.inputColorHandler.bind(this)} />)}
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 text-right">
                                        <button id="btn-save" type="button" className="btn btn-outline-info" onClick={() => this.addNoteToList()}><span className="fa fa-plus" ></span></button>
                                        <button id="btn-delete" type="button" className="btn btn-outline-danger"><span id="btn-icon"
                                            className="fa fa-eraser" onClick={this.cleanNote}></span></button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex row-gt-sm">

                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="container">
                                        <div className="row">
                                            <div id='listed' className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 p-3 card-columns">

                                                {this.state.notes.map(note =>
                                                    <Note key={note.id} {...note} onRemoveHandler={(id) => this.noteRemoverFunc(id)} />
                                                )}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}
