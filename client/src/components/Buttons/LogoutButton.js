import React from 'react'
import { Button } from 'react-bootstrap'
import { ExitToAppRounded } from '@material-ui/icons'


export function LogoutButton () {
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
      <Button className='mx-1 bg-dark btn-outline-secondary text-light' onClick={onLogoutClick}>
        <ExitToAppRounded/>
      </Button>
    </div>
  )
}
