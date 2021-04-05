import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitSection = () => {
        if (email == '') {
            Alert.alert("Email Address", "Please enter Email Address", [{ text: "OK" }])
        }
        else if (password == '') {
            Alert.alert("Password", "Please enter Password", [{ text: "OK" }])
        }
        else if (email != 'ishankgupta1may@gmail.com') {
            Alert.alert("Email Address", "Please enter valid Email Address", [{ text: "OK" }])
        }
        else if (password != '1234') {
            Alert.alert("Password", "Please enter valid Password", [{ text: "OK" }])
        }
        else {
            props.navigation.navigate('List');
        }
    };
    return (
        <KeyboardAvoidingView>
            <TextInput
                value={email}
                onChangeText={val => setEmail(val)}
                editable={true}
                keyboardType="email-address"
                style={styles.emailAddressText}
                placeholder="Email Address"
                placeholderTextColor="white"
            />
            <TextInput
                value={password}
                onChangeText={val => setPassword(val)}
                editable={true}
                style={styles.emailAddressText}
                placeholder="Password"
                placeholderTextColor="white"
                secureTextEntry={true}
                textContentType="password"
                autoCompleteType="password"
            />
            <TouchableOpacity onPress={() => submitSection()}>
                <View style={styles.submitView}>
                    <Text style={styles.submitText}>SUBMIT</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    emailAddressText: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'grey',
        textAlign: 'center',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '600',
        borderRadius: 5,
        backgroundColor: 'grey',
        color: 'white',
        marginBottom: 15
    },
    submitView: {
        width: '75%',
        height: 40,
        alignSelf: 'center',
        backgroundColor: 'blue',
        borderRadius: 5,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'blue'
    },
    submitText: {
        textAlign: 'center',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '600',
        color: 'white',
        marginTop: 7
    }
});

export default Login;