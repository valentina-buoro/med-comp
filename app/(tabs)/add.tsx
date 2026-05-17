import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router';

export default function AddMedication() {
  const router = useRouter();


  const [selectedForm, setSelectedForm] = useState('Pill');
  const [hasReminder, setHasReminder] = useState(true);


  const FORMS = [
    { id: 'Pill', icon: '💊', label: 'Pill' },
    { id: 'Liquid', icon: '💧', label: 'Liquid' },
    { id: 'Injection', icon: '💉', label: 'Injection' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack.Screen options={{ headerShown: false }} />

      <View className="px-6 py-4 flex-row items-center border-b border-gray-100">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <Text className="text-2xl text-gray-600">←</Text>
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-900">Add Medication</Text>
      </View>

      <ScrollView className="flex-1 px-6 pt-6" contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="mb-6">
          <Text className="text-gray-500 font-medium mb-2">Medication Name</Text>
          <TextInput
            placeholder="e.g. Ibuprofen"
            placeholderTextColor="#9CA3AF"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-lg text-gray-900 focus:border-blue-500"
          />
        </View>

        <View className="mb-6">
          <Text className="text-gray-500 font-medium mb-3">Type</Text>
          <View className="flex-row gap-3">
            {FORMS.map((form) => (
              <TouchableOpacity
                key={form.id}
                onPress={() => setSelectedForm(form.id)}
                className={`flex-1 py-3 rounded-xl items-center border ${selectedForm === form.id
                    ? 'bg-blue-50 border-blue-500'
                    : 'bg-white border-gray-200'
                  }`}
              >
                <Text className="text-2xl mb-1">{form.icon}</Text>
                <Text className={`font-medium ${selectedForm === form.id ? 'text-blue-700' : 'text-gray-500'
                  }`}>
                  {form.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>


        <View className="flex-row gap-4 mb-6">
          <View className="flex-1">
            <Text className="text-gray-500 font-medium mb-2">Strength</Text>
            <TextInput
              placeholder="500"
              keyboardType="numeric"
              className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-lg"
            />
          </View>
          <View className="flex-1">
            <Text className="text-gray-500 font-medium mb-2">Unit</Text>
            <View className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 justify-center">
              <Text className="text-gray-900 text-lg">mg</Text>
            </View>
          </View>
        </View>


        <View className="mb-6">
          <Text className="text-gray-500 font-medium mb-2">Schedule</Text>
          <TouchableOpacity className="flex-row items-center justify-between bg-blue-50 border border-blue-200 rounded-xl px-4 py-4">
            <View className="flex-row items-center">
              <Text className="text-xl mr-3">⏰</Text>
              <View>
                <Text className="text-blue-900 font-bold text-lg">08:00 AM</Text>
                <Text className="text-blue-600 text-sm">Every Day</Text>
              </View>
            </View>
            <Text className="text-blue-400 font-bold">Edit</Text>
          </TouchableOpacity>
        </View>


        <View className="flex-row items-center justify-between py-4 border-t border-gray-100">
          <View>
            <Text className="text-lg font-bold text-gray-800">Remind Me</Text>
            <Text className="text-gray-500 text-sm">Send a notification</Text>
          </View>
          <Switch
            value={hasReminder}
            onValueChange={setHasReminder}
            trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}
            thumbColor={'white'}
          />
        </View>

      </ScrollView>


      <View className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-100">
        <TouchableOpacity className="w-full bg-blue-600 py-4 rounded-2xl items-center shadow-lg shadow-blue-200 active:opacity-90">
          <Text className="text-white font-bold text-lg">Save Medication</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}