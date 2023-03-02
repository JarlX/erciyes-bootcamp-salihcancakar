import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import '../components/styles/style.css';

function AddCategoryForm() {
  const { register, handleSubmit } = useForm();

  const postData = data => {
    axios
      .post('https://northwind.vercel.app/api/categories', data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };
  return (
    <>
      <form onSubmit={handleSubmit(postData)}>
        <input {...register('id')} placeholder="ID" required={true}></input>
        <input {...register('name')} placeholder="Category Name"></input>
        <input {...register('description')} placeholder="Description"></input>
        <input type="submit" />
      </form>
    </>
  );
}

export default AddCategoryForm;
