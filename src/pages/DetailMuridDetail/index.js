import { View, Text } from 'react-native'
import React from 'react'
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'
import { colors } from '../../utils'


export default function DetailMuridDetail() {
  return (
    <View style={{
        flex:1,
        backgroundColor:'white',
    }}>
    {/* HEADER */}
    <MyHeader judul="Detail Murid"/>

    {/* MAIN CONTENT */}
    <ScrollView>
        <View style={{padding:10,
        }}>

        <View style={{padding:10, backgroundColor:colors.primary, borderRadius:10,

        }}>
        <Text style={{textAlign:'center', color:'white'}}>- Nanti akan ada info nama murid, sesi dan baya, ketika backendnya sudah selesai -</Text>
        </View>
  
        <MyGap jarak={50}/>
        {/* MASUKAN DATABASE TABEL DISINI */}
        <Text style={{textAlign:'center',}}>- Nanti akan ada tabel disini ketika backendnya sudah jadi -</Text>
        </View>
    </ScrollView>
    </View>
  )
}