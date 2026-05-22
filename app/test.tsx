import React from 'react';
import { Stack, router } from 'expo-router';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';



const MEDICATIONS = [
  { id: 1, name: 'Amoxicillin', dose: '500mg', time: '8:00 AM', taken: true, type: 'pill' },
  { id: 2, name: 'Vitamin D', dose: '1000 IU', time: '12:30 PM', taken: false, type: 'pill' },
  { id: 3, name: 'Ibuprofen', dose: '200mg', time: '6:00 PM', taken: false, type: 'syrup' },
];

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar style="dark" />
      <Stack.Screen options={{ headerShown: false }} />
 
      <View className="px-6 py-4 flex-row justify-between items-center">
        <View>
          <Text className="text-gray-500 font-medium text-sm">Sat, Jan 18</Text>
          <Text className="text-3xl font-bold text-gray-900">Hello, alentina</Text>
        </View>
        <View className="h-10 w-10 bg-blue-100 rounded-full items-center justify-center">
          <Text className="text-blue-600 font-bold">VB</Text>
        </View>
      </View>

      <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
      
        <Text className="text-lg font-bold text-gray-800 mb-3 mt-2">Next Dose</Text>
        <View className="bg-blue-600 rounded-t-3xl  rounded-br-3xl p-6 shadow-xl shadow-blue-200">
          <View className="flex-row justify-between items-start">
            <View>
              <View className="bg-blue-500 self-start px-3 py-1 rounded-full mb-3">
                <Text className="text-white text-xs font-bold">12:30 PM</Text>
              </View>
              <Text className="text-white text-2xl font-bold">Vitamin D</Text>
              <Text className="text-blue-100 text-base">1000 IU • 1 Tablet</Text>
            </View>
            <View className="bg-white/20 h-12 w-12 rounded-full items-center justify-center">
             
              <Text className="text-2xl">💊</Text>
            </View>
          </View>
          
          <TouchableOpacity className="mt-6 bg-white py-3 rounded-xl items-center shadow-sm active:opacity-90">
            <Text className="text-blue-700 font-bold">Mark as Taken</Text>
          </TouchableOpacity>
               <View className='bg-blue-600 h-10 w-5/12 rounded-b-3xl'/>
        </View>
        <View className='bg-blue-600 h-10 w-5/12 rounded-b-3xl'/>

    
        <Text className="text-lg font-bold text-gray-800 mb-3 mt-8">Your Schedule</Text>
        
        <View className="gap-y-4 pb-20">
          {MEDICATIONS.map((med) => (
            <View 
              key={med.id} 
              className={`p-4 rounded-2xl flex-row items-center border ${
                med.taken ? 'bg-gray-100 border-gray-200' : 'bg-white border-gray-100'
              }`}
            >
              <View className={`h-12 w-12 rounded-full items-center justify-center mr-4 ${
                med.taken ? 'bg-gray-200' : 'bg-orange-100'
              }`}>
                <Text className="text-xl">💊</Text>
              </View>
              
              <View className="flex-1">
                <Text className={`font-bold text-base ${med.taken ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                  {med.name}
                </Text>
                <Text className="text-gray-500 text-sm">{med.dose} • {med.time}</Text>
              </View>

              {med.taken ? (
                <Text className="text-green-600 font-bold text-xs">TAKEN</Text>
              ) : (
                <View className="h-6 w-6 rounded-full border-2 border-gray-300" />
              )}
            </View>
          ))}
        </View>
      </ScrollView>
      <View>
        <View></View>
      </View>

    
      <TouchableOpacity className="absolute bottom-10 right-6 h-16 w-16 bg-blue-600 rounded-full items-center justify-center shadow-lg shadow-blue-400 active:scale-95"
      onPress={() => router.push('/test')}>
        <Text className="text-white text-3xl font-light pb-1">+</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}
