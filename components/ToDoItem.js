import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';


const ToDoItem = ({ item, deleteToDoItem }) => {
    return (
        <ListItem bottomDivider>
            <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <Icon
                name="delete"
                onPress={() => deleteToDoItem(item.id)}
            />
        </ListItem>
    );
};

const styles = StyleSheet.create({
    deleteIcon: {
        marginRight: 10,
    },
});







export default ToDoItem;
