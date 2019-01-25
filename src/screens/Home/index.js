import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableHighlight, AsyncStorage } from "react-native";
import Card from '../../components/Card';
import FloatingActionButton from '../../components/FloatingActionButton';

export default class Home extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            todoList:[{
                key: 1,
                title: 'Installar Navigation',
                description: "Your Login components onUpdate method is probably called with an object that cannot be serialized. For example it could contain functions, or maybe circular references"
            },{
                key: 2,
                title: 'Configurar Navigation',
                description: "or whatever is included in the object that is sent to onUpdate."
            }]
        }
    }


    _renderCard = (item) => {
        return (
            <Card title={item.title} itemKey={item.key} goViewDetail={this._goViewDetail}/>
        );
    }

    _goViewDetail = (key) =>{
        var todo = {};
        this.state.todoList.forEach(function(item){
            if(item.key === key){
                todo = item;
            }
        });
        AsyncStorage.setItem('item', JSON.stringify(todo));

        this.props.navigation.navigate("Detail");
    }

    render(){
        return (
            <View style={{flex: 1}}>
                <View>
                    <FlatList 
                        style={styles.container}
                        data={this.state.todoList}
                        renderItem={({item}) => this._renderCard(item)}
                        />
                </View>
                <FloatingActionButton />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      padding: 10
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
//<Button title={"navigate"} onPress={() => this.props.navigation.navigate("Detail")}/>