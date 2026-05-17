import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

// 1. Configure how notifications appear when app is in foreground
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,

    shouldShowBanner: true,
    shouldShowList: true
  }),
});

export async function registerForPushNotificationsAsync() {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
    });
  }
  const { status } = await Notifications.requestPermissionsAsync();
  return status === 'granted';
}

export async function scheduleMedicationReminder(name: string, time: Date) {
  const trigger = new Date(time);
  // In a real app, you'd calculate the distinct 'trigger' object for daily repeats
  // For MVP demo, we schedule it for 10 seconds later if the time passed, or the specific time
  
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Time for ${name}`,
      body: `Please take your scheduled dose.`,
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour: trigger.getHours(),
      minute: trigger.getMinutes(),
      //repeats: true, 
    },
  });
}