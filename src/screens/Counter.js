import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, StyleSheet, View, Button as ButtonRN, ActivityIndicator } from 'react-native'
import ButtonComponent from '../components/molecules/Buttons'

const CounterScreen = () => {
    const [counter, setCounter] = useState(0)
    const [userData, setUserData] = useState({name: ''})
    const [isLoading, setLoading] = useState(false)
    
    // Biasanya digunakan untuk landing page, fetch data
    // useEffect bersifat asynchronous
    useEffect(() => {
        // Dijalankan saat componentDidMount dan componentDidUpdate
        console.log('Use Effect Triggered')

        // Dijalankan saat componentWillUnmount
        return () => {
            console.log('Unmounted')
        }
    }, [counter]) // State yang men-trigger componentDidUpdate

    useEffect(() => {
        setLoading(true)
        console.log("Fetch Login Data")
        setTimeout(() => {
            console.log("Get User Data")
            setUserData({name: 'Angelia'})
            setLoading(false)
        }, 5000);
    }, [])

    const inc = () => {
        setCounter(counter + 1)
    }

    const reset = () => {
        setCounter(0)
    }

    if(isLoading) {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <ActivityIndicator size='large' color='blue' />
            </View>
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>{`Simple ${userData.name}'s App Counter in React Native`}</Text>
                <Text style={styles.counterText}>{counter}</Text>
                <ButtonComponent onPressInc={inc} onPressDec={() => {setCounter(counter - 1)} } />
                <ButtonRN title={'Reset'} color='#841584' onPress={reset} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,5)',
        textAlign: 'center',
        marginBottom: 24,
    },
    counterText: {
        fontSize: 82,
        fontWeight: 'bold',
        color: '#0e0e0e',
        textAlign: 'center'
    },
})

export default CounterScreen