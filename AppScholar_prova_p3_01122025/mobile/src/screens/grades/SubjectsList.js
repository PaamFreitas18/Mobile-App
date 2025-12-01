import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { fetchJSON, DEV_HEADERS } from '../../services/api';

export default function SubjectsList({ navigation }) {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchJSON('/api/grades/subjects', { headers: DEV_HEADERS })
      .then(data => { if (mounted) setSubjects(data); })
      .catch(()=> { if (mounted) setSubjects([]); })
      .finally(()=> { if (mounted) setLoading(false); });
    return () => mounted = false;
  }, []);

  return (
    <View style={{flex:1,padding:16}}>
      <Text style={{fontSize:20,marginBottom:12}}>Disciplinas ministradas</Text>
      {loading ? <ActivityIndicator /> : null}
      <FlatList data={subjects} keyExtractor={i=>String(i.id)} renderItem={({item})=>(
        <TouchableOpacity onPress={()=>navigation.navigate('StudentsList',{subjectId:item.id,subjectName:item.name})} style={{padding:12,borderBottomWidth:1,borderColor:'#ddd'}}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      )} ListEmptyComponent={()=><Text>Nenhuma disciplina encontrada.</Text>} />
    </View>
  );
}
