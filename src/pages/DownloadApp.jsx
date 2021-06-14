import React from "react";
import banner from "../assets/banner 2.png";
import gplay from "../assets/6631945_preview 2.svg";
import vectorplayst from "../assets/6631945_preview 2.svg";
import Wave from "../assets/Vector 4.svg";

const DownloadApp = () => {
    return (
        <>
            <div className="container-fluid down ">
                {/* <img src={Wave} className='top'></img> */}
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6 downcont">
                        <h1>
                            Download the APP now
                        </h1>
                        <div className="circle">
                            <h2>
                                Download
                            </h2>
                            <img src={gplay} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default DownloadApp