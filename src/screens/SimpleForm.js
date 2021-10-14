import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, ScrollView, RefreshControl } from 'react-native'

const SimpleForm = () => {
    const [text, setText] = useState('Here Some Text')
    const [isValid, setValid] = useState(false)

    const validate = () => {
        if(text === '55555') setValid(true)
        else setValid(false)
    }

    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 8000)
    })

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView 
            contentContainerStyle={{padding: 16, flex: 1}}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
            >
                <Text>Input Some Text</Text>
                <TextInput style={{ borderWidth: 1, height: 90 }} value={text} onChangeText={(newValue) => setText(newValue)} />
                <Button title='Submit' onPress={validate} />
                <Text>{`is Valid? = ${isValid}`}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SimpleForm

const styles = StyleSheet.create({})
