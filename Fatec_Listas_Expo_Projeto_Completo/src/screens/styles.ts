import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16, gap: 16 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap' },
  box: { width: 120, height: 120, borderRadius: 12 },
  input: { width: '90%', borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10 },
  card: { width: '92%', maxWidth: 360, borderWidth: 1, borderColor: '#eee', borderRadius: 12, padding: 16 },
  button: { paddingVertical: 12, paddingHorizontal: 18, borderRadius: 10, backgroundColor: '#222' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  title: { fontSize: 20, fontWeight: '700' },
});
