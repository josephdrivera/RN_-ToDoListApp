import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import ToDoList from './components/ToDoList';

const App = () => {
  return <ToDoList />;
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.select({
      web: '#fff',
      default: '#000',
    }),
  },
});