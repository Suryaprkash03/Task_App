import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { WToast } from 'react-native-smart-tip';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const windowDimensions = useWindowDimensions();

  useEffect(() => {
    const handleOrientationChange = () => {
      showToast('Orientation changed');
    };

    const dimensionsSubscription = Dimensions.addEventListener('change', handleOrientationChange);

    return () => {
      dimensionsSubscription.remove();
    };
  }, []);

  const sendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      setInputText('');
      showToast('Message sent');
    } else {
      showToast('Please type a message');
    }
  };

  const showToast = (message) => {
    const toastOpts = {
      data: message,
      textColor: '#ffffff',
      backgroundColor: '#444444',
      duration: WToast.duration.LONG,
      position: WToast.position.TOP,
    };
    
    WToast.show(toastOpts);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={[styles.messageContainer, { alignSelf: item.sender === 'user' ? 'flex-end' : 'flex-start' }]}>
            <Text style={[styles.messageText, { backgroundColor: item.sender === 'user' ? '#DCF8C6' : '#FFFFFF' }]}>
              {item.text}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type your message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageContainer: {
    marginVertical: 5,
    marginHorizontal: 10,
    maxWidth: '80%',
  },
  messageText: {
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    padding: 10,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007BFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ChatScreen;
