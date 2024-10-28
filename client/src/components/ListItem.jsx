/* eslint-disable react/prop-types */
import TickIcon from './TickIcon'
import ProgressBar from './ProgressBar'
import { useState } from 'react'
import Modal from './Modal'

function ListItem(props) {
    const deleteItem = async() => {
      try{
        const response = await fetch(`http://localhost:8000/todos/${props.task.id}`,{
          method : "DELETE"
        })
        if(response.status === 200){
          props.getData()
        }
      }catch(err){
        console.error(err)
      }
    }  

    const [showModel , setShowModel] = useState(false)

    return (
      <li className="list-item">
        <div className="info-container">
          <TickIcon />
          <p className="task-title">{props.task.title}</p>
          <ProgressBar />
        </div>
        <div className="button-container">
          <button className="edit" onClick = { () => setShowModel(true)}>EDIT</button>
          <button className="delete" onClick = { deleteItem }>DELETE</button>
        </div>
        {showModel && <Modal mode ={'edit'} setShowModel = {setShowModel} getData = {props.getData} task = {props.task}/>}
      </li>
    )
  }
  
export default ListItem