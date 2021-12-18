import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import Employee from './Employee'; 
import {useEffect} from 'react'



function Employees(){

    const [employeeInfo,setEmployeeInfo] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(); 

    // useEffect(getEmployees, []);


    function getEmployees(){
        axios.get('https://statenweb.mockable.io/employees').then(function(access){
            setEmployeeInfo(access.data); 
        })
    }

    function getEmployeeById(id){
        setSelectedEmployee(id)
    };


    
    if(selectedEmployee){
        return(
            <div>
    
                <Employee selectedEmployee={selectedEmployee}/>
                <button onClick={()=> setSelectedEmployee(null)}>Reset</button>

            </div>
        )
    }


    return (
        <div>
            <button onClick = {getEmployees}>Meet the Team</button>
            
        {
            employeeInfo.map((employee)=>
            <p key = {employee.id}>
                <button onClick={() =>
                getEmployeeById(employee.id)}>
                    {employee.name} - {employee.department}
                </button>
            </p>
            )
        }
               

         </div>
        
    )
   
}
export default Employees; 
