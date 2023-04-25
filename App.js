import React from 'react';
import { Appearance, useColorScheme } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import ToDoList from './components/ToDoList';

const App = () => {
  return <ToDoList />;
};

export default App;
