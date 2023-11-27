import { StyleSheet, Text, View, SafeAreaView, useWindowDimensions, } from 'react-native'
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
import Pagination from './Pagination'
import CustomButton from './CustomButton'

const Welcome = () => {

    const { width: SCREEN_WIDTH } = useWindowDimensions();
    const flatListRef = useAnimatedRef(null);
    const x = useSharedValue(0)
    const flatListIndex = useSharedValue(0);

    const onViewableItemChanged = ({ viewableItems }) => {
        flatListIndex.value = viewableItems[0].index;
    }

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


    return (
        <SafeAreaView style={styles.container}>
            <Animated.FlatList
                ref={flatListRef}
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
                onViewableItemsChanged={onViewableItemChanged}

            />
            <View style={styles.bottomContainer}>
                <Pagination
                    data={data}
                    x={x}
                    screenWidth={SCREEN_WIDTH}
                />
                <CustomButton
                    flatListRef={flatListRef}
                    flatListIndex={flatListIndex}
                    dataLenght={data.length}
                />
            </View>
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
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 20,
    },
})