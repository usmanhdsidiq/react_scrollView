import React from 'react';
import { Card } from '@rneui/themed';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Image } from '@rneui/base';

export default function App() {
  const data = [
    {id: 1, title: "Ito Momoka", description: "2024.03.17 - Joined AKB48 as Kenkyuusei", imagesrc: "https://static.wikia.nocookie.net/akb48/images/2/2b/Ito_Momoka_AKB48_2024.jpg/revision/latest?cb=20240319135748"},
    {id: 2, title: "Yamaguchi Yui", description: "On April 9th, joined AKB48 as a member of its 18th Generation.", imagesrc: "https://static.wikia.nocookie.net/akb48/images/9/96/Yamaguchi_Yui_AKB48_2023_%282%29.jpg/revision/latest?cb=20231024140147"},
    {id: 3, title: "Hotei Moka", description: "2022.05.04 - Joined AKB48 as a Kenkyuusei", imagesrc: "https://static.wikia.nocookie.net/akb48/images/2/27/Hotei_Moka_AKB48_2023.jpg/revision/latest?cb=20231024134809"},
    {id: 4, title: "Sato Minami", description: "2016.12.08 - Joined AKB48 as Kenkyuusei", imagesrc: "https://static.wikia.nocookie.net/akb48/images/3/34/Sato_Minami_AKB48_2023.jpg/revision/latest?cb=20231023053239"},
    {id: 5, title: "Mukaichi Mion", description: "2013.06.05 - Joined AKB48 as Kenkyuusei", imagesrc: "https://static.wikia.nocookie.net/akb48/images/4/4f/Mukaichi_Mion_AKB48_2023.jpg/revision/latest?cb=20231023050714"},
    {id: 6, title: "Iwatate Saho", description: "2011.09.24 - Joined AKB48 as Kenkyuusei", imagesrc: "https://static.wikia.nocookie.net/akb48/images/e/e2/Iwatate_Saho_AKB48_2023.jpg/revision/latest?cb=20231023044348"},
    {id: 7, title: "Izuta Rina", description: "010.03.31 - Joined AKB48 as a Kenkyuusei", imagesrc: "https://static.wikia.nocookie.net/akb48/images/a/a2/Izurina_CGM48_Sept_2023.jpg/revision/latest?cb=20230924121734"},
    {id: 8, title: "Oguri Yui", description: "2014.04.03 - Joined AKB48 as a Team 8 member", imagesrc: "https://static.wikia.nocookie.net/akb48/images/f/f0/Oguri_Yui_AKB48_2023.jpg/revision/latest?cb=20231023051309"},
    {id: 9, title: "Masai Mayuu", description: "2022.05.04 - Joined AKB48 as Kenkyuusei", imagesrc: "https://static.wikia.nocookie.net/akb48/images/a/aa/Masai_Mayuu_AKB48_2023.jpg/revision/latest?cb=20231024134906"},
    {id: 10, title: "Yamazaki Sora", description: "2022.05.04 - Joined AKB48 as Kenkyuusei", imagesrc: "https://static.wikia.nocookie.net/akb48/images/4/4f/Yamazaki_Sora_AKB48_2023.jpg/revision/latest?cb=20231024135052"},
  ];

  const renderItem = ({item}: {item: {id: Number; title: String; description: String; imagesrc: string}}) => (
    <View style={{width: '50%', paddingHorizontal: 8, marginVertical: 8}}>
      <Card.Divider />
      <Card.Title>{item.title}</Card.Title>
        <Image style={{width: '100%', height: 128}} source={{ uri: item.imagesrc}} resizeMode='contain' />
        <Text>{item.description}</Text>
      <Card.Divider />
    </View>
  );
  const listEmptyContent = () => (
    <View style={{flexDirection: 'row', width: '100%'}}>
      {data.slice(0, 2).map((item, index) => (
        <View style={{width: '50%', paddingHorizontal: 8, marginVertical: 8}} key={item.id.toString()}>
          <Card.Divider />
          <Card.Title>{item.title}</Card.Title>
          <Image style={{width: '100%', height: 128}} source={{ uri: item.imagesrc}} resizeMode='contain' />
          <Text>{item.description}</Text>
        <Card.Divider />
      </View>
      ))}
    </View>
  );
  return (
    <View style={{backgroundColor: '#FFF4F6'}}>
      <Text style={{fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 5}}>AKB48 Members</Text>
      
        <ScrollView>
            <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id.toString()} numColumns={2} ListEmptyComponent={listEmptyContent} contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: -8}} />
        </ScrollView>
      
    </View>
  );
}