import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = ({ title, profilePicture,titlee }) => {
  const [isModalVisible , setModalVisible] =useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton}>
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
        <Ionicons name="ellipsis-vertical" size={24} color="#fff"onPress={toggleModal} />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          {/* Your modal content goes here */}
          <Text style={styles.modalText}>Modal Content</Text>
          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#075e54',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginLeft:10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft:-30,
  },
  titlee: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft:-30,
  },
  // moreButton: {
  //   padding: 5,
  // },
  // moreButton: {
  //   padding: 5,
  // },
  // modalContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
  // },
  // modalText: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   color: '#fff',
  // },
  // closeButton: {
  //   marginTop: 20,
  //   padding: 10,
  //   backgroundColor: '#fff',
  //   borderRadius: 5,
  // },
  // closeButtonText: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   color: '#075e54',
  // },
});

export default Header;
