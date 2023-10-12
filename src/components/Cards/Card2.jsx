import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";

const Card2 = () => {
  return (


    // <View style={styles.card2}>
    <View style={styles.padre}>

      <Text style={styles.headingText}> telo 1 </Text>
      <View style={[styles.card, styles.cardElevated]}>

        <Image source={{ uri: 'https://elcomercio.pe/resizer/SgYtnAzluKyPeVdqdW-pWI1_4n4=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/KH4UYLZFOBFTTCGJBWADDJ4VEI.jpg' }}
          style={styles.cardImage}></Image>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Telo Pingo</Text>
          <Text style={styles.cardlabel}> aca a la vuelta</Text>
          <Text style={styles.cardDescription}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex architecto ab quasi fugit consectetur quidem id, autem .</Text>
          <Text style={styles.cardFooter}> 12</Text>
        </View>
        {/* <TouchableOpacity>
        <View style={styles.cardContent}>
        <Text>hola</Text>
        </View>
      </TouchableOpacity> */}
      </View>
    </View>
    //</View >
  )
};


const styles = StyleSheet.create({

  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,

  },

  card: {
    width: 250,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },

  // card2: {
  //   borderRadius: 6,
  //   elevation: 10,
  //   backgroundColor: "#fff",
  //   marginHorizontal: 10,
  //   marginVertical: 6,
  // },
  cardElevated: {
    backgroundColor: '#fffffff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    }
  },
  cardImage: {
    height: 180,
    objectFit:"cover",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    felx: 1,
    flexGrow: 1,
    borderWidth:1,
    borderColor:"#ccccc",
    borderTopColor:"transparent",
    paddingHorizontal: 12,
    borderRadius: 6,

  },
  cardTitle: {
    color: '#000000',
    paddingTop:8,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,

  },
  cardlabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#758283',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#000000'
  },
  // cardContent: {
  //   marginHorizontal: 18,
  //   marginVertical: 10,
  // }



})


export default Card2;
