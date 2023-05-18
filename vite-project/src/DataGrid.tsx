import { DataGrid, GridColDef } from '@mui/x-data-grid';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DataGrida = ({tours}: any) => {

  const columns : GridColDef[] = [
    { field: 'col1', headerName: 'Id', width: 150 },
    { field: 'col2', headerName: 'Groups', width: 150 },
    { field: 'col3', headerName: 'Title', width: 150 },
    { field: 'col4', headerName: 'body', width: 150 },
  ];

  
  ;
  
  

  
  return (
    <section>
      <DataGrid columns={columns} rows={

  tours.map((ids: any)=>{
    
    return { id: ids.id, col1: ids.id, col2: ids.userId, col3: ids.title, col4: ids.body  }
    
    
  })
}/>


       
      
    </section>
  )
}

export default DataGrida
