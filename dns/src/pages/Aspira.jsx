import React from 'react'
import {Form} from "react-router-dom";
import { createUser } from '../../api';
import '../App.css'

const MAX_FILE_SIZE = 5 * 1024 * 1024;
export async function action({ request }) {
    const formData = await request.formData()
    const phoneNumber = formData.get('phone')
    const email = formData.get('email')
    const productId = formData.get('pid')
    const productName = formData.get('pname')
    const nationalId = formData.get('nationalId')
    const nationalIdPhoto = formData.get('idphoto')
    const mpesa = formData.get('mpesa')
    console.log(mpesa)
    let data;
    if (nationalId && phoneNumber && nationalIdPhoto !== '' && nationalIdPhoto.size !== 0 || mpesa.size !== 0)
        data = await createUser({ email, phoneNumber,productId, productName, nationalId, nationalIdPhoto, mpesa})
    else if(mpesa.size > MAX_FILE_SIZE) {
        alert("File size exceeds the limit.")
    } else
        alert("Please enter all details")
    return null
  }

export default function Aspira() {
  return (
    <div className='form-container'>
    <h1>Please fill in the form</h1>
    <Form encType="multipart/form-data" method="POST">
        <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="text" className="form-control" id="phone" name='phone' required />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email'/>
        </div>
        <div className="mb-3">
            <label htmlFor="pid" className="form-label">Product ID</label>
            <input type="text" className="form-control" id="pid" name='pid'/>
        </div>
        <div className="mb-3">
            <label htmlFor="pname" className="form-label">Product Name</label>
            <input type="pname" className="form-control" id="pname" name='pname'/>
        </div>
        <div className="mb-3">
            <label htmlFor="nationalId" className="form-label">National ID</label>
            <input type="number" className="form-control" id="nationalId" name='nationalId' required/>
        </div>
        <div className="mb-3">
            <label htmlFor="idphoto" className="form-label">National id photo</label>
            <input type="file" accept='.jpg, .jpeg, .png' className="form-control" id="idphoto" name='idphoto' required/>
        </div>
        <div className="mb-3">
            <label htmlFor="mpesa" className="form-label">Upload mpesa statement for the last 6 months</label>
            <input type='file' name='mpesa' accept=".pdf" className='form-control' required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
</Form>
    </div>
  )
}
