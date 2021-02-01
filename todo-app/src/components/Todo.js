import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTodos } from '../actions/PostActions'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state ={
            title: props.todo.title,
            body: props.todo.body,
            IsTitleInEditMode: false,
            IsBodyInEditMode: false
        }
    }
    UpdateTitleEditMode = (value) => {
        this.setState({
            IsTitleInEditMode: value
        })
    }
    UpdateBodyEditMode = (value) => {
        this.setState({
            IsBodyInEditMode: value
        })
    }
    handleChangeTitle=(e)=>{
        this.setState({
            title: e.target.value
        })
    }
    handleChangeBody=(e)=>{
        this.setState({
            body: e.target.value
        })
    }
    UpdateTodo=(title, body)=>{
        console.log(this.props.todo)
        const {id}=this.props.todo
        const todoIndex=this.props.todos.findIndex(todo=>todo.id===id)
        let newTodos = [...this.props.todos]
        newTodos[todoIndex]={id, title, body}
        this.props.updateTodos(newTodos)
    }
    updateTitle=(e)=>{
        if (e.key === 'Enter') {
            this.UpdateTodo(this.state.title,this.props.todo.body)
            this.UpdateTitleEditMode(false)
        }
    }
    updateBody=(e)=>{
        if (e.key ==='Enter') {
           this.UpdateTodo(this.props.todo.title, this.state.body)
           this.UpdateBodyEditMode(false)
       }
    }
    deleteTodo=()=>{
        let todos= this.props.todos.filter(todo=>todo.id!==this.props.todo.id)
        this.setState({
            todos:todos
        })
        this.props.updateTodos(todos)
    }
    render() {
        const { id } = this.props.todo
        const { title, body } = this.state
        return (
            <div className="todo-card" key={id}>
                <div className="card-content" >
                    {
                        (this.state.IsTitleInEditMode) ?
                            <input type="text" value={title} onKeyDown={this.updateTitle} onChange={this.handleChangeTitle}/>
                            :
                            <span onDoubleClick={() => this.UpdateTitleEditMode(true)}>{title}</span>
                    }

                    {
                        (this.state.IsBodyInEditMode) ?
                            <textarea value={body} onKeyDown={this.updateBody} onChange={this.handleChangeBody} />
                            :
                            <p onDoubleClick={() => this.UpdateBodyEditMode(true)}>{body}</p>
                    }
                    
                    <div><button onClick={this.deleteTodo}>Delete</button></div>
                </div>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Todo)