import React, {useState} from 'react';
import { View, Text, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { API_BASE } from '../../services/api';

export default function GradeForm({ route, navigation }) {
  const { student, subjectId } = route.params;
  const [grade, setGrade] = useState(student.grade !== undefined && student.grade !== null ? String(student.grade) : '');
  const [loading, setLoading] = useState(false);

  const validate = (v) => {
    const n = parseFloat(v);
    if (isNaN(n)) return 'Informe uma nota numérica';
    if (n < 0 || n > 10) return 'A nota deve estar entre 0 e 10';
    return null;
  };

  const submit = async () => {
    const err = validate(grade);
    if (err) { Alert.alert('Erro', err); return; }
    setLoading(true);
    try {
      const payload = { student_id: student.id, subject_id: subjectId, grade: parseFloat(grade) };
      const res = await fetch(API_BASE + '/api/grades', { method: 'POST', headers: {'Content-Type':'application/json','x-dev-token':'dev-token'}, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error(await res.text());
      Alert.alert('Sucesso', 'Nota registrada');
      navigation.goBack();
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível salvar a nota');
    } finally { setLoading(false); }
  };

  return (
    <View style={{flex:1,padding:16}}>
      <Text style={{fontSize:18,marginBottom:8}}>Lançar nota — {student.name}</Text>
      <TextInput placeholder="0.0 - 10.0" keyboardType="numeric" value={grade} onChangeText={setGrade} style={{borderWidth:1,borderColor:'#ccc',padding:8,marginBottom:12}} />
      {loading ? <ActivityIndicator /> : <Button title="Salvar nota" onPress={submit} />}
    </View>
  );
}
