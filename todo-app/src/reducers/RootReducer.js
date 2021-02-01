
const initState={
    todos:[{id:"1", title:"my title", body:"my body"}]    
  }
  
  const RootReducer=(state=initState, action)=>{
    switch(action.type){
      case "UPDATE_LIST":
        return {
          ...state,
          todos: action.todos
        }
    default:
     return state
   }
  }
  export default RootReducer;