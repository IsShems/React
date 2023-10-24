import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button, List, Space } from 'antd';

Modal.setAppElement('#root'); 

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState(['Bird', '2 Birds', '3 Birds', '4 Birds', '5 Birds']);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <Button type="primary" onClick={openModal}>
        Open Modal Window
      </Button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal Window with notes"
      >
        <List
          dataSource={items}
          renderItem={(item, index) => (
            <List.Item>
              <Space>
                {item}
                <Button type="danger" onClick={() => deleteItem(index)}>
                  Delete
                </Button>
              </Space>
            </List.Item>
          )}
        />
        <Button type="primary" onClick={closeModal}>
          Close Modal Window
        </Button>
      </Modal>
    </div>
  );
};

export default App;
