// components/BudgetSummaryStats.tsx
import { PieChart as PieChartIcon, TrendingDown } from "lucide-react-native";
import { Text, View } from "react-native";

interface BudgetStatsProps {
  categories: Array<{ name: string; spent: number; budget: number }>;
  totalSpent: number;
}

export function BudgetSummaryStats({
  categories,
  totalSpent,
}: BudgetStatsProps) {
  const highestSpender = categories.reduce((prev, current) =>
    prev.spent > current.spent ? prev : current
  );

  const averageUtilization =
    categories.reduce((sum, cat) => sum + (cat.spent / cat.budget) * 100, 0) /
    categories.length;

  return (
    <View className="px-5 mb-6">
      <Text className="text-white text-lg font-bold mb-4">Quick Stats</Text>

      <View className="flex-row gap-3">
        {/* Highest Spending Category */}
        <View
          className="flex-1 bg-white/10 rounded-2xl p-4 border border-white/20"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 5,
          }}
        >
          <View className="flex-row items-center mb-2">
            <TrendingDown color="#EC4899" size={18} />
            <Text className="text-white/70 text-xs ml-2 font-semibold">
              Top Spending
            </Text>
          </View>
          <Text className="text-white font-bold text-base">
            {highestSpender.name}
          </Text>
          <Text className="text-pink-400 text-sm font-bold mt-1">
            ${highestSpender.spent.toFixed(2)}
          </Text>
        </View>

        {/* Average Utilization */}
        <View
          className="flex-1 bg-white/10 rounded-2xl p-4 border border-white/20"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 5,
          }}
        >
          <View className="flex-row items-center mb-2">
            <PieChartIcon color="#8B5CF6" size={18} />
            <Text className="text-white/70 text-xs ml-2 font-semibold">
              Avg Utilization
            </Text>
          </View>
          <Text className="text-white font-bold text-base">
            {averageUtilization.toFixed(0)}%
          </Text>
          <Text className="text-purple-400 text-sm font-bold mt-1">
            of budgets
          </Text>
        </View>
      </View>
    </View>
  );
}
