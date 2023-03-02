import { useState, useEffect, forwardRef } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Data() {
  const [data, setData] = useState([]);
  const [Id, setId] = useState();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const getData = () => {
    axios.get('https://northwind.vercel.app/api/products').then(res => {
      setData(res.data);
      setLoading(false);
    });
  };

  const deleteData = () => {
    setLoading(true);
    axios
      .delete(`https://northwind.vercel.app/api/products/${Id}`)
      .then(res => {
        handleClose();
        getData();
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClickOpen = data => {
    setOpen(true);
    setId(data.id);
  };

  const handleClose = () => {
    setOpen(false);
    getData();
  };
  let columns = [
    {
      headerName: 'ID',
      field: 'id',
      flex: 0.2,
    },
    {
      headerName: 'Name',
      field: 'name',
      flex: 1,
    },
    {
      headerName: 'Unit Price',
      field: 'unitPrice',
      flex: 1,
    },
    {
      headerName: 'Units In Stock',
      field: 'unitsInStock',
      flex: 1,
    },
    {
      headerName: 'Quantity Per Unit',
      field: 'quantityPerUnit',
      flex: 1,
    },
    {
      headerName: 'Delete',
      renderCell: data => {
        return (
          <Button
            variant="contained"
            color="error"
            onClick={() => handleClickOpen(data)}
          >
            Delete
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <div style={{ height: '100vh', width: '99vw' }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={20}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          loading={loading}
        />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle id="alert-dialog-title">
            {'Silme İşlemi için Emin Misin?'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Bu işlem geri alınamayacaktır...!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Geri
            </Button>
            <Button onClick={deleteData} autoFocus>
              Sil
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default Data;
