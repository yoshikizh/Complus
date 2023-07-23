import React from 'react';
import { Button } from 'antd';
import { ConfigProvider } from 'antd';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => (

  <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
    <div className="App">
      <Button type="primary">Button</Button>
    </div>
  </ConfigProvider>
);

export default App;
