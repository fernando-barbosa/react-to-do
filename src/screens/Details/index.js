import React from 'react';
import {View, Text, TextInput, Button, StyleSheet, AsyncStorage} from 'react-native';

export default class Detail extends React.Component{

    constructor(props){
        super(props);

        this.state ={

        }
    }

    componentWillMount(){
        AsyncStorage.getItem('item').then((value) => 
            this.setState(
                {
                    title: JSON.parse(value).title,
                    description: JSON.parse(value).description
                }
            ));
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>Título</Text>
                <TextInput
                    style={styles.inputTitleMargin}
                    value={this.state.title || ""}/>

                <Text>Descrição</Text>
                <TextInput
                    style={styles.inputDescriptionMargin}
                    multiline={true}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.description || ""}
                    />

                <Button
                    style={styles.submitButton}
                    title="Atualizar"
                    color="#3399ff"
                    accessibilityLabel="Atualizar dados."/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column',
        margin: 20
    },
    inputTitleMargin: {
        height: 40, 
        borderColor: '#3399ff', 
        borderWidth: 1,
        marginTop: 5,
        marginBottom: 5
    },
    inputDescriptionMargin: {
        height: 120, 
        borderColor: '#3399ff', 
        borderWidth: 1,
        marginTop: 5,
        marginBottom: 5
    },
    submitButton: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 35
    }
})