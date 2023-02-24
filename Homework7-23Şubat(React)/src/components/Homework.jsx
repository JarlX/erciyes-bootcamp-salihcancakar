import React, { useEffect, useState } from 'react';
import Popup from './popup/Popup';
import Add from './props/Add';
import { Triangle } from 'react-loader-spinner';

function Homework() {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch('https://northwind.vercel.app/api/suppliers').then(
      res => res.json()
    );

    setData(res);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteData = id => {
    fetch('https://northwind.vercel.app/api/suppliers/' + id, {
      method: 'DELETE',
    }).then(res => {
      getData();
      setLoading(true);
    });
  };

  return (
    <>
      {loading ? (
        <Triangle
          height="100vh"
          width="100vw"
          color="#0D0D78"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Contact Name</th>
              <th>City</th>
              <th>Country</th>
              <th>
                <Add
                  data={data}
                  setData={setData}
                  getData={getData}
                  Popup={Popup}
                  loading={loading}
                  setLoading={setLoading}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(data => {
              return (
                <tr key={data.id}>
                  <td>{data.companyName}</td>
                  <td>{data.contactName}</td>
                  <td>{data.address.city}</td>
                  <td>{data.address.country}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={e => {
                        e.preventDefault();
                        deleteData(data.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Homework;
