import { React, useState } from 'react';
import * as yup from 'yup';
import { set, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import axios from 'axios';

function CatAdd() {
  let navigate = useNavigate();
  let categorySchema = yup
    .object({
      id: yup.number().required(),
      name: yup.string().required(),
      description: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: '',
      name: '',
      description: '',
    },
    resolver: yupResolver(categorySchema),
  });

  const add = values => {
    axios
      .post('https://northwind.vercel.app/api/categories', values)
      .then(res => {
        navigate(-1);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(add)}>
        <Form.Field>
          <label htmlFor="id">ID</label>
          <input {...register('id', { required: true })} type="number" />
        </Form.Field>
        {errors.id && <p>ID can not be empty!</p>}

        <Form.Field>
          <label htmlFor="name">Name</label>
          <input {...register('name', { required: true })} type="text" />
        </Form.Field>
        {errors.name && <p>Name can not be empty!</p>}

        <Form.Field>
          <label htmlFor="description">Description</label>
          <input type="text" {...register('description', { required: true })} />
        </Form.Field>
        {errors.description && <p>Description can not be empty!</p>}

        <input type="submit" />
      </form>
    </>
  );
}

export default CatAdd;
