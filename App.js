import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,FlatList } from 'react-native';
import exercises from './assets/data/exercises.json';
import ExerciseListItem from './src/components/ExerciseListItem';



export default function App() {

  return (
    <View style={styles.container}>
      <FlatList 
        data = {exercises}
        contentContainerStyle = {styles.flatlistContainer}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({item})=> <ExerciseListItem item={item} />}
        
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    justifyContent: 'center',
    padding: 10,
    paddingTop: 70,
  },
  flatlistContainer:{
    gap: 5
  }
});
