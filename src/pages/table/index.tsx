import { useState } from "react";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export default () => {

  const [pageSize, setPageSize] = useState<number>(5);
  const columns: GridColDef[] = [
    {
      headerName: 'Name',
      field: 'name',
      width: 150,
    },
    {
      headerName: 'Age',
      field: 'age',
      width: 90,
    },
    {
      headerName: 'Tags',
      field: 'tags',
      width: 250,
      renderCell: (params: GridValueGetterParams<string[], any>) => (
        <Stack direction="row" spacing={1}>
          {params.value?.map((tag) => {
            let color: any = tag.length > 5 ? 'primary' : 'success';
            if (tag === 'aaa') {
              color = 'warning';
            }
            return (
              <Chip
                key={tag}
                size="small"
                label={tag.toUpperCase()}
                color={color}
                variant="outlined"
              />
            );
          })}
        </Stack>
      ),
    },
    {
      headerName: 'Address',
      field: 'address',
      width: 280,
    },
    {
      headerName: 'Action',
      field: 'action',
      width: 280,
      renderCell: (params: GridValueGetterParams) => (
        <Stack direction="row" spacing={1}>
          <a>Invite {params.row.name}</a>
          <a>Delete</a>
        </Stack>
      ),
    },
  ];

  const rows = [
    {
      id: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      id: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      id: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      id: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
      tags: ['aaa', 'developer'],
    },
    {
      id: '5',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      id: '6',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      id: '7',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      id: '8',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
      tags: ['aaa', 'developer'],
    },
    {
      id: '9',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      id: '10',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      id: '11',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      id: '12',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
      tags: ['aaa', 'developer'],
    },
    {
      id: '13',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      id: '14',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      id: '15',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      id: '16',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
      tags: ['aaa', 'developer'],
    },
  ];

  return (
    <DataGrid
      autoHeight
      rows={rows}
      columns={columns}
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[5, 10, 20]}
      checkboxSelection
    />
  );
};
