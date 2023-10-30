import React, { useState, useEffect } from "react";
import { FlatList, View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import styles from '../styles';
import { displayDate } from '../Utils';
import { Link } from 'react-router-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function NotesList() {
    const [data, setData] = useState([]);
    const loadNotes = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            if (keys) {
                const results = await AsyncStorage.multiGet(keys);
                let parsedNotes = results.map((result) => {
                    const key = result[0];
                    const value = JSON.parse(String(result[1]));
                    return { key, ...value };
                  });
                parsedNotes = parsedNotes.sort()
                setData(parsedNotes);
            }
        } catch (error) {
            console.error('Error retrieving data:', error);
        }
    };

    useEffect(() => {
        const loadNotes = async () => {
            try {
                const keys = await AsyncStorage.getAllKeys();
                if (keys) {
                    const results = await AsyncStorage.multiGet(keys);
                    let parsedNotes = results.map((result) => {
                        const key = result[0];
                        const value = JSON.parse(String(result[1]));
                        return { key, ...value };
                      });
                    parsedNotes = parsedNotes.sort()
                    setData(parsedNotes);
                }
            } catch (error) {
                console.error('Error retrieving data:', error);
            }
        };

        loadNotes();
    }, []); // The empty dependency array ensures this effect runs only once.

    return (
        <SafeAreaProvider>
            <View style={styles.containerTopBar}>
                <View style={styles.topBar}>
                    {/* <TouchableOpacity onPress={() => console.log('Back button pressed')}>
                        <Link to="/">
                            <View>
                                <Text style={styles.buttonText}>Back</Text>
                            </View>
                        </Link>
                    </TouchableOpacity> */}
                    <Text style={styles.title}>Notes List</Text>
                </View>
                <View style={styles.containerList}>
                    <FlatList
                        data={data}
                        style={{margin: 10}}
                        renderItem={({ item }) => (
                            <Link to= {"/Edit/" + item.key} >
                                <View style={styles.item}>
                                    <Text style={styles.titleText}>
                                        {item.note.title}
                                    </Text>
                                    <Text style={styles.basicText}>
                                        {item.note.value.length > 60 ? item.note.value.split(item.note.value[60])[0] + '...' : item.note.value}
                                        {'\n'}
                                        {displayDate(item.note.datetime)}
                                    </Text>
                                    <View style={styles.delButton}>
                                        <Pressable onPress={ async () => {
                                            try {
                                                await AsyncStorage.removeItem(item.key)
                                                loadNotes()
                                            } catch (error) {
                                                console.log("error", error);
                                            }
                                        }}>
                                            <Image 
                                                source={require('../assets/delete.png')} 
                                                style={{width:25, height:25}}
                                            />
                                        </Pressable>
                                    </View>
                                </View>
                            </Link>
                        )}
                        keyExtractor={(item) => item.key}
                    />
                    <Link to="/Add">
                        <View style={styles.addButton}>
                            <Image source={require('../assets/add.png')} style={{height: 70, width: 70}} />
                        </View>
                    </Link>
                </View>
            </View>
        </SafeAreaProvider>
    );
}
