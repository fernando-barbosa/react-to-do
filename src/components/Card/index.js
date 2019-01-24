import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Card extends Component {
    render() {
        return(
            <TouchableOpacity style={styles.card}>
                <Text>{this.props.title}</Text>
                <TouchableOpacity>
                    <Icon name="trash" size={30} color="#777" /> 
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }
}
export default Card;

const styles = StyleSheet.create({
    card: {
      flex: 1,
      marginBottom: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#F6F5F3',
      borderRadius: 5,
      shadowOffset:{ width: 0, height: 0 },
      shadowColor: 'black',
      shadowOpacity: 0.2,
      padding: 15
    }
  });