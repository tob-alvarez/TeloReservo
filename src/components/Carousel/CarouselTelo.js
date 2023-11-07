// import React, { useRef, useState, useEffect } from 'react';
// import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';
// import {
//     View,
//     Text,
//     Dimensions,
//     StyleSheet,
//     TouchableOpacity,
//     Platform,
// } from 'react-native';

// const ENTRIES1 = [
//     {
//         illustration: 'https://i.imgur.com/UYiroysl.jpg',
//     },
//     {
//         illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
//     },
//     {
//         illustration: 'https://i.imgur.com/MABUbpDl.jpg',
//     },
//     {
//         illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
//     },
//     {
//         illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
//     },
// ];
// const { width: screenWidth } = Dimensions.get('window');


// const CarouselTelo = props => {
//     const [entries, setEntries] = useState([]);
//     const [activeSlide, setActiveSlide] = useState(0); // Nuevo estado para el slide activo
//     const carouselRef = useRef(null);

//     // const goForward = () => {
//     //     carouselRef.current.snapToNext();
//     // };

//     useEffect(() => {
//         setEntries(ENTRIES1);
//     }, []);

//     const onSnapToItem = index => {
//         setActiveSlide(index); // Actualiza el estado del slide activo
//     };

//     const renderItem = ({ item, index }, parallaxProps) => {
//         return (
//             <View style={styles.item}>
//                 <ParallaxImage
//                     source={{ uri: item.illustration }}
//                     containerStyle={styles.imageContainer}
//                     style={styles.image}
//                     parallaxFactor={0.4}
//                     {...parallaxProps}
//                 />
//             </View>
//         );
//     };




//     return (
//         <View style={styles.container}>
//             <Carousel
//                 ref={carouselRef}
//                 sliderWidth={screenWidth}
//                 sliderHeight={screenWidth}
//                 itemWidth={screenWidth}
//                 data={entries}
//                 renderItem={renderItem}
//                 hasParallaxImages={true}
//                 onSnapToItem={onSnapToItem}
//             />
//             <Pagination
//                 dotsLength={ENTRIES1.length}
//                 activeDotIndex={activeSlide}
//                 containerStyle={styles.paginationContainer}
//                 dotContainerStyle={styles.paginationDot}
//             />
//             {/* <TouchableOpacity onPress={goForward}>
//                     <Text>go to next slide</Text>
//                 </TouchableOpacity> */}
//         </View>
//     );
// };

// export default CarouselTelo;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     item: {
//         width: '100%',
//         height: 300,
//     },
//     imageContainer: {
//         marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
//         backgroundColor: 'white',
//         height: 300,
//         width: '100%',
//     },
//     image: {
//         resizeMode: 'cover',
//     },
//     paginationContainer: {
//         flexDirection: 'row',
//         position: 'absolute',
//         bottom: 0,
//         alignSelf: 'center',
//     },
//     paginationDot: {
//         width: 10,
//         height: 10,
//         borderRadius: 4,
//         marginHorizontal: 4,
//         backgroundColor: '#fff',
//     },
// });
