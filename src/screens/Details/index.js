import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default class Detail extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Título</Text>
                <TextInput
                    style={styles.inputTitleMargin}
                    onChangeText={(text) => this.setState({text})}
                    />

                <Text>Descrição</Text>
                <TextInput
                    style={styles.inputDescriptionMargin}
                    multiline={true}
                    onChangeText={(text) => this.setState({text})}
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