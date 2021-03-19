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
                    wardsName

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

    let totalPrivate = 0
    stateBeds.map(pri=>{
      totalPrivate=totalPrivate+pri.privateBeds
    })

    let totalGeneral = 0
    stateBeds.map(gen=>{
      totalGeneral=totalGeneral+gen.generalBeds
    })
    
    let totalHospitalBeds = totalPrivate + totalGeneral

    let bplBeds = ((totalHospitalBeds*30)/100).toFixed(0)

console.log(totalPrivate)
console.log(totalGeneral)
console.log(totalHospitalBeds)
console.log(bplBeds)
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
                                             <td>{bed.wardsName}</td>
                                             <td><Button variant="warning" size="sm">Edit</Button></td>
                                             <td><Button variant="danger" size="sm">Delete</Button></td>
                                         </tr>  
                                     )
                                 }
                          </tbody>
                        </Table>

                        <Table bordered hover>
                          <thead>
                            <tr>
                              <th>Total Private Beds</th>
                              <th>Total General Beds</th>
                              <th>Total Beds In Hospital</th>
                              <th>BPL Beds In Hospital</th>
                            </tr>
                          </thead>
                          <tbody>
                                 <tr>
                                   <td>{totalPrivate}</td>
                                   <td>{totalGeneral}</td>
                                   <td>{totalHospitalBeds}</td>
                                   <td>{bplBeds}</td>
                                 </tr>
                          </tbody>
                        </Table>
                </div> 
        


  
    )
}

export default DisplayBeds;