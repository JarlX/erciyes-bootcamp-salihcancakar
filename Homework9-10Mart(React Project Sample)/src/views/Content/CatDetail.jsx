import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Badge, Button, Descriptions, Spin } from "antd";
import { useNavigate } from "react-router-dom";

function CatDetail() {
  const [dataDetail, setdataDetail] = useState([]);
  const [loading, setloading] = useState(true);
  let { id } = useParams();
  let navigate = useNavigate();

  const getDataDetail = () => {
    axios
      .get(`https://northwind.vercel.app/api/categories/${id}`)
      .then((res) => {
        setdataDetail(res.data);
        setloading(false);
      });
  };

  useEffect(() => {
    getDataDetail();
  }, []);

  return (
    <>
      <Spin tip="Loading..." spinning={loading}>
        <Descriptions title="Category Detail" bordered>
          <Descriptions.Item label="ID" style={{ fontWeight: "bold" }}>
            {dataDetail.id}
          </Descriptions.Item>

          <Descriptions.Item label="NAME" style={{ fontWeight: "bold" }}>
            {dataDetail.name}
          </Descriptions.Item>

          <Descriptions.Item label="Status" span={3}>
            <Badge status="success" text="Active" />
          </Descriptions.Item>

          <Descriptions.Item label="Description">
            {dataDetail.description}
          </Descriptions.Item>
        </Descriptions>
        <Button
          type="primary"
          style={{ marginLeft: "40vw", marginTop: "20px" }}
          ghost
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </Button>
      </Spin>
    </>
  );
}

export default CatDetail;
