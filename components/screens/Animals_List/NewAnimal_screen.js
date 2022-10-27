import React, { useState } from 'react';
import { View, ScrollView, TextInput, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import firebase from '../../../database/firebase';

const NewAnimal_screen = (props) => {

    const initialState = {
        animal_name: '',
        animal_generer: '',
        animal_race: '',
        animal_birth: '',
        animal_weight: '',
        animal_own: firebase.authentication.currentUser.uid,
    };

    const [ state, setState ] = useState (initialState);

    const handleChangeText = (value, animal_name) => {
        setState ({ ...state, [animal_name]: value});
    };

    const selectGenererText = (value, animal_generer) => {
        setState ({...state, [animal_generer]: value});
    }

    const selectRaceText = (value, animal_race) => {
        setState ({...state, [animal_race]: value});
    }

    const selectWeightText = (value, animal_weight) => {
        setState ({...state, [animal_weight]: value});
    }

    const [date, setDate] = useState(new Date);

    const selectDate = (value, animal_birth) => {
        setDate ({...state, [animal_birth]: value});
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
        });
    };

    const showDatePicker = () => {
        showMode('date');
    };

    const newAnimal = async () => {
        if ( (state.animal_name === '') ){
            alert ( 'Complete los campos' );
        } else {
            try {
                await firebase.db.collection ( 'animals' ).add ({
                    animal_name: state.animal_name,
                    animal_race: state.animal_race,
                    animal_own: state.animal_own,
                    animal_generer: state.animal_generer,
                    animal_birth: state.animal_birth,
                    animal_weight: state.animal_weight,
                });
                props.navigation.navigate ( 'Category_screen' );
            } catch ( error ){
                console.log ( error )
            }
        }
    };


    return (
        <ScrollView style= { styles.container }>
            <View style={{alignSelf: 'center', marginBottom: 10}}>
                <Text style={{fontWeight: 'bold', fontSize: 20, color: '#346a4a', justifyContent: 'center'}}>COMPLETE TODOS LOS CAMPOS</Text>
            </View>

            <View style= { styles.inputGroup }>
                <Text style={{fontSize: 18, marginLeft: 5}}>Código del animal</Text>
                <TextInput
                    style={{fontSize: 16, borderBottomWidth: 1, borderLeftWidth: 1, borderBottomColor: '#bfbfbf', borderLeftColor: '#bfbfbf'}}
                    placeholder=' Código'
                    onChangeText={(value) => handleChangeText(value, 'animal_code')}
                    value={state.animal_name}
                />
            </View>

            <View style= { styles.inputGroup }>
            <Text style={{fontSize: 18, marginLeft: 5}}>Nombre del animal</Text>
                <TextInput
                    style={{fontSize: 16, borderBottomWidth: 1, borderLeftWidth: 1, borderBottomColor: '#bfbfbf', borderLeftColor: '#bfbfbf'}}
                    placeholder=' Nombre'
                    onChangeText={(value) => handleChangeText(value, 'animal_name')}
                    value={state.animal_name}
                />
            </View>

            <View style= { styles.inputGroup }>
            <Text style={{fontSize: 18, marginLeft: 5}}>Sexo</Text>
                <Picker
                    style={{backgroundColor:'#bfbfbf', borderRadius: 10}}
                    selectedValue= {state.animal_generer}
                    onValueChange={(value) => selectGenererText(value, 'animal_generer')}
                    value={state.animal_generer}
                    >
                    <Picker.Item label="Hembra" value="H" />
                    <Picker.Item label="Macho" value="M" />
                </Picker>
            </View>

            <View style= { styles.inputGroup }>
            <Text style={{fontSize: 18, marginLeft: 5}}>Raza</Text>
                <Picker
                    style={{backgroundColor:'#bfbfbf', borderRadius: 10}}
                    selectedValue={state.animal_race}
                    onValueChange={(value) => selectRaceText(value, 'animal_race')}
                    value={state.animal_race}
                    >
                    <Picker.Item label="Jersey" value="Jersey" />
                    <Picker.Item label="Holstein" value="Holstein" />
                    <Picker.Item label="Angus" value="Angus" />
                    <Picker.Item label="Hereford" value="Hereford" />
                    <Picker.Item label="Brahman" value="Brahman" />
                    <Picker.Item label="Brangus" value="Brangus" />
                    <Picker.Item label="Braford" value="Braford" />
                    <Picker.Item label="Limousin" value="Limousin" />
                    <Picker.Item label="Criollo" value="Criollo" />
                    <Picker.Item label="Otros" value="Otros" />
                </Picker>
            </View>

            <View>
            <Text style={{fontSize: 18, marginLeft: 5}}>Fecha de nacimiento</Text>
                <TouchableOpacity onPress={showDatePicker} title='Fecha de nacimiento'>
                    <View style={{justifyContent:'center', backgroundColor: '#bfbfbf', height: 45}}>
                        <Text style={{fontSize: 16, marginLeft: 6}}>Seleccione una fecha</Text>
                    </View>
                </TouchableOpacity>
                <Text style={{fontSize: 18}} onChangeText={(value) => selectDate(value, 'animal_birth')} 
                value={state.animal_birth=date}>Fecha seleccionada: {date.toLocaleDateString()}</Text>
            </View>

            <TouchableOpacity style={styles.btnL} onPress={() => newAnimal()}>
                <View>
                    <Text style={{textAlign:'center', fontSize:18, color:'#ffffff'}}>Agregar Animal</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 10,
    },
    inputGroup: {
        flex: 1,
        marginBottom: 20
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
});

export default NewAnimal_screen;