import React, { useState } from "react";
import './Portfolio.css'
import Window from "../Window/Window"; 

import img_1 from "../../images/poert1.png";
import img_2 from "../../images/port2.png";
import img_3 from "../../images/port3.png";
export default function Portfolio() {
    const [showwindow , setshowwindow]=useState(false);
    const [imgChoose , setimg]=useState(null);

    function ActiveWindow(img) {
        setimg(img)
        setshowwindow(true);
    }

    return (
        <div className="bg-four min-vh-100 mt-10  d-flex justify-content-center align-items-center ">
            <div className="container">
                <div className="">
                    <h1 className="text-uppercase mb-3 fw-bold text-main text-center">portfolio component</h1>
                    <div className=" d-flex justify-content-center align-items-center mb-3  ">
                        <div className="line bg-main"></div>
                        <i class="fa-solid fa-star mx-3 text-main"></i>
                        <div className="line bg-main"></div>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-4">
                        <div className="rounded-3 box position-relative">
                            <img src={img_1} alt="" className="w-100 rounded-3" />
                            <button onClick={()=>ActiveWindow(img_1)} className="hover-box position-absolute rounded-3 d-flex d-flex justify-content-center align-items-center">
                                <i class="fa-solid fa-plus  text-white fs-30"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="rounded-3 box position-relative">
                            <img src={img_2} alt="" className="w-100 rounded-3" />
                            <button onClick={()=>ActiveWindow(img_2)} className="hover-box position-absolute rounded-3 d-flex d-flex justify-content-center align-items-center">
                                <i class="fa-solid fa-plus  text-white fs-30"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="rounded-3 box position-relative">
                            <img src={img_3} alt="" className="w-100 rounded-3" />
                            <button onClick={()=>ActiveWindow(img_3)} className="hover-box position-absolute rounded-3 d-flex d-flex justify-content-center align-items-center">
                                <i class="fa-solid fa-plus  text-white fs-30"></i>
                            </button>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                    <div className="rounded-3 box position-relative">
                            <img src={img_1} alt="" className="w-100 rounded-3" />
                            <button onClick={()=>ActiveWindow(img_1)} className="hover-box position-absolute rounded-3 d-flex d-flex justify-content-center align-items-center">
                                <i class="fa-solid fa-plus  text-white fs-30"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                    <div className="rounded-3 box position-relative">
                            <img src={img_2} alt="" className="w-100 rounded-3" />
                            <button onClick={()=>ActiveWindow(img_2)} className="hover-box position-absolute rounded-3 d-flex d-flex justify-content-center align-items-center">
                                <i class="fa-solid fa-plus  text-white fs-30"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                    <div className="rounded-3 box position-relative">
                            <img src={img_3} alt="" className="w-100 rounded-3" />
                            <button onClick={()=>ActiveWindow(img_3)} className="hover-box position-absolute rounded-3 d-flex d-flex justify-content-center align-items-center">
                                <i class="fa-solid fa-plus  text-white fs-30"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </div >
            {showwindow&&
                <Window image={imgChoose} close={setshowwindow}></Window>
            
            }
        </div >

    );
}
