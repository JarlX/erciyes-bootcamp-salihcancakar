import { Button, Menu } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import React from "react";
import { Link } from "react-router-dom";

function SiteHeader() {
  let links = [
    {
      key: 1,
      label: <Link to="/">Home</Link>,
    },
    {
      key: 2,
      label: <Link to="/categoryList">Category</Link>,
    },
    {
      key: 3,
      label: (
        <Link to="/login">
          <Button icon={<PoweroffOutlined />}></Button>
        </Link>
      ),
      style: { marginLeft: "auto" },
    },
  ];
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={links}
      ></Menu>
    </Header>
  );
}

export default SiteHeader;
