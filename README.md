# 📱 Expo React Native - Listas 3 e 4

Projeto desenvolvido para a disciplina **Programação para Dispositivos Móveis I (Fatec DSPM)**.

Contém a implementação completa das **listas de exercícios 3 e 4**, organizadas em telas individuais e acessíveis via **Drawer Navigation**.

---

## 🚀 Estrutura do Projeto

```
.
├── App.tsx
├── types/
│   └── index.ts
├── screens/
│   ├── lista3/
│   │   ├── YoutubeButton.tsx
│   │   ├── DialerButton.tsx
│   │   ├── InstagramFatec.tsx
│   │   ├── ContactsC.tsx
│   │   ├── MediaHub.tsx
│   │   └── styles.ts
│   └── lista4/
│       ├── OrientationColors.tsx
│       ├── FlexDirectionResponsive.tsx
│       ├── StylesByOrientation.tsx
│       ├── LayoutImages.tsx
│       ├── NameList.tsx
│       └── styles.ts
└── declarations.d.ts
```

---

## 📦 Instalação

1. Clone o repositório ou extraia o `.zip`.
2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto:

```bash
npx expo start
```

---

## 📚 Dependências

```bash
# Navegação
npm i @react-navigation/native @react-navigation/drawer
npm i react-native-screens react-native-safe-area-context
npm i react-native-vector-icons

# Lista 3
npm i expo-contacts expo-image-picker expo-av

# Lista 4
npm i expo-screen-orientation
```

---

## ⚙️ Configuração do `app.json`

No arquivo `app.json`, defina:

```json
{
  "expo": {
    "orientation": "default"
  }
}
```

---

## 📋 Funcionalidades

### Lista 3
- Abrir YouTube em vídeo específico
- Abrir discador com número
- Abrir Instagram da Fatec Jacareí
- Listar contatos filtrados (iniciando com C e/ou primeiro nome)
- Acessar galeria e câmera (exibir, excluir imagens)

### Lista 4
- Mudar cor de fundo conforme orientação (portrait/landscape)
- Alterar dinamicamente `flexDirection`
- Alternar estilos por orientação
- Layout adaptado às orientações
- Entrada de nomes e exibição em lista

---

## 👨‍💻 Autor
Projeto desenvolvido para fins acadêmicos na Fatec.

---
