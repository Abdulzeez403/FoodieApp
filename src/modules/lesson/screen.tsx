import { ActivityIndicator, Dimensions, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ApButton } from '../../components'
import { useLessonContext } from './context'


const ContentScreen = ({ route }) => {
    const { width, height } = Dimensions.get('window');
    const [currentIndex, setCurrentIndex] = useState(0);
    const { item } = route.params;
    const { getLessons, lessons } = useLessonContext();
    const flatListRef = useRef(null);

    const handleNext = () => {
        if (currentIndex < lessons.length - 1) {
            const nextIndex = currentIndex + 1;

            flatListRef.current?.scrollToIndex({
                animated: true,
                index: nextIndex,
                viewPosition: 1.0,
                viewOffset: 0.6,
            });
            setCurrentIndex(nextIndex);
            // setSolvedQuestions((prevSolved) => prevSolved + 1);

        }
    };

    useEffect(() => {
        getLessons(item?._id)
        // console.log(lessons, "lessong..")

    }, [])

    const handlePress = () => {
        navigation.navigate('QuizScreen');
    };


    const navigation = useNavigation();

    const LessionList = ({ item, index }) => {
        return (
            <View key={index} style={{ paddingHorizontal: 10, width: width }}>
                <Text className='text-center'>{item?.title}</Text>
                <Text className='text-center'>{item?.note}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView className="relative" >

            {/* <View>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading...</Text>
            </View> */}

            <View>

                <FlatList
                    data={lessons}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={lessons => lessons._id}
                    renderItem={({ item, index }) => <LessionList index={index} item={item} />}
                    initialScrollIndex={0}
                    getItemLayout={(data, index) => ({
                        length: 300,
                        offset: 460 * index,
                        index,
                    })}
                />

                {currentIndex === lessons.length - 1 ? (
                    <View style={styles.stickyButtonContainer} >

                        <ApButton label='Next Chapter'
                            onPress={() => navigation.goBack()} />
                    </View>
                ) : (
                    <View style={styles.stickyButtonContainer} >

                        <ApButton label='Next'
                            onPress={handleNext} />
                    </View>
                )}


            </View>


        </SafeAreaView>

    )
}

export default ContentScreen

const styles = StyleSheet.create({
    stickyButtonContainer: {
        position: 'absolute',
        // top: 0,
        bottom: -600,
        left: 16,
        right: 16,
        gap: 20
    },
    buttonContainer: {
        backgroundColor: 'blue', // Adjust color as needed
        padding: 16, // Adjust padding as needed
        // paddingHorizontal: 60,
        borderRadius: 15, // Adjust border radius as needed
        alignItems: 'center',
    },
    buttonText: {
        color: 'white', // Adjust text color as needed
        fontSize: 16, // Adjust font size as needed
    },
})