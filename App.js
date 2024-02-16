import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from './Components/Header';
import profilePicture from './assets/image/profile.png';



const ChatScreen = () => {
  const [messages, setMessages] = useState([
    { id: 12, text: 'Hi' },
    { id: 34, text: 'Hello' }]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim() === '') return;
    const updatedMessages = [...messages, { id: messages.length, text: newMessage }];
    setMessages(updatedMessages,);
    setNewMessage('');
  };
  return (<>

    <View style={styles.container}>
      {/* Add the Header component */}
      {/* <ImageBackground>
        source={require('./assets/image/chat.jpg')}

      </ImageBackground> */}
      <StatusBar style=
        'light'>

      </StatusBar>
      <Header
        profilePicture={profilePicture}
        title="ZenQuix Mob app Team"
        titlee="Archana mam , Shihab , Mohan" />
      {/* <ProfilePicture profilePicture={profilePicture}/> */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.messageHead}>Archana mam</Text>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={newMessage}
          onChangeText={setNewMessage}

        />
        <TouchableOpacity>
          <Ionicons name='' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'black'
  },
  messageContainer: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    alignSelf: 'flex-end',
    maxWidth: '80%',


  },
  messageHead:
  {
    color: 'red',
    fontWeight: 'bold',
  },
  messageContainerr:
  {
    flexDirection: 'column',
    padding: 10,
  },
  messageText: {
    fontSize: 15,

  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'black',
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 7,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  sendButton: {
    backgroundColor: '#246d4d',
    borderRadius: 10,
    padding: 10,
    marginRight: 1
  },

});

export default ChatScreen;
