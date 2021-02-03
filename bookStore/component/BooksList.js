import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    Dimensions
} from 'react-native';

import {SearchBar} from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import booksList from '../component/books.json';

export default class BooksList extends Component {

    constructor() {
        super();
        
        this.state = {
            loading: false,
            dataSource: [],
        };
        
        this.temporaryArray = [];
    }
    updateSearch = search => {
        this.setState({ search });
    };

    renderHeader = () => {
        return <SearchBar 
        placeholder="Search Here"
        lightTheme
        cancelButtonTitle='cancel'
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state}
         />;
    };
    
    renderItem = ({ item }) => {
        return (
            
            <View style={styles.item} >
                <TouchableOpacity style={{alignItems:'center'}}>
                <Image style={{ width: 80, height: 80, margin: 5 }} source={{ uri: item.thumbnailUrl }} />
                <View style={{ fLex: 1, justifyContent: 'center', marginLeft: 5 }} >
                    <Text style={[styles.title, styles.text]} > {item.title} </Text>
                    <Text style={[styles.status, styles.text]} > {item.status} </Text>
                </View>
                </TouchableOpacity>
            </View>
        )
    }

    componentDidMount() {
     
                this.setState({
                    dataSource: booksList,
                    loading: false,
                    
                })
        
        this.temporaryArray = booksList;
       
    }


    render() {
      
        return (
            <View>
                
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
                    numColumns={2}
                    ListHeaderComponent={this.renderHeader}
                />
            
            </View>
        )

    }
    
    searchFilterFunction = text => {
      this.setState({
        value: text,
      })

      const newData = this.temporaryArray.filter(item => {
        const itemData = `${item.title.toUpperCase()}`;
        const textData = text.toUpperCase()

        return itemData.indexOf(textData) > -1;
      })
      this.setState({
      dataSource: newData,
      })
    }
    
    
}



const styles = StyleSheet.create({
item:{
        flex: 1,
        flexDirection: 'column',
        height: Dimensions.get('window').width / 2,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#badc58',
        margin:10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.70,
        shadowRadius: 3.84,
        elevation: 9,
},
text:{
textAlign:'center'
},
title:{
    fontSize: 18, 
    color: '#000', 
    marginBottom: 15
},
status: {
    fontSize: 16, 
    color: '#5c6773' }
})
