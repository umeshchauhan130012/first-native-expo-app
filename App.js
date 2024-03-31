import { StyleSheet, View } from 'react-native';
import Header from './src/components/header';
//import Footer from './src/components/footer';
import TopReels from './src/components/topReels';
import { TopNews } from './src/components/topNews';
import TabViewExample from './src/components/tabCustom';

export default function App() {
  return (
    <View style={styles.appwrapper}>
      <Header />
      <View style={styles.bodycontainer}>
        <TopReels />
        <TopNews />
        <TabViewExample />
      </View>
      {/* <Footer /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  appwrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  bodycontainer: {
    flex: 1,
    backgroundColor: '#FFF8F9',
  },
});    
