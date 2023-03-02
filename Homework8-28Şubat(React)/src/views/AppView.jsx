import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Data from '../pages/Data';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import AddCategoryForm from '../components/AddCategoryForm';
function AppView() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Box textAlign={'center'} margin="20px">
          <Button
            onClick={() => {
              navigate('/addCategory');
            }}
            variant="contained"
            color="success"
          >
            Add Category
          </Button>
        </Box>
      </div>
      <Routes>
        <Route path="/" element={<Data />}></Route>
        <Route path="/addCategory" element={<AddCategoryForm />}></Route>
      </Routes>
    </>
  );
}

export default AppView;
