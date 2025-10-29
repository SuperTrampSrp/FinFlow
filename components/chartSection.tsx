import {
  categoryData,
  chartConfig,
  weeklyBarData,
} from "@/constants/sampleData";
import { Dimensions, ScrollView, Text, View } from "react-native";
import { BarChart, PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;
const ChartSection = () => {
  return (
    <View className="mb-6">
      <Text className="section-title">Spending Overview</Text>

      {/* Pie Chart */}
      <View
        className="section-style mb-3"
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
        className="section-style"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.4,
          shadowRadius: 15,
          elevation: 8,
        }}
      >
        <Text className="text-white/80 text-sm font-semibold mb-3">
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
  );
};

export default ChartSection;
