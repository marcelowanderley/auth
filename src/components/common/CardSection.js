// Import libraries for making a component
import React from 'react';
import { View } from 'react-native';

// Make a component
const CardSection = (props) => {
    return (
        <View style={styles.containerStyler}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyler: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

// Make the component avaliable to the other parts of the App
export { CardSection };
