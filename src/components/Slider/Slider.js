// import { Animated, FlatList, View } from 'react-native';
// import React, { useRef, useState } from 'react';
// import Slides from '../data';
// import SlideItem from './SlideItem';
// import Pagination from './Pagination';

// const Slider = () => {
//     const [index, setIndex] = useState(0);
//     const scrollX = useRef(new Animated.Value(0)).current;

//     const handleOnScroll = event => {
//         Animated.event(
//             [
//                 {
//                     nativeEvent: {
//                         contentOffset: {
//                             x: scrollX,
//                         },
//                     },
//                 },
//             ],
//             {
//                 useNativeDriver: false,
//             },
//         )(event);
//     };

//     const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
//         // console.log('viewableItems', viewableItems);
//         setIndex(viewableItems[0].index);
//     }).current;

//     const viewabilityConfig = useRef({
//         itemVisiblePercentThreshold: 50,
//     }).current;

//     return (
//         <View>
//             <FlatList
//                 data={Slides}
//                 renderItem={({ item }) => <SlideItem item={item} />}
//                 horizontal
//                 pagingEnabled
//                 snapToAlignment="center"
//                 showsHorizontalScrollIndicator={false}
//                 onScroll={handleOnScroll}
//                 onViewableItemsChanged={handleOnViewableItemsChanged}
//                 viewabilityConfig={viewabilityConfig}
//             />
//             <Pagination data={Slides} scrollX={scrollX} index={index} />
//         </View>
//     );
// };

// export default Slider;

import React, { useRef, useCallback, useEffect } from 'react';
import { Animated, FlatList, View, Dimensions } from 'react-native';
import Slides from '../data';
import SlideItem from './SlideItem';
import Pagination from './Pagination';

const { width: screenWidth } = Dimensions.get('window');

const Slider = () => {
    // Definimos un valor animado (scrollX) usando useRef.
    const scrollX = useRef(new Animated.Value(0)).current;

    // Creamos una referencia para el FlatList.
    const flatListRef = useRef(null);

    const handleViewableItemsChanged = useCallback(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            // Ensure flatListRef.current is defined before accessing contentOffset
            if (flatListRef.current) {
                const offsetX = flatListRef.current.contentOffset?.x || 0;
                scrollX.setValue(offsetX);
            }
        }
    }, []);

    // Función para extraer la key de un elemento en el FlatList.
    const keyExtractor = (item, index) => {
        if (item && item.key) {
            return item.key.toString();
        }
        return index.toString(); // Usamos el índice como respaldo si la clave no está disponible.
    };

    // Efecto que se ejecuta cuando cambia el ancho de la pantalla.
    useEffect(() => {
        // Actualizamos el valor animado (scrollX) si el ancho de la pantalla cambia (por ejemplo, en rotación).
        if (flatListRef.current) {
            const offsetX = flatListRef.current.contentOffset?.x || 0;
            scrollX.setValue(offsetX);
        }
    }, [screenWidth]);

    return (
        <View>
            <FlatList
                ref={flatListRef}
                data={Slides}
                renderItem={({ item }) => <SlideItem item={item} />}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={keyExtractor}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                onViewableItemsChanged={handleViewableItemsChanged}
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 50,
                }}
            />
            <Pagination data={Slides} scrollX={scrollX} />
        </View>
    );
};

export default Slider;

