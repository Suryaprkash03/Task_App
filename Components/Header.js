import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = ({ title, profilePicture, titlee }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton}  >
        <Ionicons name="arrow-back" size={24} color="#fff" />
        <Image source={profilePicture} style={styles.profilePictureInButton} />

      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{title}</Text>
        <View>
          <Text style={styles.titlee}>{titlee}</Text>
        </View>
      </View>
      {/* <View style={styles.profileContainer}>

        <Text style={styles.title}>{title}</Text>
      </View> */}
      <TouchableOpacity style={styles.moreButton}>
        <Ionicons name="ellipsis-vertical" size={24} color="#fff" onPress={toggleModal} />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    // paddingVertical: 30,
    backgroundColor: '#075e54',
    position: 'relative',
    height: 80,
    top: -40,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    marginTop: 10,
    left: -5,
  },
  profileContainer: {
    flexDirection: 'row',
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profilePictureInButton: {
    width: 39,
    height: 39,
    borderRadius: 12,
    marginRight: 5,
    marginLeft: -1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: -55,
    marginTop: 10,
  },
  titlee: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: -55,
  },
  moreButton: {
    padding: 5,
    marginTop: 20,
  },

});

export default Header;
