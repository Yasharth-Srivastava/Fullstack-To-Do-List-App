/* eslint-disable react/prop-types */

/* eslint-disable react/no-unescaped-entities */

import { useState } from "react"


function Modal(props) {
    const mode = props.mode
    const editMode = mode === "edit" ? true : false

    const [data , setData] = useState({
      user_email: editMode ? props.task.user_email : "yasharth@test.com",
      title: editMode ? props.task.title : '',
      progress: editMode ? props.task.progress : 50,
      date: editMode ? props.task.date : new Date()
    })

    const postData = async(e) => {
      e.preventDefault()
      try{
        const response = await fetch('http://localhost:8000/todos',{
          method : 'POST',
          headers : { 'Content-Type' : 'application/json' },
          body : JSON.stringify(data)
        })
        if(response.status === 200){
          console.log("WORKED")
          props.setShowModel(false)
          props.getData()
        }
      }catch(err){
        console.error(err)
      }
    }

    const editData = async(e) => {
      e.preventDefault()
      try{
        const response = await fetch(`http://localhost:8000/todos/${props.task.id}`,{
          method : 'PUT',
          headers : { 'Content-Type' : 'application/json' },
          body : JSON.stringify(data)
        })
        if(response.status === 200){
          props.setShowModel(false)
          props.getData()
        }
      }catch(err){
        console.error(err)
      }
    }

    const handleChange = (e) => {
      e.preventDefault()
      const {name , value} = e.target

      setData(data => ({
        ...data,
        [name] : value
      }))

      console.log(data)
    }

    return (
      <div className="overlay">
        <div className="modal">
          <div className="form-title-container">
            <h3>Let's {mode} your task</h3>
            <button onClick={ () => props.setShowModel(false)}>X</button>
          </div>
          <form>
            <input
              required
              maxLength={30}
              placeholder="Your task goes here"
              name="title"
              value={data.title}
              onChange={handleChange}
            />
            <br />
            <label htmlFor= "range">Select your current progress state</label>
            <input 
              required
              type="range"
              id="range"
              min="0"
              max="100"
              name="progress"
              value={data.progress}
              onChange={handleChange}
            />
            <input className = {mode} type="submit" onClick={ editMode ? editData : postData} />
          </form>
        </div>
      </div>
    )
  }
  
  export default Modal