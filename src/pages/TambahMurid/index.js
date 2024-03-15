import { View, Text } from 'react-native'
import React from 'react'
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput, MyPicker } from '../../components'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { fonts } from '../../utils'

export default function TambahMurid({navigation}) {
    const backPage = () => {
        navigation.goBack();
    }
  return (
    <View style={{
        flex:1,
        backgroundColor:"white"
    }}>

    <MyHeader judul="Tambah Murid" onPress={backPage}/>
     



     {/* MAIN INPUT */}
     <ScrollView>
        <View style={{padding:10,
      
        }}>

        {/* NAMA MURID */}
        <View>
            <MyGap jarak={10}/>
            <MyInput label="Nama Murid"/>
        </View>

            <MyGap jarak={20}/>

         {/* TANGGAL MULAI */}
         <View>
            <MyGap jarak={10}/>
            <MyCalendar label="Tanggal Mulai"/>
        </View>

        <MyGap jarak={20}/>

          {/* PILIH SESI */}
          <View>
            <MyGap jarak={10}/>
            <MyPicker label="Pilih Sesi" />
        </View>


        <MyGap jarak={20}/>

          {/* PILIH SESI */}
          <View>
            <MyGap jarak={10}/>
            <MyInput label="Input Bayar"/>
        </View>

        
        <MyGap jarak={20}/>
        <MyButton title="Simpan"/>

        </View>
     </ScrollView>
    </View>
  )
}