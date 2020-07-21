import React, { useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const Home = (props) => {
    // const [record,setRecord] = useEffect([]);
    // useEffect(() => {
    //     axios.post('http://localhost:5000/api/info',{
    //         headers: {
    //             'auth': `${JSON.parse(localStorage.getItem('auth'))}`
    //         }
    //     }).then(res => {
    //         setRecord(res.data);
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // },[]);

    return (
        <div className="title">
            <h2>Home</h2>
            {/* <p>{JSON.stringify(record)}</p>
            <button className="btn btn-primary" onClick = {() => {localStorage.clear();props.history.push("/login")}}>Logout</button> */}
        </div>
    );
}

export default Home;