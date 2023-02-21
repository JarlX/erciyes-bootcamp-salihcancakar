import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Homework() {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get('https://northwind.vercel.app/api/products')
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const style1 = { backgroundColor: 'red' };
  const style2 = { color: 'yellow' };

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Unit Price</th>
            <th>Quantity Per Unit</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter(data => data.unitsInStock > 0)
            .map(data => {
              if (data.unitPrice > 20) {
                return (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.unitsInStock}</td>
                    <td style={{ ...style1, ...style2 }}>{data.unitPrice}</td>
                    <td>{data.quantityPerUnit}</td>
                  </tr>
                );
              } else {
                return (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.unitsInStock}</td>
                    <td>{data.unitPrice}</td>
                    <td>{data.quantityPerUnit}</td>
                  </tr>
                );
              }
            })}
        </tbody>
      </table>
    </>
  );
}
export default Homework;
