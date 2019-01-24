import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from "react-native";


export default class Home extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            todoList:[{
                key: 1,
                title: 'Installar Navigation'
            },{
                key: 2,
                title: 'Configurar Navigation'
            }]
        }
    }

    _renderCard = (item) => {
        return (
            <Text>{item.title}</Text>
        );
    }

    _goViewDetail = (item) =>{
        this.props.navigation.navigate("Detail");
    }
    render(){
        return (
            <View>
                
                <FlatList 
                    data={this.state.todoList}
                    renderItem={({item}) => this._renderCard(item)}
                    onPressItem={(item)=> this._goViewDetail(item)}/>
            </View>
        );
    }
}
//<Button title={"navigate"} onPress={() => this.props.navigation.navigate("Detail")}/>