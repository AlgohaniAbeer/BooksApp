import React from 'react';
import { StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements'
import BooksList from './component/BooksList';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header
        containerStyle={{
          backgroundColor: '#6ab040'}}
        centerComponent={{ text: 'Books', style: { color: '#fff',fontSize:25 }
  }}
          rightComponent={{  text: 'Zain', style: { color: '#fff',fontSize:20 }
  }}
      />
      <ScrollView
        style={styles.container}>

        <BooksList/>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
