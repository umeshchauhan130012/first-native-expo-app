import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function TopReels() {
  const reelsArray = [
    {
        "title": "Ranjani",
        "image": "https://i.ibb.co/zVsj8Rv/1rl.jpg",
        "links": "/",
    },
    {
        "title": "Shikha",
        "image": "https://i.ibb.co/kQCdXMZ/2rl.jpg",
        "links": "/",
    },
    {
        "title": "Sanjana",
        "image": "https://i.ibb.co/Jxd3GMZ/3rl.jpg",
        "links": "/",
    },
    {
        "title": "Pinki",
        "image": "https://i.ibb.co/yn1qtqZ/4rl.jpg",
        "links": "/",
    },
    {
        "title": "Muskan",
        "image": "https://i.ibb.co/JjQTyDS/5rl.jpg",
        "links": "/",
    },
    {
        "title": "Anjali",
        "image": "https://i.ibb.co/sPKh5yX/6rl.jpg",
        "links": "/",
    },
    {
        "title": "Ragni",
        "image": "https://i.ibb.co/1nQKtWC/7rl.jpg",
        "links": "/",
    }
  ];
  return (
    <View style={styles.reelsWrapper}>
        <Text style={styles.quickTitle}>Quick Reads<Link href="/">Link</Link></Text>
        <View style={styles.quickSlideContain}>
            <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                {reelsArray.map((item, ind) => (
                    <View key={ind} style={[styles.itemReapeter, ind === 0 && styles.firstReelsItem, ind === reelsArray.length - 1 && styles.lastReelsItem]}>
                        <View style={styles.loopImg}>
                            <Image style={styles.repeatItemImage}  source={{ uri: item.image}} />
                        </View>
                        <Text style={styles.titleReapeter}>{item.title}</Text> 
                    </View> 
                    )
                )}  
            </ScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    quickTitle: {
      fontSize: 20,
      fontWeight: '600',
      paddingHorizontal: 16,
      paddingBottom: 5,
    },
    loopImg : {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderStyle: 'dotted',
        borderWidth: 2,
        borderColor: 'red',
    },
    repeatItemImage: {
        width: 66,
        height: 66,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff',
    },
    itemReapeter: {
        width: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
    },
    firstReelsItem: {
        width: 90,
        paddingLeft: 15,
    },
    lastReelsItem: {
        width: 90,
        paddingRight: 15,
    },
    quickSlideContain:{
        paddingVertical: 5,
    },
    titleReapeter: {
        textAlign: 'center',
        display: 'flex',
        margin: 0,
        fontSize: 13,
        color: '#575757',
        textTransform: 'uppercase',
        fontWeight: '600',
        paddingTop: 5,
    }
}); 