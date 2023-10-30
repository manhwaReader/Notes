import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from 'react-router-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';
import { displayDate } from "../Utils";

export default function Add() {
    const [value, onChangeText] = React.useState('');
    const [title, onChangeTitle] = React.useState('');
    const currentDate = new Date();
    const timestamp = Date.now().toString();
    const formattedTime = currentDate.toUTCString();
    const textInputRef = React.createRef();
    const saveNote = async () => {
        const note = {
            title: title,
            value: value,
            datetime: formattedTime
        };
        try {
            await AsyncStorage.setItem(timestamp, JSON.stringify({note}));
        } catch (error) {
            console.log(error)
        }
        textInputRef.current.blur();
    };
    return (
        <SafeAreaProvider>
            <KeyboardAvoidingView style={styles.containerTopBar}>
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={() => console.log('Back button pressed')}>
                    <Link to="/">
                        <View>
                            <Text style={styles.buttonText}>Back</Text>
                        </View>
                    </Link>
                    </TouchableOpacity>
                    <Text style={styles.title}>Add Note</Text>
                    <TouchableOpacity onPress={saveNote}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.input}>
                    <TextInput
                        editable
                        ref={textInputRef}
                        onChangeText={text => onChangeTitle(text)}
                        value={title}
                        placeholder="Title"
                        style={styles.titleText}
                    />
                    <Text style={styles.basicText}>{displayDate(formattedTime)}</Text>
                    <TextInput
                        ref={textInputRef}
                        editable
                        multiline
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        placeholder="Start typing here"
                        style={{marginTop: 20}}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaProvider>
    );
}