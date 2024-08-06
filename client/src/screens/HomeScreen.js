// import React, {useState, useEffect} from 'react';
// import axios from 'axios';

// function HomeScreen(){

//     const[rooms, setRooms] = useEffect([]);
//     useEffect(() =>{

//     try{
//         const data = (axios.get('/api/rooms/getallrooms')).data

//         setRooms(data)

//         console.log(data)
//     }catch(error){
//         console.log(error)
//     }
// },[])

//     return(
//         <div>
//             <h1>Home Screen</h1>
//             <h1>there are {rooms.length}</h1>
//         </div>
//     )
// }

// export default HomeScreen


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Room from '../components/Room'

function HomeScreen() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axios.get('/api/rooms/getallrooms').data
                setRooms(response.data);
                setLoading(false

                )
            } catch (error) {
                setError(true)
                setLoading(false)
            }
        };

        fetchRooms(); // Call the async function
    }, []); // Empty dependency array means this effect runs once on component mount

    return (
        <div className='container'>
            <div className='row justify-content-center mt-5'>
                {loading ? (<h1>Loading...!</h1>) : error ? (<h1>Error</h1>) : (rooms.map(room => {
                    return <div className='col-md-9 mt-2'>
                        <Room room={room} />
                    </div>;
                })
                )}
            </div>

        </div>
    );
}

export default HomeScreen;
