import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  TextInput,
  Text,
  SafeAreaView,
} from 'react-native';
import {Button} from '../components/Button';
import SkillCard from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
  date?: Date; // Opcional
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    // O nome handle é utilizado quando a função é disparada por uma interação do usuário
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    setMySkills(oldState => [...oldState, data]);
  }
  function handleAddRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(skill => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGretting('Good morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good afternoon');
    } else {
      setGretting('Good night');
    }
  }, [mySkills]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Júnior</Text>

      <Text style={styles.gretting}>{gretting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button title="Add" onPress={handleAddNewSkill} />

      <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleAddRemoveSkill(item.id)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  gretting: {
    color: 'white',
  },
});
