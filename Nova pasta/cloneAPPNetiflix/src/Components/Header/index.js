import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import { Icon } from 'react-native-elements'

import styles from './Styles';

export default function Header () {
    return (
        <View style={styles.header}>
            <View>
            <Image style={styles.headerlogo} source={require('../../assets/logo-n2.png')}/>
                <View>
                    <TouchableOpacity style={styles.button}>
                    <Icon
  name='g-translate'
  color='#00aced' />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.headermenu}>
                <TouchableOpacity>
                    <Text>Séries</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Filmess</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Minha lista</Text>
                </TouchableOpacity>

            </View>
            
        </View>

    );
}

