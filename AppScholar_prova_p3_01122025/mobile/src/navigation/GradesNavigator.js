import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SubjectsList from '../screens/grades/SubjectsList';
import StudentsList from '../screens/grades/StudentsList';
import GradeForm from '../screens/grades/GradeForm';
const Stack = createStackNavigator();
export default function GradesNavigator(){ return (<NavigationContainer><Stack.Navigator initialRouteName='SubjectsList'><Stack.Screen name='SubjectsList' component={SubjectsList} options={{title:'Disciplinas'}} /><Stack.Screen name='StudentsList' component={StudentsList} options={{title:'Alunos'}} /><Stack.Screen name='GradeForm' component={GradeForm} options={{title:'Lançar Nota'}} /></Stack.Navigator></NavigationContainer>); }
