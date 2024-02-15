// Modal.js
import React, { useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';

const ModalComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View>
      <Button title="Show Modal" onPress={toggleModal} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>This is a modal</Text>
          <Button title="Close Modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;
