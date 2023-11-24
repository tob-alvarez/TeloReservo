import { StyleSheet, Text, View, SafeAreaView, FlatList, useWindowDimensions, Image } from 'react-native'
import React from 'react'
import data from './data'
import Animated, {
    useSharedValue,
    useAnimatedScrollHandler,
    useAnimatedRef,
    useAnimatedStyle,
    interpolate,
    Extrapolate
} from 'react-native-reanimated'

const Welcome = () => {

    const { width: SCREEN_WIDTH } = useWindowDimensions();
    const x = useSharedValue(0)
    const onScroll = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x;
        }
    })

    const RenderItem = ({ item, index }) => {

        const imageAnimationStyle = useAnimatedStyle(() => {
            const opacityAnimation = interpolate(x.value,
                [
                    (index - 1) * SCREEN_WIDTH,
                    index * SCREEN_WIDTH,
                    (index + 1) * SCREEN_WIDTH,
                ],
                [0, 1, 0],
                Extrapolate.CLAMP,
            );
            const translateYAnimation = interpolate(
                x.value,
                [
                    (index - 1) * SCREEN_WIDTH,
                    index * SCREEN_WIDTH,
                    (index + 1) * SCREEN_WIDTH,
                ],
                [100, 1, 100],
                Extrapolate.CLAMP,
            );
            return {
                opacity: opacityAnimation,
                width: SCREEN_WIDTH * 0.8,
                height: SCREEN_WIDTH * 0.8,
                transform: [{ translateY: translateYAnimation }]
            }
        })
        const textAnimationStyle = useAnimatedStyle(() => {
            const opacityAnimation = interpolate(x.value,
                [
                    (index - 1) * SCREEN_WIDTH,
                    index * SCREEN_WIDTH,
                    (index + 1) * SCREEN_WIDTH,
                ],
                [0, 1, 0],
                Extrapolate.CLAMP,
            );
            const translateYAnimation = interpolate(
                x.value,
                [
                    (index - 1) * SCREEN_WIDTH,
                    index * SCREEN_WIDTH,
                    (index + 1) * SCREEN_WIDTH,
                ],
                [100, 1, 100],
                Extrapolate.CLAMP,
            );
            return {
                opacity: opacityAnimation,
                transform: [{ translateY: translateYAnimation }]
            }
        })

        return (
            <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
                <Animated.Image
                    source={item.image}
                    style={imageAnimationStyle}
                    resizeMode='contain'
                />
                <Animated.View style={textAnimationStyle}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemText}>{item.text}</Text>
                </Animated.View>
            </View>
        )
    };

    // https://www.youtube.com/watch?v=b9uLJJ3aNjU seguir viendo 18min

    return (
        <SafeAreaView style={styles.container}>
            <Animated.FlatList
                onScroll={onScroll}
                data={data}
                renderItem={({ item, index }) => {
                    return <RenderItem item={item} index={index} />
                }}
                keyExtractor={item => item.id}
                scrollEventThrottle={16}
                horizontal={true}
                bounces={false}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f48aa0',
    },
    itemContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    itemTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        marginHorizontal: 30,
    },
    itemText: {
        textAlign: 'center',
        fontSize: 18,
        marginHorizontal: 30,
    },
})