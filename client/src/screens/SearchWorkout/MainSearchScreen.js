import {React, useContext} from 'react';
import { Text, Pressable, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { I18nContext } from '../../I18n';

export default MainSearchScreen = ({ navigation }) => {
    const { i18n } = useContext(I18nContext);
    return (
        <View style={styles.container}>
           
            {/* Search an Exercise Title */}
            <View>
                <Text style={styles.title}>{i18n.t('Search an')}</Text>
                <Text style={styles.title}>{i18n.t('Exercise by')}</Text>
            </View>
            
            {/* Button container for two search options */}
            <View style={styles.buttonContainer}>
               
                {/* Button to search for an exercise by the exercise name */}
                <Pressable style={styles.button} onPress={() => navigation.navigate('SearchByNameScreen')}>
                    <Text style={styles.buttonText}>{i18n.t('Name')}</Text>
                </Pressable>
               
                {/* Button to search for an exercise by the target muscle */}
                <Pressable style={styles.button} onPress={() => navigation.navigate('SearchByMuscleScreen')}>
                    <Text style={styles.buttonText}>{i18n.t('Target Muscle')}</Text>
                </Pressable>

            </View>

            <StatusBar style="auto" />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 250,
    },
    button: {
        width: 100,
        height: 90,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginHorizontal: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
    title: {
        lineHeight: 40,
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    small: {
        fontSize: 20,
    },
});
