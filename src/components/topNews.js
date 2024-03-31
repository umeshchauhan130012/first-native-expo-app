import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';

export const TopNews = () => {

const topNewsarray = [
    {
        "title": "आखिर अपने ही देश में क्यों 'बेगाने' होते जा रहे हैं",
        "image": "https://i.ibb.co/zVsj8Rv/1rl.jpg",
        "links": "/",
    },
    {
        "title": "आखिर अपने ही देश में क्यों 'बेगाने' होते जा रहे हैं",
        "image": "https://i.ibb.co/kQCdXMZ/2rl.jpg",
        "links": "/",
    },
    {
        "title": "आखिर अपने ही देश में क्यों 'बेगाने' होते जा रहे हैं",
        "image": "https://i.ibb.co/Jxd3GMZ/3rl.jpg",
        "links": "/",
    },
    {
        "title": "आखिर अपने ही देश में क्यों 'बेगाने' होते जा रहे हैं",
        "image": "https://i.ibb.co/yn1qtqZ/4rl.jpg",
        "links": "/",
    },
    {
        "title": "आखिर अपने ही देश में क्यों 'बेगाने' होते जा रहे हैं",
        "image": "https://i.ibb.co/JjQTyDS/5rl.jpg",
        "links": "/",
    },
    {
        "title": "आखिर अपने ही देश में क्यों 'बेगाने' होते जा रहे हैं",
        "image": "https://i.ibb.co/sPKh5yX/6rl.jpg",
        "links": "/",
    },
    {
        "title": "आखिर अपने ही देश में क्यों 'बेगाने' होते जा रहे हैं",
        "image": "https://i.ibb.co/1nQKtWC/7rl.jpg",
        "links": "/",
    },
    ];
    const TextWithLineClamp = ({ text, numberOfLines }) => {
        return (
            <Text numberOfLines={numberOfLines} style={styles.newsTitleReapeter} >
              {text}
            </Text>
        );
      };
  return (
    <View style={styles.topWrapper}>
        <View style={styles.newsTitleWrap}>
            <Text style={styles.newsTitle}>Top News</Text>
            <Text style={styles.newsTitleMore}>See All</Text>
        </View>
        <View style={styles.newsSlideContain}>
            <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                {topNewsarray.map((item, ind) => (
                    <View key={ind} style={[styles.newsItemReapeter, ind === 0 && styles.firstItem, ind === topNewsarray.length - 1 && styles.lastItem]}>
                        {/* <View style={styles.newsLoopImg}>
                            <Image style={styles.newsRepeatItemImage}  source={{ uri: item.image}} />
                            <Text style={styles.newsTitleReapeter}>{item.title}</Text> 
                        </View> */}
                        <View style={styles.newsLoopImg}>
                            <ImageBackground source={{ uri: item.image}} style={styles.newsRepeatItemImage} imageStyle={{ borderRadius: 6}}>
                                <TextWithLineClamp text={item.title} numberOfLines={2} />
                            </ImageBackground>
                        </View>
                    </View> 
                    )
                )}  
            </ScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    newsTitleWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 5,
        alignItems: 'center',
    },
    newsTitleMore: {
        fontSize: 14,
    },
    topWrapper: {
        paddingTop: 8,
    },
    newsTitle: {
      fontSize: 20,
      fontWeight: '600',
    },
    newsLoopImg : {
        width: 190,
        height: 140,
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#ddd',
    },
    newsRepeatItemImage: {
        width: 182,
        height: 132,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
        resizeMode: 'cover',
        display: 'flex',
        justifyContent: 'flex-end',
        alignContent: 'center',
    },
    newsItemReapeter: {
        width: 200,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
    },
    newsSlideContain:{
        paddingVertical: 5,
    },
    newsTitleReapeter: {
        display: 'flex',
        textAlign: 'center',
        fontSize: 15,
        color: '#fff',
        fontWeight: '600',
        width: 182,
        height: 55,
        justifyContent: 'center',
        alignItems: 'flex-end',
        alignContent: 'flex-end',
        backgroundColor: '#0000005e',
        marginBottom: -4,
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 6,
        padding: 7,
    },
    tagWrapper: {
        backgroundColor: 'red',
        height: '200',
        width: '200',
    },
    firstItem: {
        width: 211,
        paddingLeft: 15,
      },
    lastItem: {
        width: 211,
        paddingRight: 15,
    },
}); 