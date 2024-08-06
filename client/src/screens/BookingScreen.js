import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookingScreen({ match }) {

    const [loading, setLoading] = useState([]);
    const [error, setError] = useState([]);
    const [room, setRoom] = useEffect([]);

    useEffect(async () => {

        try {
            setLoading(true);
            const data = (await axios.get('/api/rooms/getroombyid', { roomid: match.params.roomid })).data;
            console.log(data)
            setRoom(data);
            setLoading(false);

        } catch (error) {
            setError(true);
            setLoading(false);
        }
    }, [])

    return (
        <div className='m-5'>

            {loading ? (<h1>Loading...!</h1>) : error ? (<h1>Error...</h1>) : (<div>
                <div className='row justify-content-center mt-6 bs'>

                    <div className='col-md-5'>
                        <h1>{room.name}</h1>
                        <img src={room.imageurls[0]} className='bigimg' />
                    </div>

                    <div className='col-md-6'>

                        <div  style={{textAlign:'right'}}>
                            <h1>Booking Details</h1>
                            <hr />

                            <b>
                                <p>Name :</p>
                                <p>From Date :</p>
                                <p>To Date :</p>
                                <p>Max Count : {room.maxcount}</p>
                            </b>

                            <div  style={{textAlign:'right'}}>                                     
                                <b>
                                    <h1>Amount</h1>                                                                                                                                                        
                                    <hr />
                                    <p>Total Days :</p>
                                    <p>Rent Per Day :</p>
                                    <p>Total Amount</p>
                                </b>
                            </div>

                            <div style={{float:'right'}}>
                                <button className='btn btn-primary'>Pay Now</button>
                            </div>



                        </div>
                    </div>

                </div>
            </div>
            )}

        </div>
    )
}

export default BookingScreen

