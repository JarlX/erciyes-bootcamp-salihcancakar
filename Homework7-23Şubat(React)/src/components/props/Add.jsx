import React, { useEffect, useState } from 'react';
import Popup from '../popup/Popup';

function Add(props) {
  const [compName, setCompName] = useState('');
  const [contName, setContName] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [buttonPopup, setButtonPopup] = useState(false);

  const add = () => {
    let newCompany = {
      companyName: compName,
      contactName: contName,
      address: {
        city: city,
        country: country,
      },
    };
    fetch('https://northwind.vercel.app/api/suppliers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCompany),
    }).then(res => {
      props.getData();
      setCompName('');
      setContName('');
      setCity('');
      setCountry('');
      props.setLoading(true);
    });
  };
  return (
    <>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Company Name"
                onChange={e => setCompName(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Contact Name"
                onChange={e => setContName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              onChange={e => setCity(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              onChange={e => setCountry(e.target.value)}
            />
          </div>
        </>
        <button
          type="submit"
          className="btn btn-primary col-md-11"
          onClick={add}
        >
          Add New
        </button>
      </Popup>

      <button
        className="btn btn-success"
        onClick={e => {
          e.preventDefault(e);
          setButtonPopup(true);
        }}
      >
        New Company
      </button>
    </>
  );
}

export default Add;
