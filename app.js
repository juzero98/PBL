import React from 'react';
import { View, Image } from 'react-native';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  {
    title: '색연필',
    text : '1900원',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Colouring_pencils.jpg/375px-Colouring_pencils.jpg'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '크레파스',
    text : '15000원',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/1/1f/Oliepastel.jpg'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '스케치북',
    text : '8000원',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Sketch-book.jpg'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: '형광펜',
    text : '2500원',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Two_highlighters%2C_closeup.jpg/1920px-Two_highlighters%2C_closeup.jpg'
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: '지우개',
    text : '500원',

    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/0/0f/Faber_Castell_Erasers.jpg'
  },

];

function Item({ id, title, text,selected, onSelect, imageUrl}) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        { backgroundColor: selected ? '#d1c5a5' : '#e891a0' },
      ]}
    >
    
      <View>
      <Text style={styles.title}>{title}</Text>
      <Image
          style={{width: 100, height: 100, marginLeft: 150}}
          source={imageUrl}
        />
      <Text style={styles.text}>{text}</Text>
        
      </View>
      
    </TouchableOpacity>
  );
}

export default function App() {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            text={item.text}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
            imageUrl={item.imageUrl}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#d1c5a5',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 23,
  },
  text: {
    fontSize: 17,
    
  }
  
});
