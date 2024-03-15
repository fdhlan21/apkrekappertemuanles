import { View, Text } from 'react-native'
import React from 'react'
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'

export default function DetailMurid({navigation}) {
    const backPage = () => {
        navigation.goBack();
    }
  return (
    <View style={{
        flex:1,
        backgroundColor:'white',
    }}>
    {/* HEADER */}
    <MyHeader judul="Detail Murid" onPress={backPage}/>

    {/* MAIN CONTENT */}
    <ScrollView>
        <View style={{padding:10,
        }}>

  
        <MyGap jarak={50}/>
        {/* MASUKAN DATABASE TABEL DISINI */}
        <Text style={{textAlign:'center',}}>- Nanti akan ada tabel disini ketika backendnya sudah jadi -</Text>
        </View>
    </ScrollView>
    </View>
  )
}