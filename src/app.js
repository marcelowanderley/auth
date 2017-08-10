import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBhiwcHw7uTW1LMfS4U93xgBGoRA-rkgMY',
            authDomain: 'authentication-54e6e.firebaseapp.com',
            databaseURL: 'https://authentication-54e6e.firebaseio.com',
            projectId: 'authentication-54e6e',
            storageBucket: 'authentication-54e6e.appspot.com',
            messagingSenderId: '185036747463'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Autentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
