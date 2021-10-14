import React from 'react'
import { Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'

const FlatListScreen = () => {
    const contacts = [
        {
            id: '1',
            name: 'John',
            phone: '012345678'
        },
        {
            id: '2',
            name: 'Marie',
            phone: '232345678'
        },
        {
            id: '3',
            name: 'Diana',
            phone: '452345678'
        },
        {
            id: '4',
            name: 'Budi',
            phone: '672345678'
        },
    ]

    const [isRefresh, setRefresh] = React.useState(false)

    const onRefresh = () => {
        setRefresh(true)
        setTimeout(() => {
            setRefresh(false)
        }, 5000);
    }

    return (
        <SafeAreaView>
            <View>
                <FlatList data={contacts}
                initialNumToRender={2} 
                renderItem={({item, index}) => {
                    return (
                        <TouchableOpacity onPress={() => console.log(item)} style={{justifyContent: 'space-between', flexDirection:'row', backgroundColor:'pink', padding:12, margin:5}}>
                            <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                            <Text style={{fontStyle: 'italic'}}>{item.phone}</Text>
                        </TouchableOpacity>
                    )
                } } 
                keyExtractor={(item) => item.id} 
                onRefresh={onRefresh}
                refreshing={isRefresh}
                />
            </View>
        </SafeAreaView>
    )
}

export default FlatListScreen
