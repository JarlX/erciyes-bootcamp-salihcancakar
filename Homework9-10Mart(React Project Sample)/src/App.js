import Home from "./views/Home/Home";
import SiteHeader from "./views/Layout/SiteHeader";
import SiteFooter from "./views/Layout/SiteFooter";
import React from "react";
import { Layout, Menu, theme } from "antd";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/Routes";
const { Header, Content, Footer } = Layout;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout className="layout">
        <SiteHeader />
        <Content className="site-layout" style={{ padding: "0 20px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: colorBgContainer,
            }}
          >
            <Routes>
              {routes.map((item) => {
                return <Route path={item.path} element={item.element}></Route>;
              })}
            </Routes>
          </div>
        </Content>
        <SiteFooter />
      </Layout>
    </>
  );
}

export default App;
