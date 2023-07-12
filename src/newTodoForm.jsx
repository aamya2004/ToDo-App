import { useState } from "react"
export function NewTodoForm(props){
    props.onSubmit
    const [newItem , setNewItem ] = useState("");

    function handleSubmit(e){
        e.preventDefault() //preventing page from refreshing on clicking submit
        
        if(newItem === "") return;
        props.onSubmit(newItem)
        setNewItem("")
      }


    return(
    <form onSubmit = {handleSubmit} className="new-form-item">
      <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" 
      value = {newItem} 
      onChange={e=>setNewItem(e.target.value)}
      id="item" />
      </div>
      <button className="btn">Add</button>
      </form>
    )
}
