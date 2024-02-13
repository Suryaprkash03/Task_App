import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';

const ChatBubble = ({ message, isSent }) => {
  return (
    <View style={[styles.bubbleContainer, isSent ? styles.sentBubble : styles.receivedBubble]}>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
};

const App = () => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const sendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { id: messages.length, message: inputText, isSent: true }]);
      setInputText('');
      showToast('Message sent');
    }
  };

  const showToast = (message) => {
    Toast.show({
      text1: message,
      type: 'success',
    });
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  // const showSnackbar = (message) => {
  //   Snackbar.show({
  //     text: message,
  //     duration: Snackbar.LENGTH_SHORT,
  //   });
  // };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ChatBubble message={item.message} isSent={item.isSent} />}
        inverted
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
        <Text style={styles.modalButtonText}>Show Modal</Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>This is a modal</Text>
          <TouchableOpacity style={styles.modalCloseButton} onPress={toggleModal}>
            <Text style={styles.modalCloseButtonText}>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'flex-end',
  },
  bubbleContainer: {
    maxWidth: '70%',
    borderRadius: 8,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  sentBubble: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  receivedBubble: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: 'blue',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 10,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalCloseButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
  modalCloseButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
