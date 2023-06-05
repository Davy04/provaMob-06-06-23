import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const FeedScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Feed</Text>
                </View>
               
                <View style={styles.postContainer}>
                    <View style={styles.postHeader}>
                        <Text style={styles.username}>Harry Kane</Text>
                    </View>
                    <View style={styles.postContent}>
                        <Image
                            source={{ uri: 'https://i.pinimg.com/564x/56/3d/b3/563db3acdaad1db714a1b055080b9a52.jpg' }}
                            style={styles.photo}
                            resizeMode="cover"
                        />
                        <Text style={styles.caption}>Rebaixando o United</Text>
                    </View>
                </View>

                <View style={styles.postContainer}>
                    <View style={styles.postHeader}>
                        <Text style={styles.username}>Kobe Bryant</Text>
                    </View>
                    <View style={styles.postContent}>
                        <Image
                            source={{ uri: 'https://i.pinimg.com/564x/45/9e/e0/459ee0318a3cf0db3b1bdab1812b11a3.jpg' }}
                            style={styles.photo}
                            resizeMode="cover"
                        />
                        <Text style={styles.caption}>Mandando na NBA</Text>
                    </View>
                </View>

                <View style={styles.postContainer}>
                    <View style={styles.postHeader}>
                        <Text style={styles.username}>Messi</Text>
                    </View>
                    <View style={styles.postContent}>
                        <Image
                            source={{ uri: 'https://i.pinimg.com/564x/f0/cc/f7/f0ccf72dc913f041a3ae2d034bf8a538.jpg' }}
                            style={styles.photo}
                            resizeMode="cover"
                        />
                        <Text style={styles.caption}>G.O.A.T</Text>
                    </View>
                </View>
                
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#171626', // Azul claro
      paddingHorizontal: 16,
      paddingTop: 24,
      paddingBottom: 60
    },
    header: {
      marginBottom: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff', // Azul escuro
    },
    postContainer: {
      backgroundColor: '#141329', // Azul claro
      marginBottom: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#A4C9FF', // Azul médio
      padding: 16,
    },
    postHeader: {
      flexDirection: 'row',
      marginBottom: 8,
    },
    username: {
      fontWeight: 'bold',
      marginRight: 8,
      color: '#fff', // Azul escuro
    },
    postContent: {},
    photo: {
      width: '100%',
      aspectRatio: 1, // Manter a proporção original da imagem
      marginBottom: 8,
    },
    caption: {
      color: '#fff', // Cor de texto padrão
    },
  });

export default FeedScreen;
