

const Chat = () => {   
    const [ownmessages, setownMessages] = useState([
      { id: 12, text: 'Hi' },
      { id: 34, text: 'Hello' }]);
    const [newownMessage, setNewownMessage] = useState('');
  
    const handle= () => {
      if (newownMessage.trim() === '') return;
      const updatedMessages = [...ownmessages, { id: messages.length, text: newMessage }];
      setownMessages(updatedMessages,);
      setNewownMessage('');
    };
    return(

        <FlatList
        data={ownmessages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.messageHead}>Archana mam</Text>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
    );
};
export default Chat;