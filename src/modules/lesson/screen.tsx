import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ApButton } from '../../components'

type Props = {}

const ContentScreen = (props: Props) => {

    const navigation = useNavigation()
    return (
        <SafeAreaView className="relative" >

            <View className="px-4 h-full">
                <Text className='text-lg text-center font-semibold'>What is HTMl</Text>
                <Text className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime, beatae perspiciatis atque vitae optio itaque eaque, cupiditate veniam, omnis magni. Voluptate doloremque placeat vitae, vel eveniet similique excepturi eius. Ipsam, hic recusandae! Praesentium, doloremque? Voluptate placeat rerum temporibus nihil, sequi ea fugit dolorum dignissimos modi voluptas saepe nisi minus dolore eaque ullam corrupti iste optio excepturi hic similique. Reiciendis, mollitia! Ad minus repellat nostrum, officia voluptas deleniti reprehenderit labore quas eligendi hic nam sequi, culpa commodi minima ipsa natus, maxime nesciunt. Explicabo atque molestiae ratione nisi exercitationem enim inventore, eos autem incidunt voluptatibus necessitatibus laborum quam rem aliquid, odio cumque voluptate dolor quaerat commodi suscipit. Sit eius necessitatibus velit debitis est, veritatis repudiandae ea, possimus voluptatibus ipsa id facere sequi ratione consequuntur tempore non inventore pariatur molestias nisi dolorem! Repellat veritatis alias illum veniam rerum tempora aut nisi velit commodi officiis. Dicta nihil laudantium, dolorem magnam tempora soluta aspernatur? Expedita vel corrupti optio eligendi sequi adipisci ullam earum autem consequuntur, saepe officiis. Voluptatibus fugit, vero asperiores suscipit sunt, cum voluptate facilis iste adipisci ab deleniti consequuntur. Ipsa eligendi magnam ipsum fugit aliquid veniam doloremque velit saepe iure fuga! Quo laborum atque perferendis quae eveniet quaerat animi voluptate repellendus, necessitatibus ullam?</Text>
            </View>

            <View style={styles.stickyButtonContainer} >
                {/* <TouchableOpacity style={styles.buttonContainer} onPress={() => { navigation.navigate("QuizScreen") }}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity> */}

                <ApButton label='Next'
                    onPress={() => { navigation.navigate("QuizScreen") }} />
            </View>

        </SafeAreaView>

    )
}

export default ContentScreen

const styles = StyleSheet.create({
    stickyButtonContainer: {
        position: 'absolute',
        bottom: 4,
        left: 16,
        right: 16,
        // flexDirection: 'row',
        // justifyContent: "space-between"
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