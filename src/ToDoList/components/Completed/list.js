import React from 'react';
import { MyContext } from './../../../App'

class CompletedList extends React.PureComponent {
    render() {

        return (
            <MyContext.Consumer>
                {value => (

                    <>
                        <div className="completedList">
                            <span className="name title">Complete</span>
                            <span className="action2 title">Redo</span>
                            <span className="action2 title">Delete</span>
                            {

                                value.getCompletedData().map(item => {
                                    return (
                                        <div key={item.id}>
                                            <span className="name ">{item.name}</span>
                                            <span className="action2 icon" data-id={item.id} onClick={() => value.RedoItem(item.id)}>&radic;</span>
                                            <span className="action2 icon" onClick={() => value.deleteItem(item.id)}>&times;</span>

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

export default CompletedList;

