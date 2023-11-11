import {
    Image,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Animated,
    Easing,
} from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('screen');

const SlideItem = ({ item }) => {

    return (
        <View style={styles.container}>
            <Image
                source={item.img}
                resizeMode="contain"
                style={[
                    styles.image,
                ]}
            />

            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        </View>
    );
};

export default SlideItem;

const styles = StyleSheet.create({
    container: {
        width,
        height,
        borderWidth: 1,
        justifyContent: 'start',
    },
    image: {
        width: '100%',
        height: 100,
    },
    content: {
        alignItems: 'center',
        height: 100,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    description: {
        fontSize: 12,
        marginVertical: 12,
        color: '#333',
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
    },
});