import { useLocalSearchParams } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import exercises from '../../assets/data/exercises.json';
import {Stack} from 'expo-router'

export default function ExerciseDetailsScreen() {
    const params = useLocalSearchParams()

    const exercise = exercises.find(item=> item.name === params.name)
    if (!exercise){
        return <Text>Exercise not found</Text>
    }

    return (
        <View style={styles.container}>

          <Stack.Screen options={{title: exercise.name}} />

            <Text style= {styles.exerciseName}>
            {exercise.name}
          </Text>
          <Text style= {styles.exerciseSubtitle}>
            {exercise.muscle} | {exercise.equipment}
          </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
    },
    exerciseName:{
        fontSize: 20,
        fontWeight: '500',
      },
      exerciseSubtitle:{
        color: 'dimgray',
        textTransform: 'capitalize'
      }
})