import { Button, Table } from 'react-bootstrap';
import {useEffect, React, useState}  from 'react'

function PendingHospitals() {



    useEffect(() => {
        fetchData()
    })

    const [stateHospital, setHospitals] = useState([])
    function fetchData(){
        const requestBody = {
            query: `
            query 
            {
                getHospital
                {
                    _id
                  hospitalName
                  hospitalRegistrationNo
                  hospitalType
                  ownerName
                }
              }
            `
        };
    
    
    
        fetch('http://localhost:4000/graphql',{
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res=> {
            if(res.status !==200 && res.status !== 201) {
                throw new Error ('Failed');
            }
            return res.json();
        })
        .then(resData => {
            //console.log(resData);
            const fetchHospitals = resData.data.getHospital;
            setHospitals(fetchHospitals);
            //console.log(fetchHospitals)
        })
        .catch(err => {
            console.log(err);
        });
    }
    



    return (

        <div>
            <center><h2>All Pending Hospitals</h2></center>
        <hr></hr>
                        <Table bordered hover>
                          <thead>
                            <tr>
                              <th>Hospital Name</th>
                              <th>Registration No</th>
                              <th>Type</th>
                              <th>Owner Name</th>
                              <th>Show Details</th>
                              <th>Confirm</th>
                            </tr>
                          </thead>
                          <tbody>
                                  {
                                     stateHospital.map(hos => 
                                        <tr key={hos._id}>

                                             <td>{hos.hospitalName}</td>
                                             <td>{hos.hospitalRegistrationNo}</td>
                                             <td>{hos.hospitalType}</td>
                                             <td>{hos.ownerName}</td>
                                             <td><Button size="sm">Show Details</Button></td>
                                             <td><Button size="sm">Confirm</Button></td>
                                         </tr>  
                                     )
                                 }
                          </tbody>
                        </Table>







     
        </div> 
        


  
    )
}

export default PendingHospitals;