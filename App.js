import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  BackHandler,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native';
import Toast from 'react-native-toast-message';
import Header from './Components/Header';
import CustomSnackbar from './Components/Snackbar';
import profilePicture from './assets/image/profile.png';


const ChatScreen = () => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Exit !!', 'Are you sure you want to exit ?', [
        {
          text: 'No',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: () => BackHandler.exitApp()
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const [messages] = useState([
    { id: 12, text: 'Ok Mam' }
  ]);

  // const [newMessage,] = useState('');

  // const handleSend = () => {
  //   if (newMessage.trim() === '') return;
  //   const updatedMessages = [...messages, { id: messages.length, text: newMessage }];
  //   // setMessages(updatedMessages,);
  //   // setNewMessage('');
  // };
  const showToast = () => {
    ToastAndroid.show('Hold to record, Release to send ', ToastAndroid.SHORT);
  };

  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleSnackbarAction = () => {
    // Handle action press

    setSnackbarVisible(false);
  };
  return (<>
    <View style={styles.container}>
      {/* Add the Header component */}
      <ImageBackground style={styles.containerimage}
        source={require('./assets/image/background.jpg')}>
        {/* <StatusBar style=
        'light'>
      </StatusBar> */}
        <Header
          profilePicture={profilePicture}
          title="ZenQuix Mob app Team"
          titlee="Archana mam , Shihab , Mohan" />
        {/* <ProfilePicture profilePicture={profilePicture}/> */}
        <View style={styles.messageContainer}>
          <Text style={styles.messageHead} >
            Archana mam</Text>
          <Text style={styles.messageText}>Hi team</Text>
        </View>
        <View style={styles.messageContainer} >
          <Text style={styles.messageText}>We will have a meeting at 8am today.please Share your availabilty.</Text>
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.messageHead1}>shihabudeen</Text>
          <Text style={styles.messageText}>Ok Mam</Text>
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.messageHead2}>Harivarshini</Text>
          <Text style={styles.messageText}>Ok Mam</Text>
        </View>
        <View style={styles.messageContainer} >
          <Text style={styles.messageHead}>
            Archana mam</Text>
          <Text style={styles.messageText1}>https://teams.microsoft.com/l/meetup-join/19%3ameeting_NjRkMTdkOGUtMzVmOC00ZTRiLWFkNzYtODM0Y2I0MTk0NDZh%40thread.v2/0?context=%7b%22Tid%22%3a%22abd4f249-baef-44e4-b92b-67f49de02983%22%2c%22Oid%22%3a%227c90bf8c-d65c-4877-a493-270067175bec%22%7d</Text>
          <Text style={styles.messageText}>
            Please join meeting using the above link
          </Text>
        </View>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.messageContainerr}>
              <Text style={styles.messageHeadd}>You</Text>
              <Text style={styles.messageTextt}>{item.text}</Text>
            </View>
          )}
        />
        <TouchableOpacity style={styles.messageContainer} onPress={() => setSnackbarVisible(true)}>
          <Text style={styles.messageHead3}>Mohanprasath</Text>
          <Text style={styles.messageText}>Ok Mam</Text>
        </TouchableOpacity>


        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder=" Message..."
          // value={newMessage}
          // onChangeText={setNewMessage}

          />
          <TouchableOpacity style={styles.sendButton} onPress={() => showToast()} >
            <FontAwesome name="microphone" size={22} color="white" />
          </TouchableOpacity>
        </View>
        <Toast />
        <CustomSnackbar
          visible={snackbarVisible}
          actionText="❤️   👍🏻   🔥   😂   👏🏻"
          onActionPress={handleSnackbarAction}
        />
      </ImageBackground>
    </View>
  </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',

  },

  messageContainer: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    alignSelf: 'flex-start',
    maxWidth: '80%',
    top: -15,
  },
  messageContainerr: {
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
  messageHeadd:
  {
    color: '#6C3483',
    fontWeight: 'bold',
  },

  messageText: {
    fontSize: 15,

  },
  messageTextt: {
    fontSize: 15,

  },
  messageText1:
  {
    color: '#1082F4',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  input: {
    flex: 1,
    marginRight: 5,
    marginLeft: 5,
    padding: 7,
    backgroundColor: '#F8F9F9',
    borderRadius: 20,
    color: '#17202A',
  },
  sendButton: {
    backgroundColor: '#2ECC71',
    borderRadius: 88,
    padding: 11,
    marginRight: 4,
  },
  messageHead1:
  {
    color: 'green',
    fontWeight: 'bold',
  },
  messageHead2:
  {
    color: '#D35400',
    fontWeight: 'bold',
  },
  messageHead3:
  {
    color: '#34495E',
    fontWeight: 'bold',
  },
});
export default ChatScreen;
