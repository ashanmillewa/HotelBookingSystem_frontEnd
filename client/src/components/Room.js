import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Room({ room }) {

    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="row bs">
            <div className="col-md-4">
                <img src={room.imageurls[0]} className="smallimg" />
            </div>
            <div className="col-md-7">
                <h1>{room.name}</h1>
                <b>
                    <p> Max Count :{room.maxcount}</p>
                    <p> Phone Number :{room.phonenumer}</p>
                    <p> Type :{room.type}</p>
                </b>

                <div style={{ float: 'right' }}>
                    <Link>
                        <buttons className='btn btn-primary'>Book Now</buttons>
                    </Link>
                    <buttons className="btn btn-primary" onClick={handleShow}>View Details</buttons>
                </div>

            </div>
        </div>
    )
}

export default Room