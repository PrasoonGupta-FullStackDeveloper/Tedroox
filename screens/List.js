import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';

const List = (props) => {
    const [listData, setListData] = useState([]);
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.nameView} onPress={() => props.navigation.navigate('Details', { applicationId: item.id })}>
            <Text style={styles.nameText}>{item.name}</Text>
        </TouchableOpacity>
    )
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setListData(data))
    }, [])
    return (
        <View>
            {listData ? (
                <FlatList
                    data={listData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            ) : (
                <ActivityIndicator
                    size="large"
                    color="black"
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    nameView: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 5,
        backgroundColor: 'white'
    },
    nameText: {
        textAlign: 'center',
        marginTop: 7,
        color: 'blue',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '600'
    }
});

export default List;