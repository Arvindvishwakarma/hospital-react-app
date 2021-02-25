import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { Button } from 'react-bootstrap';

function Table() {
    const { SearchBar } = Search;
    const details=[{
        name:'Sagar Shree',
        city: 'Sagar',
        state: "Madhya Pradesh",
        show: <Button variant="warning" size="sm">Show Details</Button>
    },
    {
        name:'Chaitanya',
        city: 'Sagar',
        state: "Madhya Pradesh",
        show: <Button variant="warning" size="sm">Show Details</Button>
    },
    {
        name:'BMC',
        city: 'Sagar',
        state: "Madhya Pradesh",
        show: <Button variant="warning" size="sm">Show Details</Button>
    },

    
]
    const columns = [{
        dataField: 'name',
        text: 'Hospital Name'
    }, 

    {
        dataField: 'city',
        text: 'City'
    },
    
    {
        dataField: 'state',
        text: 'State'
    }, 

    {
        dataField: 'show',
        text: 'Show Details'
    }, 
];
    return (
        <ToolkitProvider
            keyField="id"
            data={details}
            columns={columns}
            search
        >
            {
                props => ( 
                    <div>
                        <h3><center>All Hospitals</center></h3>
                        <SearchBar {...props.searchProps}/>
                        <hr />
                        <BootstrapTable {...props.baseProps}/>
                    </div>
                )
            }
        </ToolkitProvider>
    )
}

export default Table;