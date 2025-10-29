import {
    Car,
    Coffee,
    Home,
    ShoppingBag,
    TrendingUp,
    Utensils,
} from "lucide-react-native";
  // Sample data
  export const categoryData = [
    {
      name: "Food",
      population: 450,
      color: "#3B82F6",
      legendFontColor: "#fff",
      legendFontSize: 12,
    },
    {
      name: "Transport",
      population: 280,
      color: "#8B5CF6",
      legendFontColor: "#fff",
      legendFontSize: 12,
    },
    {
      name: "Shopping",
      population: 620,
      color: "#EC4899",
      legendFontColor: "#fff",
      legendFontSize: 12,
    },
    {
      name: "Bills",
      population: 380,
      color: "#10B981",
      legendFontColor: "#fff",
      legendFontSize: 12,
    },
    {
      name: "Entertainment",
      population: 220,
      color: "#F59E0B",
      legendFontColor: "#fff",
      legendFontSize: 12,
    },
  ];

  export const weeklyBarData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [120, 180, 95, 220, 160, 280, 140],
      },
    ],
  };

  export const budgetData = [
    { category: "Food", spent: 450, limit: 600, color: "#3B82F6" },
    { category: "Transport", spent: 280, limit: 300, color: "#8B5CF6" },
    { category: "Shopping", spent: 620, limit: 500, color: "#EC4899" },
    { category: "Bills", spent: 380, limit: 400, color: "#10B981" },
  ];

  export const transactions = [
    {
      id: 1,
      name: "Starbucks Coffee",
      category: "Food",
      amount: -12.5,
      date: "Today, 2:30 PM",
      icon: Coffee,
    },
    {
      id: 2,
      name: "Uber Ride",
      category: "Transport",
      amount: -18.0,
      date: "Today, 10:15 AM",
      icon: Car,
    },
    {
      id: 3,
      name: "Grocery Store",
      category: "Food",
      amount: -85.4,
      date: "Yesterday, 6:45 PM",
      icon: ShoppingBag,
    },
    {
      id: 4,
      name: "Salary Deposit",
      category: "Income",
      amount: 3500,
      date: "Oct 25, 9:00 AM",
      icon: TrendingUp,
    },
    {
      id: 5,
      name: "Netflix Subscription",
      category: "Bills",
      amount: -15.99,
      date: "Oct 24, 12:00 PM",
      icon: Home,
    },
    {
      id: 6,
      name: "Amazon Purchase",
      category: "Shopping",
      amount: -124.99,
      date: "Oct 23, 3:20 PM",
      icon: ShoppingBag,
    },
    {
      id: 7,
      name: "Restaurant",
      category: "Food",
      amount: -45.6,
      date: "Oct 22, 7:30 PM",
      icon: Utensils,
    },
    {
      id: 8,
      name: "Gas Station",
      category: "Transport",
      amount: -55.0,
      date: "Oct 21, 8:45 AM",
      icon: Car,
    },
    {
      id: 9,
      name: "Movie Theater",
      category: "Entertainment",
      amount: -25.0,
      date: "Oct 20, 8:00 PM",
      icon: Coffee,
    },
    {
      id: 10,
      name: "Online Course",
      category: "Education",
      amount: -99.99,
      date: "Oct 19, 11:30 AM",
      icon: Home,
    },
    {
      id: 11,
      name: "Pharmacy",
      category: "Health",
      amount: -32.5,
      date: "Oct 18, 2:15 PM",
      icon: Home,
    },
    {
      id: 12,
      name: "Coffee Shop",
      category: "Food",
      amount: -8.75,
      date: "Oct 17, 9:30 AM",
      icon: Coffee,
    },
    {
      id: 13,
      name: "Taxi",
      category: "Transport",
      amount: -22.0,
      date: "Oct 16, 6:45 PM",
      icon: Car,
    },
    {
      id: 14,
      name: "Supermarket",
      category: "Shopping",
      amount: -156.8,
      date: "Oct 15, 5:00 PM",
      icon: ShoppingBag,
    },
    {
      id: 15,
      name: "Gym Membership",
      category: "Health",
      amount: -50.0,
      date: "Oct 14, 10:00 AM",
      icon: Home,
    },
  ];

  export const chartConfig = {
    backgroundColor: "transparent",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForBackgroundLines: {
      strokeDasharray: "",
      stroke: "rgba(255, 255, 255, 0.1)",
      strokeWidth: 1,
    },
    propsForLabels: {
      fontSize: 10,
    },
  };