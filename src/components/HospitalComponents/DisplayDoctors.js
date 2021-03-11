import { Button, Table} from 'react-bootstrap';
import {useEffect, React, useState}  from 'react';


function DisplayWards() {


    const [stateDoctors, setDoctors] = useState([])


    
  useEffect(() => {
    fetchDoctorsData()
  },[])


    
    function fetchDoctorsData(){
        const requestBody = {
            query: `
            query 
            {
                getDoctors{
                    _id
                    docName
                    docReg
                    docSp
                    docWard
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
            const fetchDoctors = resData.data.getDoctors;
            setDoctors(fetchDoctors);
            console.log(fetchDoctors)
        })
        .catch(err => {
            console.log(err);
        });
    }



    return (

        <div>
        <center><h2><u>All Docotrs in Hospital</u></h2></center>
        <hr></hr>
                        <Table bordered hover>
                          <thead>
                            <tr>
                              <th>Doctor Name</th>
                              <th>Doctor Registration No</th>
                              <th>Doctor Specialization</th>
                              <th>Doctor's Ward</th>
                              <th>Edit</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                                  {
                                    stateDoctors.map(doc => 
                                        <tr key={doc._id}>

                                             <td>{doc.docName}</td>
                                             <td>{doc.docReg}</td>
                                             <td>{doc.docSp}</td>
                                             <td>{doc.docWard}</td>
                                             <td><Button variant="warning" size="sm">Edit</Button></td>
                                             <td><Button variant="danger" size="sm">Delete</Button></td>
                                         </tr>  
                                     )
                                 }
                          </tbody>
                        </Table>

                </div> 
        


  
    )
}

export default DisplayWards;