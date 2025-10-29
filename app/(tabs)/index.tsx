import {
  Car,
  Coffee,
  Home,
  ShoppingBag,
  TrendingDown,
  TrendingUp,
  Utensils,
} from "lucide-react-native";
import { Dimensions, ScrollView, Text, View } from "react-native";
import { BarChart, PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function Index() {
  // Sample data
  const categoryData = [
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

  const weeklyBarData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [120, 180, 95, 220, 160, 280, 140],
      },
    ],
  };

  const budgetData = [
    { category: "Food", spent: 450, limit: 600, color: "#3B82F6" },
    { category: "Transport", spent: 280, limit: 300, color: "#8B5CF6" },
    { category: "Shopping", spent: 620, limit: 500, color: "#EC4899" },
    { category: "Bills", spent: 380, limit: 400, color: "#10B981" },
  ];

  const transactions = [
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

  const chartConfig = {
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

  return (
    <View className="flex-1 bg-slate-950">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-5 pt-16 pb-8">
          {/* Balance Card */}
          <View
            className="bg-white/10 rounded-3xl p-6 mb-6 border border-white/20"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.5,
              shadowRadius: 20,
              elevation: 10,
            }}
          >
            <Text className="text-white/70 text-sm mb-2">Total Balance</Text>
            <Text className="text-white text-4xl font-bold mb-6">
              $8,245.50
            </Text>

            <View className="flex-row justify-between">
              <View className="flex-1 mr-3 bg-green-500/20 rounded-2xl p-4 border border-green-500/30">
                <View className="flex-row items-center mb-2">
                  <TrendingUp color="#10B981" size={18} />
                  <Text className="text-green-400 text-xs ml-2 font-semibold">
                    Income
                  </Text>
                </View>
                <Text className="text-white text-xl font-bold">$5,200</Text>
              </View>

              <View className="flex-1 ml-3 bg-red-500/20 rounded-2xl p-4 border border-red-500/30">
                <View className="flex-row items-center mb-2">
                  <TrendingDown color="#EF4444" size={18} />
                  <Text className="text-red-400 text-xs ml-2 font-semibold">
                    Expense
                  </Text>
                </View>
                <Text className="text-white text-xl font-bold">$1,950</Text>
              </View>
            </View>
          </View>

          {/* Charts Section */}
          <View className="mb-6">
            <Text className="text-white text-lg font-bold mb-4">
              Spending Overview
            </Text>

            {/* Pie Chart */}
            <View
              className="bg-white/10 rounded-3xl p-5 mb-4 border border-white/20"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.4,
                shadowRadius: 15,
                elevation: 8,
              }}
            >
              <Text className="text-white/80 text-sm font-semibold mb-3">
                Category Breakdown
              </Text>
              <PieChart
                data={categoryData}
                width={screenWidth - 60}
                height={220}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
              />
            </View>

            {/* Bar Chart - Scrollable */}
            <View
              className="bg-white/10 rounded-3xl p-5 border border-white/20"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.4,
                shadowRadius: 15,
                elevation: 8,
              }}
            >
              <Text className="text-white/80 text-sm font-semibold mb-4">
                Last 7 Days Spending
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <BarChart
                  data={weeklyBarData}
                  width={screenWidth * 1.2}
                  height={220}
                  chartConfig={{
                    ...chartConfig,
                    barPercentage: 1,
                    backgroundGradientFrom: "#0958F6",
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientTo: "#04122C",
                    backgroundGradientToOpacity: 0.5,
                    color: (opacity = 0.9) => `rgba(3,238,134, ${opacity})`,
                  }}
                  style={{
                    borderRadius: 16,
                  }}
                  fromZero
                  showValuesOnTopOfBars
                  withInnerLines={false}
                  yAxisLabel=""
                  yAxisSuffix=""
                />
              </ScrollView>
            </View>
          </View>

          {/* Budget Status */}
          <View className="mb-6">
            <Text className="text-white text-lg font-bold mb-4">
              Budget Status
            </Text>
            <View
              className="bg-white/10 rounded-3xl p-5 border border-white/20"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.4,
                shadowRadius: 15,
                elevation: 8,
              }}
            >
              {budgetData.map((item, index) => {
                const percentage = (item.spent / item.limit) * 100;
                const isOverBudget = percentage > 100;

                return (
                  <View
                    key={index}
                    className={`${index !== budgetData.length - 1 ? "mb-5" : ""}`}
                  >
                    <View className="flex-row justify-between items-center mb-2">
                      <Text className="text-white font-semibold">
                        {item.category}
                      </Text>
                      <Text
                        className={`text-sm font-bold ${isOverBudget ? "text-red-400" : "text-white/80"}`}
                      >
                        ${item.spent} / ${item.limit}
                      </Text>
                    </View>
                    <View className="h-2.5 bg-white/20 rounded-full overflow-hidden">
                      <View
                        style={{
                          width: `${Math.min(percentage, 100)}%`,
                          backgroundColor: isOverBudget
                            ? "#EF4444"
                            : item.color,
                        }}
                        className="h-full rounded-full"
                      />
                    </View>
                    {isOverBudget && (
                      <Text className="text-red-400 text-xs mt-1 font-medium">
                        ⚠️ Over budget by $
                        {(item.spent - item.limit).toFixed(2)}
                      </Text>
                    )}
                  </View>
                );
              })}
            </View>
          </View>

          {/* Recent Transactions */}
          <View className="mb-6">
            <Text className="text-white text-lg font-bold mb-4">
              Recent Transactions
            </Text>
            <View
              className="bg-white/10 rounded-3xl p-5 border border-white/20"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.4,
                shadowRadius: 15,
                elevation: 8,
              }}
            >
              {transactions.map((transaction, index) => {
                const IconComponent = transaction.icon;
                const isIncome = transaction.amount > 0;

                return (
                  <View
                    key={transaction.id}
                    className={`flex-row items-center justify-between ${
                      index !== transactions.length - 1
                        ? "mb-4 pb-4 border-b border-white/10"
                        : ""
                    }`}
                  >
                    <View className="flex-row items-center flex-1">
                      <View className="w-12 h-12 rounded-2xl bg-white/10 items-center justify-center mr-3 border border-white/10">
                        <IconComponent color="#fff" size={22} />
                      </View>
                      <View className="flex-1">
                        <Text className="text-white font-semibold text-base mb-1">
                          {transaction.name}
                        </Text>
                        <Text className="text-white/50 text-xs">
                          {transaction.date}
                        </Text>
                      </View>
                    </View>
                    <Text
                      className={`text-lg font-bold ${isIncome ? "text-green-400" : "text-red-400"}`}
                    >
                      {isIncome ? "+" : ""}$
                      {Math.abs(transaction.amount).toFixed(2)}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
