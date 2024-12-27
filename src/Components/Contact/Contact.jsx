import React from 'react'
import "./Contact.css"
export default function Contact() {
    return (
        <div className="bg-four min-vh-100   d-flex justify-content-center align-items-center ">
            <div className="container ">
                <div className="">
                    <h1 className="text-uppercase mb-3 fw-bold text-main text-center">conatct section</h1>
                    <div className=" d-flex justify-content-center align-items-center mb-3  ">
                        <div className="line bg-main"></div>
                        <i class="fa-solid fa-star mx-3 text-main"></i>
                        <div className="line bg-main"></div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center flex-column mt-5">
                    <div className="col-md-7">
                        <div className=" d-flex justify-content-center align-items-center flex-column gap-5">
                            <input type="text" className='shadow-sm w-100 p-2 rounded-2' placeholder='User Name' />
                            <input type="text" className='shadow-sm w-100 p-2 rounded-2' placeholder='User Age' />
                            <input type="email" className='shadow-sm w-100 p-2 rounded-2' placeholder='User Email' />
                            <input type="password" className='shadow-sm w-100 p-2 rounded-2' placeholder='User Password' />
                        </div>
                            <button className='p-2 btn-contact rounded-2 text-white mt-4'>Send Message</button>
                    </div>
                </div>

            </div >
        </div >

    )
}
