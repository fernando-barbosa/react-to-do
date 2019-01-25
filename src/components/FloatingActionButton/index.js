import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class FloatingActionButton extends Component {
    render() {
        return(
            <TouchableOpacity 
                style={styles.button}>
                <Icon name="plus" size={20} color="#fff" />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        width: 50,
        height: 50,
        backgroundColor: "#3399ff",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        right: 20,
        bottom: 20,
        shadowOffset:{ width: 0, height: 4 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
    }
});

export default FloatingActionButton;