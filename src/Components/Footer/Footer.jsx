import React from 'react'
import "./Footer.css"
export default function Footer() {
    return (
        <div>
            <div className="bg-main text-white  ">
                <div className="container p-5   ">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="text-center ">
                                <p className='fs-3 m-0'>LOCATION</p>
                                <p className='m-0'>2215 John Daniel Drive</p>
                                <p className='m-2'>Clark, MO 65243</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <p className='text-center fs-3 '>AROUND THE WEB</p>
                            <div className="d-flex justify-content-center align-items-center gap-3 ">
                                <div className=" rounded-circle circle d-flex justify-content-center align-items-center">
                                    <i class="fa-brands fa-facebook"></i>
                                </div>
                                <div className=" rounded-circle circle d-flex justify-content-center align-items-center">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </div>
                                <div className=" rounded-circle circle d-flex justify-content-center align-items-center">
                                    <i class="fa-brands fa-twitter"></i>
                                </div>
                                <div className=" rounded-circle circle d-flex justify-content-center align-items-center">
                                    <i class="fa-solid fa-globe"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="text-center ">
                                <p className='fs-3'>ABOUT FREELANCER</p>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3 bg-third   ">
                    <p>Copyright © Your Website 2021</p>
                </div>
            </div>
        </div>
    )
}
