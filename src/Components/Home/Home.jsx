import React from "react";
import "./Home.css"
import aa from "../../images/avataaars.svg"; // Correct import for an image
export default function Home() {
    return <>
        <div className="bg-second vh-100 d-flex justify-content-center align-items-center ">
            <div className="row  ">
                <div className="col">
                    <div className="d-flex justify-content-center align-items-center flex-column text-white  ">
                        <img src={aa} alt="" className=" w-75 mb-3" />   
                        <div className="">
                            <h1 className="text-uppercase mb-3 fw-bold">start Framework</h1>
                            <div className=" d-flex justify-content-center align-items-center mb-3  ">
                                <div className="line bg-white"></div>
                                <i class="fa-solid fa-star mx-3"></i>
                                <div className="line bg-white"></div>
                            </div>
                            <p className="text-center ">Graphic Artist - Web Designer - Illustrator</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>;
}
