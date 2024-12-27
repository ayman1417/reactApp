import React from 'react'
import "./Window.css"
import img_1 from "../../images/poert1.png";

export default function Window({ image , close }) {
    return (
        <button onClick={()=>close(false)}  className="back position-absolute w-100  h-100  d-flex justify-content-center align-items-center  ">

            {/* <!-- Modal --> */}
            <div
                className="modal fade show d-block"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="false"
            >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="w-100">
                        <img src={image} alt="" className='w-100 rounded-2' />
                    </div>
                </div>
            </div>
        </button>
    )
}
