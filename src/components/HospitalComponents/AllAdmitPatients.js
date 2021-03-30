import React, {useState, useEffect} from 'react'
import { Button, Table, Modal} from 'react-bootstrap';

 function AllAdmitPatients() {

    const [allAdmitPatients, setAllAdmitPatients] = useState([]);


    useEffect(()=>{
        fetchAdmitPatients()
    },[])

    function fetchAdmitPatients(){
      const requestAdmitPatientsBody = {
          query: `
          query 
          {
            getAllAdmitPatient(hospitalId:"6040fbcbcae7d553dd4199fe"){
                    _id
                    fname
                    lname
                    aadharNo
                    contactNo
                    email
                    dob
                    gender
                    marital
                    disease
                    age
                    address
                    state
                    district
                    city
                    pincode
                    ward
                    bedtype
                }
            }
          `
      };
  
  

      fetch('http://localhost:4000/graphql',{
          method: 'POST',
          body: JSON.stringify(requestAdmitPatientsBody),
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
          const fetchAdmitPatients = resData.data.getAllAdmitPatient;
          setAllAdmitPatients(fetchAdmitPatients);
      })
      .catch(err => {
          console.log(err);
      })
  }

  console.log("all patients", allAdmitPatients);
    return (
        <div>
           <Table bordered hover>
                          <thead>
                            <tr>
                              <th>Patient Full Name</th>
                              <th>Aadhar No</th>
                              <th>Contact</th>
                              <th>Ward Name</th>
                              <th>Bed Type</th>
                              <th>Discharge</th>
                            </tr>
                          </thead>
                          <tbody>
                                 {
                                    allAdmitPatients.map(pat => 
                                        <tr key={pat._id}>

                                             <td>{pat.fname} {pat.lname}</td>
                                             <td>{pat.aadharNo}</td>
                                             <td>{pat.contactNo}</td>
                                             <td>{pat.ward}</td>
                                             <td>{pat.bedtype}</td>
                                             <td><Button variant="warning" size="sm">Discharge</Button></td>
                                         </tr>  
                                     )
                                 }
                          </tbody>
                          </Table>
        </div>
    )
}

export default AllAdmitPatients;
