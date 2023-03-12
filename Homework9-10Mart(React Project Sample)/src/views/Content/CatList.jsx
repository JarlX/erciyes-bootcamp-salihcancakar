import { Table, Button, Modal } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';
const { confirm } = Modal;

function CatList() {
  const [Data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  let navigate = useNavigate();

  const getData = () => {
    axios.get('https://northwind.vercel.app/api/categories').then(res => {
      setData(res.data);
      setloading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  let columns = [
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Detail',
      dataIndex: 'id',
      render: id => (
        <Button onClick={() => goToDetail(id)} type="primary" ghost>
          Detail
        </Button>
      ),
    },
    {
      title: 'Update',
      dataIndex: 'id',
      render: id => (
        <Button onClick={() => goToUpdate(id)} type="primary" ghost>
          Update
        </Button>
      ),
    },
    {
      title: 'Delete',
      dataIndex: 'id',
      render: id => (
        <Button danger onClick={() => ToDelete(id)} ghost>
          Delete
        </Button>
      ),
    },
  ];
  const goToAdd = () => {
    navigate(`/category/add`);
  };
  const goToDetail = id => {
    navigate(`/category/detail/${id}`);
  };
  const goToUpdate = id => {
    navigate(`/category/update/${id}`);
  };
  const ToDelete = id => {
    confirm({
      title: 'Are you sure delete this item?',
      icon: <ExclamationCircleFilled />,
      content: 'This item will be deleted... ',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        axios
          .delete(`https://northwind.vercel.app/api/categories/${id}`)
          .then(res => {
            getData();
          });
        setloading(true);
      },
      onCancel() {
        console.log(id);
      },
    });
  };

  return (
    <>
      <Button
        type="primary"
        style={{
          background: 'green',
          color: 'white',
          fontWeight: 'bold',
          marginBottom: '10px',
        }}
        onClick={goToAdd}
      >
        Add Category
      </Button>
      <Spin tip="Loading..." spinning={loading}>
        <Table columns={columns} dataSource={Data} />
      </Spin>
    </>
  );
}

export default CatList;
