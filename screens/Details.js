import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, ActivityIndicator, Alert, ScrollView } from 'react-native';

const Details = (props) => {
    const [listData, setListData] = useState(null);
    const ID = props.route.params.applicationId;
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                for (item of data) {
                    item.id == ID ? setListData(item) : null
                }
            })
    }, []);
    return (
        <ScrollView style={{ alignSelf: 'center', marginTop: 10 }}>
            {listData ? (
                <View>
                    <Text style={styles.personalText}>Personal Details</Text>
                    {listData.name ? (<Text style={styles.nameText}>Name : {listData.name}</Text>) : null}
                    {listData.username ? <Text style={styles.nameText}>Username : {listData.username}</Text> : null}
                    {listData.phone ? <Text style={styles.nameText}>Phone : {listData.phone}</Text> : null}
                    {listData.website ? <Text style={styles.nameText}>Website : {listData.website}</Text> : null}
                    <Text style={styles.personalText}>Company Details</Text>
                    {listData.company.name ? <Text style={styles.nameText}>Company Name : {listData.company.name}</Text> : null}
                    {listData.company.catchPhrase ? <Text style={styles.nameText}>Phrase : {listData.company.catchPhrase}</Text> : null}
                    {listData.company.bs ? <Text style={styles.nameText}>Business : {listData.company.bs}</Text> : null}
                    <Text style={styles.personalText}>Address Details</Text>
                    {listData.address.suite ? <Text style={styles.nameText}>Suite : {listData.address.suite}</Text> : null}
                    {listData.address.street ? <Text style={styles.nameText}>Street : {listData.address.street}</Text> : null}
                    {listData.address.city ? <Text style={styles.nameText}>City : {listData.address.city}</Text> : null}
                    {listData.address.zipcode ? <Text style={styles.nameText}>Zipcode : {listData.address.zipcode}</Text> : null}
                    <Text style={styles.personalText}>Map Details</Text>
                    {listData.address.geo.lat ? <Text style={styles.nameText}>Latitude : {listData.address.geo.lat}</Text> : null}
                    {listData.address.geo.lng ? <Text style={styles.nameText}>Longitude : {listData.address.geo.lng}</Text> : null}
                </View>
            ) : null}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    personalText: {
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '600',
        color: 'blue',
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginBottom: 10
    },
    nameText: {
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '600',
        color: 'red',
        textAlign: 'center',
        marginBottom: 10
    }
});

export default Details;