import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { ListItem, Avatar, SearchBar } from 'react-native-elements';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '../../../database/firebase';

const BullsList_screen = ( props ) => {

    const [ animals, setAnimals ] = useState ([]);

    useEffect (() => {
        firebase.db.collection('animals').onSnapshot((querySnapshot) => {
            const animals =[];
            querySnapshot.docs.forEach((doc) => {
                const { animal_name, animal_own, animal_generer } = doc.data();
                if (animal_generer=='M'){
                    animals.push({
                        animal_id: doc.id,
                        animal_name,
                        animal_generer,
                        animal_own, 
                    });
                }
                
            });
            setAnimals(animals);
        });
    },[]);


    const AnimalDetails_screen= () => {
        props.navigation.push('AnimalDetails_screen');
        console.log()
    }

    return (
        
        <ScrollView style={styles.container}>
            <TextInput
                onChangeText={(text) => this.filterSearch(text)}
            />
            {animals.map((animal) => {
                return (
                    <ListItem style={styles.list} key={animal.animal_id} onPress={() => AnimalDetails_screen(animal.animal_id)}>
                        <Avatar
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/3819/3819549.png',
                            }}
                        />
                        <ListItem.Content>
                            <ListItem.Title style={{fontWeight: "bold"}}>{animal.animal_name}</ListItem.Title>
                            <ListItem.Subtitle>ID: {animal.animal_id}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                )
                })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#ffffff'
    },
    btnL: {
        marginTop: 20,
        backgroundColor:'#346a4a',
        padding:10,
        borderRadius: 10,
        justifyContent: 'center',
        width: '50%',
        alignSelf: 'center',
    },
    list: {
        borderRadius: 10,
    }
})

export default BullsList_screen;