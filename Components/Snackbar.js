// Snackbar.js
import React from 'react';
import Snackbar from 'react-native-snackbar';

const MySnackbar = ({ message, duration }) => {
  const showSnackbar = () => {
    Snackbar.show({
      text: message,
      duration, // Optional: Duration in milliseconds
      action: {
        text: 'Undo',
        onPress: () => {
          // Handle undo action
        },
      },
    });
  };

  return (
    <button onPress={showSnackbar}>Show Snackbar</button>
  );
};

export default MySnackbar;
