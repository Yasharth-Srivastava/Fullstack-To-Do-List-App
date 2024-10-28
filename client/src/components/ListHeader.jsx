/* eslint-disable react/prop-types */
import { useState } from 'react'
import Modal from './Modal'

function ListHeader( {listname , getData} ) {

    const [showModel , setShowModel] = useState(false)

    const signOut = () => {
        console.log("Sign Out")
    }

    return (
      <div className="list-header">
        <h1>{listname}</h1>
        <div className="button-container">
            <button className="create" onClick={ () => {setShowModel(true)} }>ADD NEW</button>
            <button className="signout" onClick = {signOut} >SIGN OUT</button>
        </div>
        {showModel && <Modal mode = {'create'} setShowModel = {setShowModel} getData = {getData}/>}
      </div>
    )
  }
  
  export default ListHeader