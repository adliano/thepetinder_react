import React from 'react'
import { Button } from 'react-bootstrap'

function LogoutButton () {
    /**
     * onLogoutClick()
     * @param { event} event 
     */
  const onLogoutClick = function (event) {
    fetch('/logout').then(response => console.log(response))
  }
  /**
   * 
   */
  return (
    <div>
      <Button className='mx-1' onClick={onLogoutClick}>
        logout
      </Button>
    </div>
  )
}

export default LogoutButton