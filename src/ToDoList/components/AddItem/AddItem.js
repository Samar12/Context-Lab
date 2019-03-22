import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import {MyContext} from './../../../App'

class AddItem extends Component {
    
    constructor(props)
    {
        super(props);
        this.inputRef=React.createRef();
    }

    handleSubmit = (addTodo) => (e) => {
        e.preventDefault();
        console.log(this);
        if (this.inputRef.current.value === '') return;
        addTodo({ id: uuidv4(), name: this.inputRef.current.value, isCompleted: false, isDeleted: false });
        this.inputRef.current.value = '';
    }

    render() {
        return (
            <MyContext.Consumer>
                {value => (
                    <>
                    <div>
                        <form onSubmit={this.handleSubmit(value.addTodo)}>
                            <input ref={this.inputRef} type="text" id="name" placeholder="Enter Task ..." />
                            <input className="add" type="submit" value="ADD" />

                        </form>
                    </div>
                    </>

                )}
            </MyContext.Consumer>

        )
    }

}

export default AddItem;
