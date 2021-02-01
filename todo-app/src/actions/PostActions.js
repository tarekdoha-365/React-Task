export const updateTodos = (todos)=>{
    return { 
          type:'UPDATE_LIST',
          todos: todos
    };
}