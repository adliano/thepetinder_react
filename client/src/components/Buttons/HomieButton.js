import React from 'react'
import { Link } from 'react-router-dom'
import { HomeRounded } from '@material-ui/icons'
import { Button } from 'react-bootstrap'

export function HomieButton(){
    return(
        <>
        <Button className='mx-1 bg-dark btn-outline-secondary'>
        <Link className='text-light' to='/'><HomeRounded/></Link>
        </Button>
        </>
    )
}
