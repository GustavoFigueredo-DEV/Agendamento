import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { TextInput } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.presentation}>
          <Text style={styles.TextPresentation}>Encontre seu médico</Text>
          <Text style={styles.subTextPresentation}>Agende sua consulta com o profissional que você mais precisa</Text>
        </View>

        <View style={styles.searchBarFilterButtonGroup}>
          <TextInput
            label="Pesquisar agendamentos"
            mode="outlined"
            style={styles.searchBar}
          />
          <View style={styles.filterButton}>
            <TouchableOpacity style={styles.button}>
              <Entypo name="list" size={26} color="gray" />
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.agendamentoCardContainer}>
          <View style={styles.agendamentoCard}>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 60,
    alignItems: "center",
  },
  presentation: {
    gap: 8,
    backgroundColor: "#00a6ffff",
    padding: 20,
    borderRadius: 10,
    width: "95%"
  },
  TextPresentation: {
    color: "#fff",
    fontSize: 25,
    fontWeight: 600
  },
  subTextPresentation: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 400
  },

  //SEARCH BAR
  searchBarFilterButtonGroup: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    width: "95%",
    paddingTop: 30
  },
  searchBar: {
    width: "85%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  filterButton: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 4,
    borderColor: "gray"
  },

  //CARDS DE AGENDAMENTO
});
