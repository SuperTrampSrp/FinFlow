import { Tabs } from "expo-router";
import { Home, TrendingUp, User, Wallet } from "lucide-react-native";
import { View } from "react-native";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000000",
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarActiveTintColor: "#43CDF4",
        tabBarInactiveTintColor: "#F2F2F2",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`rounded-full p-2 px-6 ${focused ? "bg-blue-900" : "bg-transparent"}`}
            >
              <Home color={color} size={24} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="analysis"
        options={{
          title: "Analysis",
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`rounded-full p-2 px-6 ${focused ? "bg-blue-900" : "bg-transparent"}`}
            >
              <TrendingUp color={color} size={24} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="budget"
        options={{
          title: "Budget",
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`rounded-full p-2 px-6 ${focused ? "bg-blue-900" : "bg-transparent"}`}
            >
              <Wallet color={color} size={24} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`rounded-full p-2 px-6 ${focused ? "bg-blue-900" : "bg-transparent"}`}
            >
              <User color={color} size={24} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
