import React from 'react';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import Um from './src/screens/Um';
import Dois from './src/screens/Dois';
import Tres from './src/screens/Tres';
import Quatro from './src/screens/Quatro';
import Cinco from './src/screens/Cinco';
import Seis from './src/screens/Seis';
import Sete from './src/screens/Sete';
import Oito from './src/screens/Oito';
import Nove from './src/screens/Nove';
import Dez from './src/screens/Dez';
import Onze from './src/screens/Onze';
import ViaCep from './src/screens/ViaCep';
import CepsList from './src/screens/CepsList';
import StackA from './src/screens/StackA';
import StackB from './src/screens/StackB';
import { CepProvider } from './src/contexts/CepContext';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function StackDemo() {
  return (
    <Stack.Navigator initialRouteName="StackA">
      <Stack.Screen name="StackA" component={StackA} options={{ title: 'Stack A' }} />
      <Stack.Screen name="StackB" component={StackB} options={{ title: 'Stack B' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <CepProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Onze"
          screenOptions={({ route }) => ({
            headerTitleAlign: 'center',
            drawerIcon: ({ color, size }) => {
              const map: Record<string, string> = {
                'Um': 'grid-outline',
                'Dois': 'grid-outline',
                'Tres': 'grid-outline',
                'Quatro': 'image-outline',
                'Cinco': 'hand-left-outline',
                'Seis': 'person-outline',
                'Sete': 'log-in-outline',
                'Oito': 'lock-closed-outline',
                'Nove': 'list-outline',
                'Dez': 'toggle-outline',
                'Onze': 'home-outline',
                'ViaCep': 'location-outline',
                'CepsList': 'list-circle-outline',
                'StackDemo': 'layers-outline',
              };
              const icon = map[route.name] ?? 'apps-outline';
              return <Ionicons name={icon as any} size={size} color={color} />;
            },
          })}
        >
          <Drawer.Screen name="Onze" component={Onze} options={{ title: 'Home (Ex. 11)' }} />
          <Drawer.Screen name="Um" component={Um} options={{ title: 'Ex. 1 – Colunas Verticais' }} />
          <Drawer.Screen name="Dois" component={Dois} options={{ title: 'Ex. 2 – Row interna' }} />
          <Drawer.Screen name="Tres" component={Tres} options={{ title: 'Ex. 3 – Variação de cores' }} />
          <Drawer.Screen name="Quatro" component={Quatro} options={{ title: 'Ex. 4 – Imagem' }} />
          <Drawer.Screen name="Cinco" component={Cinco} options={{ title: 'Ex. 5 – Imagem como botão' }} />
          <Drawer.Screen name="Seis" component={Seis} options={{ title: 'Ex. 6 – Nome e Idade' }} />
          <Drawer.Screen name="Sete" component={Sete} options={{ title: 'Ex. 7 – Login básico' }} />
          <Drawer.Screen name="Oito" component={Oito} options={{ title: 'Ex. 8 – Confirmar Senha' }} />
          <Drawer.Screen name="Nove" component={Nove} options={{ title: 'Ex. 9 – Picker Perfil' }} />
          <Drawer.Screen name="Dez" component={Dez} options={{ title: 'Ex. 10 – Switch Logado' }} />
          <Drawer.Screen name="ViaCep" component={ViaCep} options={{ title: 'Lista 2 – Ex. 4 – ViaCEP' }} />
          <Drawer.Screen name="CepsList" component={CepsList} options={{ title: 'Lista 2 – Ex. 5 – Histórico CEPs' }} />
          <Drawer.Screen name="StackDemo" component={StackDemo} options={{ title: 'Lista 2 – Ex. 1 – Stack' }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </CepProvider>
  );
}
