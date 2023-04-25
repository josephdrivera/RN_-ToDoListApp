import React, { useState } from "react";
import { StyleSheet, View, FlatList } from 'react-native';
import { Button, Input } from 'react-native-elements';
import ToDoItem from './ToDoItem';
import { Header } from 'react-native-elements';
import { SafeAreaView } from 'react-native';




const ToDoList = () => {
    const [toDoList, setToDoList] = useState([]);
    const [toDoItem, setToDoItem] = useState('');

    const addToDoItem = () => {
        if (Input) {
            setToDoList([...toDoList, { id: Date.now(), title: toDoItem }]);
            setToDoItem('');
        }
    };

    const deleteToDoItem = (id) => {
        setToDoList(toDoList.filter((item) => item.id !== id));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header
                centerComponent={{
                    text: 'To-Do List',
                    style: { color: '#fff', fontSize: 20 },
                }}
                containerStyle={{
                    backgroundColor: '#3D6DCC',
                    justifyContent: 'space-around',
                }}
            />
            <Input
                placeholder="Enter a ToDo item"
                value={toDoItem}
                onChangeText={(text) => setToDoItem(text)}
            />
            <Button title="Add" onPress={addToDoItem} />
            <FlatList
                data={toDoList}
                renderItem={({ item }) => (
                    <ToDoItem item={item} deleteToDoItem={deleteToDoItem} />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});




export default ToDoList;





