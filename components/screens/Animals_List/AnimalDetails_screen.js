import React, { useState, useEffect } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Text, View, Image, StyleSheet, ActivityIndicator } from "react-native";
import firebase from "../../../database/firebase";
import moment, { parseTwoDigitYear } from "moment/moment";

const AnimalDetails_screen = (props) => {

    const initialState = {
        animal_code: '',
        animal_name: '',
        animal_generer: '',
        animal_race: '',
        animal_birth: new Date(),
        animal_weight: '',
    };

    const [loading, setLoading] = useState(true)

    const [animal, setAnimal] = useState(initialState)

    const getAnimalById = async (animal_id) => {
        const dbRef = firebase.db.collection('animals').doc(animal_id)
        const doc = await dbRef.get();
        const animal = doc.data();
        setAnimal({
            ...animal,
            animal_id: doc.id
        })
        setLoading(false)
    }

    const date = moment(animal.animal_birth)
    const dateFormat = 'dddd Do MMMM YYYY'

    useEffect(() => {
        getAnimalById(props.route.params.animal_id)
    })

    if (loading) {
        return (
            <View>
                <ActivityIndicator size='large' color='#9e9e9e' />
            </View>
        )
    }

    const deleteAnimal = async () => {
        const dbRef = firebase.db.collection('animals').doc(props.route.params.animal_id)
        await dbRef.delete()
        props.navigation.navigate('CattlesList_screen')
    }

    return (
        <ScrollView>
            <View style={styles.containerLogo}>
                <Image
                    source={require('../../src/3819549.png')}
                />
            </View>

            <Text style={{ fontSize: 30, alignSelf: "center", fontWeight: "bold", marginBottom: 1 }}
            >{animal.animal_name}</Text>

            <Text style={{ fontSize: 18, alignSelf: "center", marginBottom: 10 }}
            >Código: {animal.animal_code}</Text>

            <View style={{ padding: 20, backgroundColor: "#d9d9d9", width: 375, borderRadius: 30, alignSelf: "center" }}>
                <Text style={{ fontSize: 18 }}
                >Fecha de nacimiento: {date.format(dateFormat)}</Text>
                <Text style={{ fontSize: 18 }}>Raza: {animal.animal_race}</Text>
                <Text style={{ fontSize: 18 }}>Peso: {animal.animal_weight}kg</Text>
            </View>

            <TouchableOpacity style={styles.btnL} onPress={() => deleteAnimal()}>
                <View>
                    <Text style={{ textAlign: 'center', fontSize: 18, color: '#ffffff' }}>Eliminar</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    textStyle: {
        padding: 10,
        alignSelf: "center"
    },
    btnL: {
        marginTop: 20,
        backgroundColor: '#f44336',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        width: '50%',
        alignSelf: 'center',
        marginBottom: 50
    },
});

export default AnimalDetails_screen;