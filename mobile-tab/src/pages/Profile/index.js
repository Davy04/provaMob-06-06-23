import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const ProfileScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/564x/51/87/34/5187348e271d34fe932e97e6997793ca.jpg' }}
                    style={styles.profilePicture}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Futstats</Text>
                    <Text style={styles.bio}>Morra United</Text>
                    <View style={styles.statsContainer}>
                        <View style={styles.statsItem}>
                            <Text style={styles.statsNumber}>9</Text>
                            <Text style={styles.statsText}>Publicações</Text>
                        </View>
                        <View style={styles.statsItem}>
                            <Text style={styles.statsNumber}>1500</Text>
                            <Text style={styles.statsText}>Seguidores</Text>
                        </View>
                        <View style={styles.statsItem}>
                            <Text style={styles.statsNumber}>900</Text>
                            <Text style={styles.statsText}>Seguindo</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.postsContainer}>
                <View style={styles.post}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/564x/ce/5c/6f/ce5c6f7e1196df1267c0e130155a5601.jpg' }}
                        style={styles.postImage}
                    />
                </View>
                <View style={styles.post}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/564x/c2/b3/d0/c2b3d0eaef9bd55cb60a102aa2c13f38.jpg' }}
                        style={styles.postImage}
                    />
                </View>
                <View style={styles.post}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/564x/4e/ce/55/4ece555f1b213ca01aca6afba6b99335.jpg' }}
                        style={styles.postImage}
                    />
                </View>
                <View style={styles.post}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/39/96/92/399692c20388c6d9aaec6b97023b9149.jpg' }}
                        style={styles.postImage}
                    />
                </View>
                <View style={styles.post}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/564x/61/5d/af/615dafe714f9984649bb0dbe34e2b9aa.jpg' }}
                        style={styles.postImage}
                    />
                </View>
                <View style={styles.post}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/564x/f7/5d/60/f75d60f683e89e7a45e843df121e43f5.jpg' }}
                        style={styles.postImage}
                    />
                </View>
                <View style={styles.post}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/564x/4e/af/6b/4eaf6b971043a3947103404ed99469d8.jpg' }}
                        style={styles.postImage}
                    />
                </View>
                <View style={styles.post}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/564x/0a/a9/7e/0aa97e4181875a33594eea9ac72557ef.jpg' }}
                        style={styles.postImage}
                    />
                </View>
                <View style={styles.post}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/564x/60/f9/bb/60f9bb772151a096437cb87b38daaeee.jpg' }}
                        style={styles.postImage}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171626',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 16,
        paddingTop: 50,
    },
    profilePicture: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#fff',
    },
    profileInfo: {
        flex: 1,
        marginLeft: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    bio: {
        fontSize: 16,
        color: '#fff',
        marginTop: 4,
    },
    statsContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    statsItem: {
        alignItems: 'center',
        flex: 1,
    },
    statsNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    statsText: {
        fontSize: 12,
        color: '#fff',
        marginTop: 4,
    },
    postsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        padding: 4,
    },
    post: {
        width: '32%',
        height: '30%',
        aspectRatio: 1,
        marginBottom: 8,
        marginHorizontal: 2.5,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',

    },
    postImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 8,
    },
    postText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default ProfileScreen;
