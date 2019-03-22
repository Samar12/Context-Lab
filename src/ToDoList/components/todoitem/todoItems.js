import React from 'react';
import { MyContext } from './../../../App'


class ToDodata extends React.Component {

    render() {

        return (
            <MyContext.Consumer>
                {value => (
                    
                    <>
                    <div className="ListItems">
                        <span className="name title">Task Name</span>
                        <span className="action title">Delete</span>
                        <span className="action title">Complete</span>
                        {
                            value.getAllData().map(item => {
                                return (
                                    <div key={item.id}>
                                        <span className="name ">{item.name}</span>
                                        <span className="action icon" onClick={() => value.deleteItem(item.id)}>&times;</span>
                                        <span className="action icon" onClick={() => value.doneItem(item.id)}>&radic;</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    </>

                )}
            </MyContext.Consumer>


        )
    }
}


ToDodata.contextType = MyContext;
export default ToDodata;
