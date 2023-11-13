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
                resizeMode="cover"
                style={[
                    styles.image,
                ]}
            />
        </View>
    );
};

export default SlideItem;

const styles = StyleSheet.create({
    container: {
        width,
        height: 300,
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});