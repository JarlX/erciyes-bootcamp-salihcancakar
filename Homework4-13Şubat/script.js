'use strict';

let inputCompanyName = document.getElementById('inputCompanyName');
let inputContactName = document.getElementById('inputContactName');
let inputContactTitle = document.getElementById('inputContactTitle');
let country = document.getElementById('inputCountry');

let companyNames = document.getElementById('companyNames');

let inputId = document.getElementById('idInput');

const btnSubmit = document.getElementById('submitOne');
const btnGetCompany = document.getElementById('getCompanyName');
const btnDel = document.getElementById('btnDelId');

btnSubmit.addEventListener('click', e => {
  e.preventDefault();

  let newCompany = {
    companyName: inputCompanyName.value,
    contactName: inputContactName.value,
    contactTitle: inputContactTitle.value,
    adress: { country: country.value },
  };

  axios
    .post('https://northwind.vercel.app/api/suppliers', newCompany)
    .then(res => {
      console.log('Response', res.data);
      alert('Başarılı!');
    });
});

btnGetCompany.addEventListener('click', e => {
  e.preventDefault();

  companyNames.innerHTML = '';

  axios.get('https://northwind.vercel.app/api/suppliers').then(res => {
    let companies = res.data;

    companies.map(company => {
      let liElement = document.createElement('li');
      liElement.classList.add = 'list-group-item';
      liElement.innerHTML = company.companyName;

      companyNames.appendChild(liElement);
    });
  });
});

btnDel.addEventListener('click', e => {
  e.preventDefault();

  let id = inputId.value;

  axios
    .delete('https://northwind.vercel.app/api/suppliers/' + id)
    .then(res => {
      alert('Başarılı! ' + id);
    })
    .catch(err => {
      alert('Hata, silinemedi');
    });
});
