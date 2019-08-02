import React from 'react'
import { Link } from 'react-router-dom'
import { AccountCircle } from '@material-ui/icons'

export function LoginButton(){
    return(
        <>
        <Link to='/ShelterLogin'><AccountCircle/></Link>
        </>
    )
}
