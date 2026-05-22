import React, { useState } from 'react';
import { Stack, router } from 'expo-router';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { CalendarProvider, ExpandableCalendar, AgendaList } from 'react-native-calendars';
import Header from '@/components/header';



const customTheme = {
  // Calendar Backgrounds
  calendarBackground: '#1e88e5',

  // Month Header text (e.g., "May 2026")
  monthTextColor: 'red',
  textMonthFontSize: 18,


  // Weekday Columns (e.g., "Sun", "Mon")
  textSectionTitleColor: '#a1a1aa', // Weekday text color
  textDayHeaderFontSize: 13,


  // Arrow Buttons (Month navigation)
  arrowColor: '#3b82f',

  // Agenda List Sticky Headers (Date Section Headers)
  agendaDayTextColor: '#ffffff',
  agendaDayNumColor: '#3b82f6',
  agendaTodayColor: '#ef4444',

  // Day Numbers inside the Calendar grid
  dayTextColor: '#e4e4e7',
  textDayFontSize: 15,

  textDisabledColor: '#4b5563', // Outside-month days

  // Selected Day styling
  selectedDayBackgroundColor: '#3b82f6',
  selectedDayTextColor: '#ffffff',

  // Today's Day marker style
  todayTextColor: '#ef4444',

  // Dot Markings (Events Indicator)
  dotColor: '#3b82f6',

};



export default function Home() {
  const [showTips, setShowTips] = useState(0)
  const handleShowTips = (id: number) => {
    setShowTips(id)
  }
  const handleHideTips = () => {
    setShowTips(0)
  }

  const items = [
    {
      title: '2026-05-20', data: [{ id: 1, name: 'Amoxicillin', dose: '500mg', time: '8:00 AM', advice: '• Take with water after breakfast to prevent stomach irritation ', taken: true, type: 'pill' },
      { id: 2, name: 'Vitamin D', dose: '1000 IU', time: '12:30 PM', advice: 'Aspirin (81mg) • Take with water after breakfast to prevent stomach irritation ', taken: false, type: 'pill' }]
    },
    { title: '2026-05-21', data: [{ id: 3, name: 'Amoxicillin', dose: '500mg', time: '8:00 AM', advice: '• Take with water after breakfast to prevent stomach irritation ', taken: false, type: 'pill' }] },
    { title: '2026-05-22', data: [{ id: 4, name: 'Vitamin D', dose: '1000 IU', time: '12:30 PM', advice: '• Take with water after breakfast to prevent stomach irritation ', taken: true, type: 'pill' }] },
    { title: '2026-05-23', data: [{ id: 5, name: 'Ibuprofen', dose: '200mg', time: '6:00 PM', advice: '• Take with water after breakfast to prevent stomach irritation ', taken: false, type: 'syrup' }] },
    { title: '2026-05-24', data: [{ id: 6, name: 'Vitamin D', dose: '1000 IU', time: '12:30 PM', advice: '• Take with water after breakfast to prevent stomach irritation ', taken: false, type: 'pill' }] },
  ];

  const renderItem = ({ item }) => (
    <View className={`p-4 my-2 rounded-2xl  border ${item.taken ? 'bg-lime-50 border-lime-500' : 'bg-pink-100 border-pink-600'
      }`}>
      <View className={` flex-row items-center `}>
        <View>
          <View className={`h-12 w-12 rounded-full items-center justify-center mr-4 ${item.taken ? 'bg-gray-200' : 'bg-orange-100'
            }`}>
            <Text className="text-xl">💊</Text>
          </View>
        </View>

        <View className="flex-1">
          <Text className={`font-bold text-base ${item.taken ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
            {item.name}
          </Text>
          <Text className="text-gray-500 text-sm">{item.dose} • {item.time}</Text>
        </View>
        {item.taken ? (
          <Text className="text-green-600 font-bold text-xs">TAKEN</Text>
        ) : (
          <View>
            <View></View>
            <View className="h-6 w-6 rounded-full border-2 border-gray-300" />
          </View>
        )}
      </View>

      {
        showTips == item.id && <View className='py-4'>
          <Text className='text-xs'>{item.advice}</Text>
        </View>
      }
      {
        showTips == item.id ? <TouchableOpacity onPress={handleHideTips}>
          <Text className="text-blue-400 underline text-xs text-left font-semibold">
            {showTips === item.id ? "Hide Tips" : "View Tips"}
          </Text>
        </TouchableOpacity> : <TouchableOpacity onPress={() => handleShowTips(item.id)}>
          <Text className="text-blue-400 underline text-xs text-left font-semibold">
            {showTips === item.id ? "Hide Tips" : "View Tips"}
          </Text>
        </TouchableOpacity>
      }
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-neutral-900">
      <StatusBar style="dark" />
      <Stack.Screen options={{ headerShown: false }} />

      <Header />

      <ScrollView className="flex-1 px-2" showsVerticalScrollIndicator={false}>
        <View >
          <CalendarProvider date={'2026-05-22'} >
            <View style={styles.calendarWrapper}>
              <ExpandableCalendar theme={{
                calendarBackground: '#155dfc',
                selectedDayBackgroundColor: '#f54900',
                arrowColor: '#f54900',
              }} />
            </View>

            <AgendaList
              keyExtractor={(item) => item.id}
              sections={items}
              renderItem={renderItem}
              sectionStyle={{ padding: 10, marginHorizontal: 10, backgroundColor: 'transparent',  }}
            />
          </CalendarProvider>

        </View>

      </ScrollView>



      <TouchableOpacity className="absolute bottom-10 right-6 h-16 w-16 bg-blue-600 rounded-full items-center justify-center shadow-lg shadow-blue-400 active:scale-95"
        onPress={() => router.push('/test')}>
        <Text className="text-white text-3xl font-light pb-1">+</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111113',
  },
  // Apply the styling here
  calendarWrapper: {
    borderRadius: 20,          // Sets how round the corners are
    overflow: 'hidden',        // CRITICAL: Clips the rectangular calendar to the radius boundary
    marginHorizontal: 10,      // Gives space around the edges so the rounding is visible
    marginTop: 10,
    marginBottom: 40,
    backgroundColor: '#1e1e24', // Match your calendar background to prevent flash lines
    // Optional: Add a subtle shadow/elevation to make it pop
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  card: { padding: 20, backgroundColor: '#27272a', margin: 12, borderRadius: 8 },
});