
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

class Inputes extends Component {
    state = { isFocused: false };
    onFocusChange = () => {
        this.setState({ isFocused: true });
    }
    render() {
        return (
            <View style={[styles.container, { borderColor: this.state.isFocused ? '#047d05' : '#eee' }]}>
                <Input
                    onChangeText={this.props.myFunc}
                    placeholder={this.props.name}
                    onFocus={this.onFocusChange}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.inputStyle}
                    secureTextEntry={this.props.pass}
                    leftIcon={
                        <Icon
                            name={this.props.icon}
                            size={22}
                            color={this.state.isFocused ? '#047d05' : 'grey'}
                        />
                    }
                />

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        borderRadius: 100,
        marginVertical: 10,
        borderWidth: 2,
    },
    inputContainerStyle: {
        borderBottomWidth: 0,
        fontSize: 16,
    },
    inputStyle: {
        color: '#047d05',
        fontWeight: 'bold',
        marginLeft: 5,
        fontSize: 16,

    }
});

export default Inputes;
