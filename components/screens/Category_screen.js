import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Button, StyleSheet, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '../../database/firebase';

const Category_screen = ( props ) => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <View style={styles.containerOptions}>

                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('CowsList_screen')}>
                        <Avatar size={100}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/1660/1660750.png',
                            }}
                        />
                        <Text style={{textAlign:'center', fontSize:25, color:'#242424'}}>Vacas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('BullsList_screen')}>
                        <Avatar size={100}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/3819/3819549.png',
                            }}
                        />
                        <Text style={{textAlign:'center', fontSize:25, color:'#242424'}}>Toros</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}>
                        <Avatar size={100}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/128/2298/2298491.png',
                            }}
                        />
                        <Text style={{textAlign:'center', fontSize:25, color:'#242424'}}>Terneros</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnAdd} onPress={()=>props.navigation.navigate('NewAnimal_screen')}>
                    <Text style={{textAlign:'center', fontSize:18, color:'#ffffff', fontWeight:'bold'}}>Agregar Animal</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create ({
    container: {
        padding: 30,
        backgroundColor: '#ffffff'
    },
    containerOptions: {
        flex: 1,
        justifyContent:'center',
        marginBottom: 10,
    },
    btn:{
        borderWidth: 2,
        borderColor: '#242424',
        padding:10,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center'
    },
    btnAdd:{
        backgroundColor:'#346a4a',
        padding:10,
        borderRadius: 10,
        justifyContent: 'center',
        width: '65%',
        alignSelf: 'center',
    }
})
export default Category_screen;