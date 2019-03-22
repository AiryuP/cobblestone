import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/Home/index';
import About from './components/About/index';

import './App.css';

import {  Layout, Menu, Icon    } from 'antd';

const { Header, Sider, Content } = Layout;

class App extends Component {

  constructor( porps ){
    super( porps );

    this.state = {
      collapsed: false,
    };
  }


  render() {


    
    return (
      <div className="App">
      <Router>
          <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="user" />
                <span>Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/about">
                <Icon type="video-camera" />
                <span>About</span>
              </Link>
            </Menu.Item>
      
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: '84vh',
          }}
          >
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ About } /> 
          </Content>
        </Layout>
      </Layout>
      </Router>
      </div>
    );
  }


  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }



}

export default App;
