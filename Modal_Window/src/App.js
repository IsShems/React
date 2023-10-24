import React, { useState } from 'react';
import { Button, Modal, Input, Space } from 'antd';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isDataModalVisible, setIsDataModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showDataModal = () => {
    setIsDataModalVisible(true);
  };

  const handleDataOk = () => {
    setIsDataModalVisible(false);
  };

  const handleDataCancel = () => {
    setIsDataModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open modal window
      </Button>
      <Modal title="Enter name and email" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Space direction="vertical">
          <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Button type="primary" onClick={showDataModal}>
            Оk
          </Button>
        </Space>
      </Modal>
      <Modal title="Enter data" visible={isDataModalVisible} onOk={handleDataOk} onCancel={handleDataCancel}>
        <p>Your name: {name}</p>
        <p>Email: {email}</p>
      </Modal>
    </div>
  );
};

export default App;
