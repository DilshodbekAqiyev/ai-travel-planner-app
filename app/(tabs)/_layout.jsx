import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.PRIMARY
    }}>
      {/* Explore Tab */}
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color }) => <Ionicons name="globe-sharp" size={24} color={color} />,
        }}
      />

      {/* ZouZou Tab */}
      <Tabs.Screen
        name="zouzou"
        options={{
          tabBarLabel: "ZouZou",
          tabBarIcon: ({ color }) => <Ionicons name="compass" size={24} color={color} />,
        }}
      />

      {/* My Trip Tab */}
      <Tabs.Screen
        name="mytrip"
        options={{
          tabBarLabel: "My Trip",
          tabBarIcon: ({ color }) => <Ionicons name="location-sharp" size={24} color={color} />,
        }}
      />

      {/* Totem Tab */}
      <Tabs.Screen
        name="totem"
        options={{
          tabBarLabel: "Totem",
          tabBarIcon: ({ color }) => <Ionicons name="bookmark" size={24} color={color} />,
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => <Ionicons name="person-circle" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}