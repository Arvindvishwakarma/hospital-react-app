import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { Button } from 'react-bootstrap';
import {useEffect, React, useState}  from 'react'

function Table() {

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
                  status
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
    



    const hospitalList = stateHospital.map( number => 
                number.hospitalName
    )
           //console.log(hospitalList)



//   const { SearchBar } = Search;
//     const details=[{
//         name:'Sagar Shree',
//         city: 'Sagar',
//         state: "Madhya Pradesh",
//         show: <Button variant="warning" size="sm">Show Details</Button>
//     },
//     {
//         name:'Chaitanya',
//         city: 'Sagar',
//         state: "Madhya Pradesh",
//         show: <Button variant="warning" size="sm">Show Details</Button>
//     },
//     {
//         name:'BMC',
//         city: 'Sagar',
//         state: "Madhya Pradesh",
//         show: <Button variant="warning" size="sm">Show Details</Button>
//     },
    
// ]

//     const columns = [{
//         dataField: 'name',
//         text: 'Hospital Name'
//     }, 

//     {
//         dataField: 'city',
//         text: 'City'
//     },
    
//     {
//         dataField: 'state',
//         text: 'State'
//     }, 

//     {
//         dataField: 'show',
//         text: 'Show Details'
//     }, 
// ];

    return (



        // <ToolkitProvider
        //     keyField="id"
        //     data={details}
        //     columns={columns}
        //     search
        // >
        //     {
        //         props => ( 
        //             <div>
        //                 <h3><center>All Hospitals</center></h3>
        //                 <SearchBar {...props.searchProps}/>
        //                 <hr />
        //                 <BootstrapTable {...props.baseProps}/>
        //             </div>
        //         )
        //     }
           
        //     </ToolkitProvider> 

        <div>
             <table border='1'>
                             <thead>
                                 <tr>
                                     <td>Hospital Name</td>
                                     <td>Hospital Status</td>
                                     <td>Hospital Id</td>
                                 </tr>
                                 {
                                     stateHospital.map(hos => 
                                        <tr>

                                             <td>{hos.hospitalName}</td>
                                             <td>{hos.status}</td>
                                             <td>{hos._id}</td>
                                         </tr>  
                                     )
                                 }
                             </thead>
                        </table>
        </div> 
        


  
    )
}

export default Table;