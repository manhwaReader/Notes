import React, { useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link, useParams } from 'react-router-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';
import { displayDate } from "../Utils";

export default function Edit() {
    const [value, onChangeText] = React.useState('');
    const [title, onChangeTitle] = React.useState('');
    const currentDate = new Date();
    const timestamp = Date.now().toString();
    const textInputRef = React.createRef();
    const formattedTime = currentDate.toUTCString();
    const { key } = useParams();
    useEffect(() => {
        const loadNote = async () => {
            try {
                const item = JSON.parse(await AsyncStorage.getItem(key));
                console.log("item", item);
                onChangeTitle(item.note.title)
                onChangeText(item.note.value)
            } catch (error) {
                console.log("error", error);
            }            
        }
        loadNote()
    }, [])
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
                    <Text style={styles.title}>Edit Note</Text>
                    <TouchableOpacity onPress={ async () => {
                        const note = {
                            title: title,
                            value: value,
                            datetime: formattedTime
                        };
                        try {
                            await AsyncStorage.removeItem(key)
                            await AsyncStorage.setItem(timestamp, JSON.stringify({note}));
                            textInputRef.current.blur();
                        } catch (error) {
                            console.log(error)
                        }
                    }}>
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
                        editable
                        multiline
                        ref={textInputRef}
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