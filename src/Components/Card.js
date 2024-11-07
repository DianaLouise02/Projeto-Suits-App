import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

export default function Card(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}> {props.title}</Text>
      {props.imageSource && (
        <Image source={props.imageSource} style={styles.cardImage} />
      )}
      <Text style={styles.cardContent}> {props.content}</Text>
      <Button title={props.buttonText} onPress={props.onPress} />
    </View>
  )
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#fff3542',
    borderRadius: 10,
    padding: 25,
    margin: 10,
    marginTop: 12,
    elevation: 3, // Sombra para Android
    shadowColor: '#00',// Sombra para IOS
    shadowOpacity: 0.2,
    shadowRadius: 1.40,

  },
  cardImage: {
    width: 300,
    height: 220,
    marginVertical: 10,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },

  cardContent: {
    padding: 12,
    fontWeight: "semibold",
    letterSpacing: 1,
    textAlign:"center",
    fontSize: 15
  },
   cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"

  }


})