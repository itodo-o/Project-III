import React from 'react'
import axios from 'axios'
import {useEffect} from 'react'
import {useState} from 'react'

function Employee(selectedEmployee){

    const [selectedEmployeeInfo, setSelectedEmployeeInfo] = useState (null); 

    useEffect(() => {
        axios.get(`http://statenweb.mockable.io/employee/${selectedEmployee}`).then((a) => setSelectedEmployeeInfo(a.data));
    },  [selectedEmployee])





  const{
        name,
        startDate,
        role,
        department,
        photo
    } = selectedEmployeeInfo

    if(!selectedEmployeeInfo){
        return <p>Loading</p>; 
    }


    return(
        <div>
            <img style={{maxHeight:'300px'}} src={photo}></img>
            <p>{name}</p>
            <p>{department} - {role}</p>
            <p>{startDate}</p>
        </div>
       
    )
}

export default Employee; 