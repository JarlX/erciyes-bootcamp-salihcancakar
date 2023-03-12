import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import "./style/Form.css";
import axios from "axios";

function CatUpdate() {
  let navigate = useNavigate();
  const [category, setCategory] = useState({});
  const [loading, setloading] = useState(true);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      id: "",
      name: "",
      description: "",
    },
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  let { id } = useParams();

  const getData = () => {
    axios
      .get(`https://northwind.vercel.app/api/categories/${id}`)
      .then((res) => {
        setCategory(res.data);
        setloading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const updateCategory = (values) => {
    axios
      .put("https://northwind.vercel.app/api/categories/" + id, values, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        navigate("/categoryList");
        setloading(true);
      })
      .catch((err) => {
        console.log(err);
        console.log(category.id, values);
      });
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit(updateCategory)}>
      <label htmlFor="id">ID</label>
      <input
        {...register("id")}
        disabled
        type="number"
        value={category.id}
        onChange={handleChange}
      />

      <label htmlFor="name">Name</label>
      <input
        {...register("name")}
        type="text"
        value={category.name}
        onChange={handleChange}
      />

      <label htmlFor="description">Description</label>
      <input
        type="text"
        {...register("description")}
        value={category.description}
        onChange={handleChange}
      />

      <input type="submit" />
    </form>
  );
}

export default CatUpdate;
