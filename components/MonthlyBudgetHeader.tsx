import { Plus } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

interface MonthlyBudgetHeaderProps {
  totalBudget: number;
  totalSpent: number;
  onAddCategory?: () => void;
}

export function MonthlyBudgetHeader({
  totalBudget,
  totalSpent,
  onAddCategory,
}: MonthlyBudgetHeaderProps) {
  const remaining = totalBudget - totalSpent;
  const percentage = (totalSpent / totalBudget) * 100;
  const isOverBudget = remaining < 0;

  return (
    <View className="px-5 pt-6 pb-4">
      {/* Header with Add Button */}
      <View className="flex-row justify-between items-center mb-5">
        <View>
          <Text className="text-white/60 text-xs mb-1">Monthly Budget</Text>
          <Text className="text-white text-2xl font-bold">Overview</Text>
        </View>
        <TouchableOpacity
          onPress={onAddCategory}
          className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl p-3 border border-purple-400/50"
          style={{
            shadowColor: "#8B5CF6",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 5,
          }}
        >
          <Plus color="#fff" size={20} />
        </TouchableOpacity>
      </View>

      {/* Budget Summary Card */}
      <View
        className="bg-white/10 rounded-3xl p-6 border border-white/20 mb-6"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.4,
          shadowRadius: 15,
          elevation: 8,
        }}
      >
        {/* Total Budget & Spent */}
        <View className="flex-row justify-between mb-5">
          <View>
            <Text className="text-white/60 text-xs mb-1">Total Budget</Text>
            <Text className="text-white text-2xl font-bold">
              ${totalBudget}
            </Text>
          </View>
          <View className="items-end">
            <Text className="text-white/60 text-xs mb-1">Total Spent</Text>
            <Text className="text-white text-2xl font-bold">${totalSpent}</Text>
          </View>
        </View>

        {/* Overall Progress Bar */}
        <View className="mb-4">
          <View className="flex-row justify-between mb-2">
            <Text className="text-white/70 text-xs font-semibold">
              Overall Progress
            </Text>
            <Text className="text-white/70 text-xs font-semibold">
              {percentage.toFixed(1)}%
            </Text>
          </View>
          <View className="h-3 bg-white/20 rounded-full overflow-hidden">
            <View
              style={{
                width: `${Math.min(percentage, 100)}%`,
                backgroundColor:
                  percentage > 100
                    ? "#EF4444"
                    : percentage > 70
                      ? "#F59E0B"
                      : "#10B981",
              }}
              className="h-full rounded-full"
            />
          </View>
        </View>

        {/* Status Text */}
        <Text
          className={`text-xs font-semibold ${
            isOverBudget ? "text-red-400" : "text-green-400"
          }`}
        >
          {isOverBudget
            ? `⚠️ Over budget by $${Math.abs(remaining).toFixed(2)}`
            : `✓ ${remaining.toFixed(2)} remaining`}
        </Text>
      </View>
    </View>
  );
}
