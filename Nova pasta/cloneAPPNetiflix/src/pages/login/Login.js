import  React from 'react'
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native'
import styles from  './Styles'

export default function  Login () {
  return(
    <View style={styles.fundo}>
      <View sytle={styles.logo}>  
      <Image source={require('../../assets/logo.png')}/>
      </View>

      <TextInput
        placeholder="Email"
          style={styles.input}/>
       
      
      <TextInput style={styles.input}>
       <Text style={styles.inputext}> senha </Text>
      </TextInput>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}> Entar </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonajuda}>
        <Text style={styles.buttonajudatext}>Precisa de ajuda?</Text>
      </TouchableOpacity>

        <Text style={styles.textgoogle}>O acesso esta protegido pelo Google reCAPTCHA para garantir que vovê não e um robô.
       Saiba mais.</Text>

    </View>
  );
}