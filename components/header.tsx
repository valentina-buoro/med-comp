import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native'


const Header = () => {
    const [time, setTime] = useState(new Date())
    useEffect(
        ()=>{
            const timer = setInterval(()=>setTime(new Date()), 1000);
            return ()=> clearInterval(timer)
        },[]
    )
    return (
        <View className='px-6 py-4'>
            <View className=" flex-row justify-between items-center">
                <View>
                   
                    <Text className="text-xl font-bold text-neutral-50">Hello,  Valentina</Text>
                </View>
                <View className="h-10 w-10 bg-blue-100 rounded-full items-center justify-center">
                    <Text className="text-blue-600 font-bold">VB</Text>

                </View>
            </View>
            <View className="bg-blue-500 self-start mt-1 px-3 py-1 rounded-full mb-3">
                <Text className="text-white text-xs font-bold">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
            </View>
        </View>
    )
}

export default Header