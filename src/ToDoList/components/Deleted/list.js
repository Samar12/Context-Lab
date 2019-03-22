import React from 'react';
import { MyContext } from './../../../App'


class DeletedList extends React.PureComponent {

    render() {
        return (
            <MyContext.Consumer>
                {value => (

                    <>
                        <div className="completedList">
                            <span className="name title">Deleted</span>
                            <span className="action title">Restore</span>
                            {
                                value.getDeletedData().map(item => {
                                return (
                                    <div key={item.id}>
                                        <span className="name ">{item.name}</span>
                                        <span className="action icon" onClick={() => value.restoreItem(item.id)}>&radic;</span>
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


export default DeletedList;

