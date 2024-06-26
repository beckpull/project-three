
import { ScrollView, View, StyleSheet } from 'react-native';
import Workouts from '../../components/searchResults/ExerciseResults';
import prototypeObject from '../../components/searchResults/WorkoutsJSON';

export default SearchByMuscleeScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Workouts workouts={prototypeObject} />

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
   
});
