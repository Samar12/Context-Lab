import React, { Component } from 'react';
import ToDodata from './ToDoList/components/todoitem/todoItems';
import AddItem from './ToDoList/components/AddItem/AddItem'
import CompletedList from './ToDoList/components/Completed/list';
import DeletedList from './ToDoList/components/Deleted/list';



export const MyContext = React.createContext()

class App extends Component {
  state = {
    data: [],
  }

  getDeletedData=()=>{
    return this.state.data.filter(item => item.isDeleted)
  }
  getAllData=()=>{
    return this.state.data.filter(item => (!item.isCompleted && !item.isDeleted))
  }
  getCompletedData=()=>{
    return this.state.data.filter(item => (item.isCompleted && !item.isDeleted));
  }
  addTodo = (todo) => {
    
    const { data } = this.state;
    this.setState({ data: data.concat(todo) })
  }
  RedoItem = (id) => {
    let items = this.state.data.filter(item => {
      if (item.id === id) {
        item['isCompleted'] = false;
        return item;
      } else {
        return item;
      }
    }

    )
    this.setState({ data : items});

  }
  deleteItem = (id) => {
    const { data } = this.state;
    let items = data.filter(item => {
      if (item.id === id) {
        item['isDeleted'] = true;
        return item;
      } else {
        return item;
      }
    }

    )
    this.setState({ data: items });
  }
  doneItem = (id) => {
    let data = this.state.data.filter(item => {
      if (item.id === id) {
        item['isCompleted'] = true;
        return item;
      } else {
        return item;
      }
    }

    )
    this.setState({ data });

  }
  RestoreItem = (id) => {
    let data = this.state.data.filter(item => {
      if (item.id === id) {
        item['isDeleted'] = false;
        return item;
      } else {
        return item;
      }
    }

    )
    this.setState({ data });

  }

   
  render() {
    return (
      <MyContext.Provider value={{ state: this.state, addTodo: this.addTodo, deleteItem: this.deleteItem, doneItem: this.doneItem, RedoItem: this.RedoItem, getCompletedData: this.getCompletedData, restoreItem: this.RestoreItem, deletedData: this.DeletedData, getAllData:this.getAllData,getDeletedData:this.getDeletedData}}>

        <div className="App container">
          <div>
            <ToDodata />
            <AddItem />
          </div>
          <div className="Complete">
            <CompletedList/>
            <DeletedList />
          </div>


        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
