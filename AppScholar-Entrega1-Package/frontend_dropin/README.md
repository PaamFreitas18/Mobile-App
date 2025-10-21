# App Scholar – Drop-in de Login (Expo/React Native)

Este pacote contém telas e serviço para adicionar **autenticação (Entrega 1)** ao seu app existente no Expo.

## Arquivos
- `App.js` (exemplo de navegação mínima)
- `screens/LoginScreen.js`
- `screens/Dashboard.js`
- `services/api.js`

## Como integrar ao seu repositório existente
1. Copie `screens/*` para o diretório de telas do seu projeto (ex.: `src/screens`).
2. Copie `services/api.js` para `src/services/api.js`.
3. Ajuste o `API_BASE` em `services/api.js` (ou defina `EXPO_PUBLIC_API_BASE` no `app.json`/`.env` do Expo).
4. Garanta que você tem **React Navigation** e **Axios** instalados:
   ```bash
   npx expo install react-native-screens react-native-safe-area-context
   npm i @react-navigation/native @react-navigation/stack axios
   ```
5. Integre as rotas no seu `App.js` (ou equivalente). Você pode usar o `App.js` deste drop-in como referência.
6. Rode o servidor da API (pasta `server`) e depois o app no Expo.

## Teste rápido
- Email: `admin@appscholar.dev`
- Senha: `123456`
