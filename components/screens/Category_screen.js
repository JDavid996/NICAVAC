import React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Category_screen = (props) => {

    const cattle_id = props.route.params.cattle_id

    return (
        <ScrollView style={styles.container}>
            <View>
                <View style={styles.containerOptions}>

                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('CowsList_screen', { cattle_id })}>
                        <Avatar size={100}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/1660/1660750.png',
                            }}
                        />
                        <Text style={{ textAlign: 'center', fontSize: 25, color: '#242424' }}>Vacas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('BullsList_screen', { cattle_id })}>
                        <Avatar size={100}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/3819/3819549.png',
                            }}
                        />
                        <Text style={{ textAlign: 'center', fontSize: 25, color: '#242424' }}>Toros</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}>
                        <Avatar size={100}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/128/2298/2298491.png',
                            }}
                        />
                        <Text style={{ textAlign: 'center', fontSize: 25, color: '#242424' }}>Terneros</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnAdd}
                    onPress={() => props.navigation.navigate('NewAnimal_screen', { cattle_id })}>
                    <Text style={{ textAlign: 'center', fontSize: 18, color: '#ffffff', fontWeight: 'bold' }}>Agregar Animal</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#ffffff'
    },
    containerOptions: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 10,
    },
    btn: {
        borderWidth: 2,
        borderColor: '#242424',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        marginRight: 20,
        marginLeft: 20,
        alignItems: 'center'
    },
    btnAdd: {
        backgroundColor: '#346a4a',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        width: '65%',
        alignSelf: 'center',
    }
})
export default Category_screen;