import React from 'react'
import "./About.css"

export default function About() {
    return (
        <div className="bg-second h700px   d-flex justify-content-center align-items-center ">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="d-flex justify-content-center align-items-center flex-column text-white  ">
                            <div className=" text-center  ">
                                <h1 className="text-uppercase mb-3 fw-bold">about component</h1>
                                <div className=" d-flex justify-content-center align-items-center mb-3  ">
                                    <div className="line bg-white"></div>
                                    <i class="fa-solid fa-star mx-3 "></i>
                                    <div className="line bg-white"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-white d-flex   justify-content-center  align-items-center ">
                    <div className="col-md-6">
                        <div className="d-flex justify-justify-content-center align-items-center ">
                            <div className="">
                                <p className="text-start ms-md-5    ">Freelancer is a free bootstrap theme created by Route. The download includes the complete
                                    source files including HTML, CSS,
                                    and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="d-flex justify-justify-content-center align-items-center ">
                            <div className="">
                                <p className="text-start   ">
                                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source
                                    files including HTML, CSS, and JavaScript as well as optional
                                    SASS stylesheets for easy customization.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}
