import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
import { updateTodos } from '../actions/PostActions'
class TodoList extends Component {
    constructor(props){
        super(props)
        this.state={
            newTodoTitle:"",
            newTodoBody:""
        }
    }
    AddTodo=()=>{
        const id=this.props.todos.length + 1;
        const {newTodoTitle, newTodoBody}=this.state;
        const todo={id:id, title:newTodoTitle, body:newTodoBody}
        let todos=[...this.props.todos, todo]
        this.props.updateTodos(todos)
        this.setState({
            newTodoTitle:"",
            newTodoBody:""
        })
    }
    handleChangeTitle=(e)=>{
        this.setState({
            newTodoTitle:e.target.value
        })
    }
    handleChangeBody=(e)=>{
        this.setState({
            newTodoBody:e.target.value
        })
    }
    render() {
      const {newTodoTitle,newTodoBody}=this.state
      console.log(this.props.todos)
        return (
            <React.Fragment>
            {this.props.todos.map( todo=><Todo todo={todo} key={todo.id}/>)}
               <div>
                   <label>Title<input type="text" value={newTodoTitle} onChange={this.handleChangeTitle}/></label>
                   <label>Body<textarea value={newTodoBody} onChange={this.handleChangeBody}/></label>
                    <button onClick={this.AddTodo}>Add</button>
               </div>
           </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateTodos: (todos) => dispatch(updateTodos(todos))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)