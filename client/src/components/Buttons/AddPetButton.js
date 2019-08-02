import React from 'react'
import { Link } from 'react-router-dom'
import { CloudUploadRounded } from '@material-ui/icons'
import { Button } from 'react-bootstrap'

export function AddPetButton(){
    return(
        <>
        <Button className='mx-1 bg-dark btn-outline-secondary'>
        <Link className='text-light' to='/AddPet'><CloudUploadRounded/></Link>
        </Button>
        </>
    )
}
