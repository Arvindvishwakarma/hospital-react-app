import { Button, Table} from 'react-bootstrap';
import {useEffect, React, useState}  from 'react';


function DisplayBeds() {


    const [stateBeds, setBeds] = useState([])


    
  useEffect(() => {
    fetchBedsData()
  },[])


    function fetchBedsData(){
        const requestBody = {
            query: `
            query 
            {
                getBeds{
                    _id
                    privateBeds
                    generalBeds


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
            const fetchBeds = resData.data.getBeds;
            setBeds(fetchBeds);
            console.log(fetchBeds)
        })
        .catch(err => {
            console.log(err);
        });
    }



    return (

        <div>
        <center><h2><u>All Beds in Hospital</u></h2></center>
        <hr></hr>
                        <Table bordered hover>
                          <thead>
                            <tr>
                              <th>Private Beds</th>
                              <th>General Beds</th>
                              <th>Ward Name</th>
                              <th>Edit</th>
                              <th>Delete</th>
                              
                            </tr>
                          </thead>
                          <tbody>
                                  {
                                    stateBeds.map(bed => 
                                        <tr key={bed._id}>

                                             <td>{bed.privateBeds}</td>
                                             <td>{bed.generalBeds}</td>
                                             <td>{(bed.generalBeds+bed.privateBeds)}</td>
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

export default DisplayBeds;