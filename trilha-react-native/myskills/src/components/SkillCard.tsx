import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}
export default function SkillCard({skill, ...rest}: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={0.5} {...rest}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonSkill: {
    marginVertical: 10,
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    borderRadius: 20,
  },
});
