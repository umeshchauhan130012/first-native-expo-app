import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  return (
        <View style={styles.headerWrapper}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={toggleMenu}>
              <Feather name="menu" size={30} color="black" />
            </TouchableOpacity>
            <Image style={styles.tinyLogo} source={require('../../src/assets/images/logo-theindiadaily.png')} />
            <MaterialIcons name="search" size={30} color="black" />
          </View>
          <Modal transparent={true} animationType="slide" visible={isMenuVisible} onRequestClose={toggleMenu}>
            <View style={styles.menuWrapper}>
              <TouchableOpacity onPress={toggleMenu}>
                <Text style={styles.menuButton}>Close</Text>
              </TouchableOpacity>
                <Text style={styles.menuItem}>Item 1</Text>
                <Text style={styles.menuItem}>Item 2</Text>
            </View>
          </Modal>
        </View> 
  );
}
const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: '#FFF8F9',
    paddingBottom: 10, 
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingBottom: 6,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomStartRadius:10,
    borderBottomEndRadius:10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3}, 
    shadowOpacity: .3, 
    shadowRadius: 10, 
    elevation: 1,
  }, 
  menuWrapper: {
    backgroundColor: '#fff',
    flex: 1,
  },
  tinyLogo: {
    width: 80,
    height: 60,
  },
});
