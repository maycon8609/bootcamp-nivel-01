import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response);
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post('project', {
      title: "chat node",
      owner: "maycon silva"
    });

    setProjects([...projects, response.data]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <View style={styles.project}>
              <Text style={styles.title}>{project.title}</Text>
              <Text style={styles.owner}>{project.owner}</Text>
            </View>
          )}
        />

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },

  project: {
    margin: 5,
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between'
  },

  title: {
    color: '#505050',
    fontSize: 30,
  },

  owner: {
    color: '#707070'
  },

  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});