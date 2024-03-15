import { View, Text } from 'react-native'
import React from 'react'
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'

export default function CeklistHarian({navigation}) {
    const backPage = () => {
        navigation.goBack();
    }
  return (
    <View style={{
        flex:1,
        backgroundColor:'white',
    }}>
    {/* HEADER */}
    <MyHeader judul="Ceklis Harian"  onPress={backPage}/>

    {/* MAIN CONTENT */}
    <ScrollView>
        <View style={{padding:10,
        }}>

        <MyCalendar/>
        <MyInput placeholder="Cari nama murid"/>
        <MyGap jarak={50}/>
        {/* MASUKAN DATABASE TABEL DISINI */}
        <Text style={{textAlign:'center',}}>- Nanti akan ada tabel disini ketika backendnya sudah jadi -</Text>

        <MyGap jarak={50}/>
        <MyButton title="Simpan"/>
        </View>
    </ScrollView>
    </View>
  )
}