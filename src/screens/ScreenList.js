import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'

const ListScreen = () => {
    const listNumbers = [1,2,3,4,5]

    return (
        <SafeAreaView>
            <View>
                {
                    // Not Recommended karena render semua sekaligus
                    // Kalau data banyak, performance bisa turun
                    listNumbers.map((item, index) => <Text key={String(index)}>{item}</Text>)
                }
            </View>
        </SafeAreaView>
    )
}

export default ListScreen
