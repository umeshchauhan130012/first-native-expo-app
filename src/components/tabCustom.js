import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const tabListContent = [
  {
      "title": "Ranjani",
      "image": "https://i.ibb.co/zVsj8Rv/1rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Shikha",
      "image": "https://i.ibb.co/kQCdXMZ/2rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Sanjana",
      "image": "https://i.ibb.co/Jxd3GMZ/3rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Pinki",
      "image": "https://i.ibb.co/yn1qtqZ/4rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Muskan",
      "image": "https://i.ibb.co/JjQTyDS/5rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Anjali",
      "image": "https://i.ibb.co/sPKh5yX/6rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Ragni",
      "image": "https://i.ibb.co/1nQKtWC/7rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  }
  ];
const tabListContent2 = [
  {
      "title": "Ranjani",
      "image": "https://i.ibb.co/zVsj8Rv/1rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Shikha",
      "image": "https://i.ibb.co/kQCdXMZ/2rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Sanjana",
      "image": "https://i.ibb.co/Jxd3GMZ/3rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Pinki",
      "image": "https://i.ibb.co/yn1qtqZ/4rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Muskan",
      "image": "https://i.ibb.co/JjQTyDS/5rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Anjali",
      "image": "https://i.ibb.co/sPKh5yX/6rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Ragni",
      "image": "https://i.ibb.co/1nQKtWC/7rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  }
  ];
const tabListContent3 = [
  {
      "title": "Ranjani",
      "image": "https://i.ibb.co/zVsj8Rv/1rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Shikha",
      "image": "https://i.ibb.co/kQCdXMZ/2rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Sanjana",
      "image": "https://i.ibb.co/Jxd3GMZ/3rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Pinki",
      "image": "https://i.ibb.co/yn1qtqZ/4rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Muskan",
      "image": "https://i.ibb.co/JjQTyDS/5rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Anjali",
      "image": "https://i.ibb.co/sPKh5yX/6rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Ragni",
      "image": "https://i.ibb.co/1nQKtWC/7rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  }
  ];
const tabListContent4 = [
  {
      "title": "Ranjani",
      "image": "https://i.ibb.co/zVsj8Rv/1rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Shikha",
      "image": "https://i.ibb.co/kQCdXMZ/2rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Sanjana",
      "image": "https://i.ibb.co/Jxd3GMZ/3rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Pinki",
      "image": "https://i.ibb.co/yn1qtqZ/4rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Muskan",
      "image": "https://i.ibb.co/JjQTyDS/5rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Anjali",
      "image": "https://i.ibb.co/sPKh5yX/6rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Ragni",
      "image": "https://i.ibb.co/1nQKtWC/7rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  }
  ];
const tabListContent5 = [
  {
      "title": "Ranjani",
      "image": "https://i.ibb.co/zVsj8Rv/1rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Shikha",
      "image": "https://i.ibb.co/kQCdXMZ/2rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Sanjana",
      "image": "https://i.ibb.co/Jxd3GMZ/3rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Pinki",
      "image": "https://i.ibb.co/yn1qtqZ/4rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Muskan",
      "image": "https://i.ibb.co/JjQTyDS/5rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Anjali",
      "image": "https://i.ibb.co/sPKh5yX/6rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Ragni",
      "image": "https://i.ibb.co/1nQKtWC/7rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  }
  ];
const tabListContent6 = [
  {
      "title": "Ranjani",
      "image": "https://i.ibb.co/zVsj8Rv/1rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Shikha",
      "image": "https://i.ibb.co/kQCdXMZ/2rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Sanjana",
      "image": "https://i.ibb.co/Jxd3GMZ/3rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Pinki",
      "image": "https://i.ibb.co/yn1qtqZ/4rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Muskan",
      "image": "https://i.ibb.co/JjQTyDS/5rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Anjali",
      "image": "https://i.ibb.co/sPKh5yX/6rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
  {
      "title": "Ragni",
      "image": "https://i.ibb.co/1nQKtWC/7rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  }
  ];

const TextWithLineClamp = ({ text, numberOfLines }) => {
  return (
      <Text numberOfLines={numberOfLines} style={styles.ListContent} >
        {text}
      </Text>
  );
};

const FirstRoute = () => (
  <ScrollView style={styles.scrollView} verticle={false}>
    <View style={styles.tabContainer}>
      {tabListContent.map((item, ind) => (
      <View key={ind} style={styles.tabItemList}>
        <View>
          <Image style={styles.tabItemListImgMain} source={{ uri: item.image}} />
        </View>
        <View style={styles.tabItemListContent}>
          <Text style={styles.ListContentTitle}>{item.title}</Text>
          <TextWithLineClamp key={ind} text={item.content} numberOfLines={2} />
        </View>
      </View>
      ))}
    </View>
  </ScrollView> 
);
const SecondRoute = () => (
    <ScrollView style={styles.scrollView} verticle={false}>
    <View style={styles.tabContainer}>
      {tabListContent2.map((item, ind) => (
      <View key={ind} style={styles.tabItemList}>
        <View>
          <Image style={styles.tabItemListImgMain} source={{ uri: item.image}} />
        </View>
        <View style={styles.tabItemListContent}>
          <Text style={styles.ListContentTitle}>{item.title}</Text>
          <TextWithLineClamp key={ind} text={item.content} numberOfLines={2} />
        </View>
      </View>
      ))}
    </View>
  </ScrollView> 
);
const ThirdRoute = () => (
    <ScrollView style={styles.scrollView} verticle={false}>
    <View style={styles.tabContainer}>
      {tabListContent3.map((item, ind) => (
      <View key={ind} style={styles.tabItemList}>
        <View>
          <Image style={styles.tabItemListImgMain} source={{ uri: item.image}} />
        </View>
        <View style={styles.tabItemListContent}>
          <Text style={styles.ListContentTitle}>{item.title}</Text>
          <TextWithLineClamp key={ind} text={item.content} numberOfLines={2} />
        </View>
      </View>
      ))}
    </View>
  </ScrollView> 
);
const FourRoute = () => (
    <ScrollView style={styles.scrollView} verticle={false}>
    <View style={styles.tabContainer}>
      {tabListContent4.map((item, ind) => (
      <View key={ind} style={styles.tabItemList}>
        <View>
          <Image style={styles.tabItemListImgMain} source={{ uri: item.image}} />
        </View>
        <View style={styles.tabItemListContent}>
          <Text style={styles.ListContentTitle}>{item.title}</Text>
          <TextWithLineClamp key={ind} text={item.content} numberOfLines={2} />
        </View>
      </View>
      ))}
    </View>
  </ScrollView> 
);
const FiveRoute = () => (
    <ScrollView style={styles.scrollView} verticle={false}>
    <View style={styles.tabContainer}>
      {tabListContent5.map((item, ind) => (
      <View key={ind} style={styles.tabItemList}>
        <View>
          <Image style={styles.tabItemListImgMain} source={{ uri: item.image}} />
        </View>
        <View style={styles.tabItemListContent}>
          <Text style={styles.ListContentTitle}>{item.title}</Text>
          <TextWithLineClamp key={ind} text={item.content} numberOfLines={2} />
        </View>
      </View>
      ))}
    </View>
  </ScrollView> 
);
const SixRoute = () => (
    <ScrollView style={styles.scrollView} verticle={false}>
    <View style={styles.tabContainer}>
      {tabListContent6.map((item, ind) => (
      <View key={ind} style={styles.tabItemList}>
        <View>
          <Image style={styles.tabItemListImgMain} source={{ uri: item.image}} />
        </View>
        <View style={styles.tabItemListContent}>
          <Text style={styles.ListContentTitle}>{item.title}</Text>
          <TextWithLineClamp key={ind} text={item.content} numberOfLines={2} />
        </View>
      </View>
      ))}
    </View>
  </ScrollView> 
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  four: FourRoute,
  five: FiveRoute,
  six: SixRoute,
});

export default function TabViewExample() {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'india' },
    { key: 'second', title: 'international' },
    { key: 'third', title: 'bihar' },
    { key: 'four', title: 'entertainment' },
    { key: 'five', title: 'lifestyle' },
    { key: 'six', title: 'sports' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={props => <TabBar {...props} 
      style={{backgroundColor: '#fff',marginTop: 5,}} 
      tabStyle={{ width: 'auto',minHeight: 30,padding: 5,backgroundColor: '#fff',margin: 0,marginBottom: 2, }}
      indicatorStyle={{ backgroundColor: 'red' }}
      labelStyle={{ color: '#000',marginHorizontal: 10,fontSize: 16,textTransform: 'capitalize' }}
      activeColor={'red'}
      scrollEnabled={true}/>}
    />
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff8f9',
    padding: 15,
  },
  tabItemList: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 5,
  },
  tabItemListContent: {
    paddingHorizontal: 10,
    flex: 1,
  },
  ListContentTitle: {
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 5,
    lineHeight: 17,
  },
  ListContent: {
    fontSize: 15,
  },
  tabItemListImgMain: {
    height: 75,
    width: 124,
    borderRadius: 4,
  },
});