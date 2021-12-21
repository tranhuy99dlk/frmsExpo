import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CameraComponent from '../components/CameraComponent';
import {colors, parameters} from '../global/styles';

export default function CameraScreen() {
    return (
        <View>
            <CameraComponent/>
        </View>
    )
}

const styles = StyleSheet.create({})
