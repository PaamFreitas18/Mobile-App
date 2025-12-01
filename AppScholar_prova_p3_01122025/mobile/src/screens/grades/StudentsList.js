import React, {useCallback, useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { fetchJSON, DEV_HEADERS } from '../../services/api';

export default function StudentsList({ route, navigation }) {
  const { subjectId, subjectName } = route.params;
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const data = await fetchJSON(`/api/grades/subjects/${subjectId}/students`, { headers: DEV_HEADERS });
      setStudents(data);
    } catch (e) {
      setStudents([]);
    } finally { setLoading(false); }
  };

  useFocusEffect(useCallback(()=>{ load(); }, [subjectId]));

  return (
    <View style={{flex:1,padding:16}}>
      <Text style={{fontSize:20,marginBottom:12}}>Alunos — {subjectName}</Text>
      {loading ? <ActivityIndicator /> : null}
      <FlatList data={students} keyExtractor={i=>String(i.id)} renderItem={({item})=>(
        <TouchableOpacity onPress={()=>navigation.navigate('GradeForm',{student:item,subjectId})} style={{padding:12,borderBottomWidth:1,borderColor:'#ddd',flexDirection:'row',justifyContent:'space-between'}}>
          <Text>{item.name}</Text>
          <Text>{item.grade !== null && item.grade !== undefined ? String(item.grade) : '-'}</Text>
        </TouchableOpacity>
      )} ListEmptyComponent={()=><Text>Nenhum aluno encontrado.</Text>} />
    </View>
  );
}
