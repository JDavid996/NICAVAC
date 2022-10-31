import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '../../../database/firebase';

const CowsList_screen = (props) => {

    const [animals, setAnimals] = useState([]);

    const cattle_id = props.route.params.cattle_id

    useEffect(() => {
        firebase.db.collection('animals').onSnapshot((querySnapshot) => {
            const animals = [];
            querySnapshot.docs.forEach((doc) => {
                const { animal_code, animal_name, animal_generer, animal_birth, animal_cattle } = doc.data();
                if ((animal_generer === 'H') && (animal_cattle === cattle_id)) {
                    animals.push({
                        animal_id: doc.id,
                        animal_code,
                        animal_name,
                        animal_generer,
                        animal_birth,
                        animal_cattle,
                    });
                }

            });
            setAnimals(animals);
        });
    }, []);

    return (
        <ScrollView style={styles.container}>
            {animals.map((animal) => {
                return (
                    <ListItem style={styles.list} key={animal.animal_id}
                        onPress={() => props.navigation.navigate('AnimalDetails_screen', {
                            animal_id: animal.animal_id
                        })}>
                        <Avatar
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/1660/1660750.png',
                            }}
                        />
                        <ListItem.Content>
                            <ListItem.Title style={{ fontWeight: "bold" }}>{animal.animal_name}</ListItem.Title>
                            <ListItem.Subtitle>Código: {animal.animal_code}</ListItem.Subtitle>
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
        backgroundColor: '#346a4a',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        width: '50%',
        alignSelf: 'center',
    },
    list: {
        borderRadius: 10,
    }
})

export default CowsList_screen;