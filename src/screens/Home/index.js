import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableHighlight } from "react-native";
import Card from '../../components/Card';

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
            <Card title={item.title} key={item.key} goViewDetail={this._goViewDetail}/>
        );
    }

    _goViewDetail = (key) =>{
        debugger;
        this.props.navigation.navigate("Detail");
    }

    render(){
        return (
            <View>
                <FlatList 
                    style={styles.container}
                    data={this.state.todoList}
                    renderItem={({item}) => this._renderCard(item)}
                    />
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