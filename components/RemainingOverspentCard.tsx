// components/RemainingOverspentCard.tsx
import { AlertCircle, TrendingUp } from "lucide-react-native";
import { Text, View } from "react-native";

interface RemainingOverspentCardProps {
  totalBudget: number;
  totalSpent: number;
  monthName?: string;
}

export function RemainingOverspentCard({
  totalBudget,
  totalSpent,
  monthName = "This Month",
}: RemainingOverspentCardProps) {
  const remaining = totalBudget - totalSpent;
  const percentage = (totalSpent / totalBudget) * 100;
  const isOverBudget = remaining < 0;

  return (
    <View className="px-5 mb-8">
      <Text className="text-white text-lg font-bold mb-4">Status</Text>

      {isOverBudget ? (
        // Overspent Card
        <View
          className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl p-6 border border-red-500/30"
          style={{
            shadowColor: "#EF4444",
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.3,
            shadowRadius: 15,
            elevation: 8,
          }}
        >
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center flex-1">
              <View className="w-14 h-14 rounded-2xl bg-red-500/30 items-center justify-center mr-4 border border-red-500/50">
                <AlertCircle color="#EF4444" size={28} />
              </View>
              <View className="flex-1">
                <Text className="text-red-400 text-xs font-semibold mb-1">
                  OVERSPENT
                </Text>
                <Text className="text-white text-lg font-bold">
                  ${Math.abs(remaining).toFixed(2)}
                </Text>
              </View>
            </View>
            <Text className="text-red-400 text-4xl font-bold">
              {percentage.toFixed(0)}%
            </Text>
          </View>

          <View className="bg-white/10 rounded-xl p-3 border border-white/10">
            <Text className="text-white/80 text-xs font-medium mb-2">
              You have exceeded your budget for {monthName}
            </Text>
            <Text className="text-red-400 text-sm font-bold">
              📍 Total: ${totalSpent.toFixed(2)} / ${totalBudget.toFixed(2)}
            </Text>
          </View>
        </View>
      ) : (
        // Remaining Card
        <View
          className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl p-6 border border-green-500/30"
          style={{
            shadowColor: "#10B981",
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.3,
            shadowRadius: 15,
            elevation: 8,
          }}
        >
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center flex-1">
              <View className="w-14 h-14 rounded-2xl bg-green-500/30 items-center justify-center mr-4 border border-green-500/50">
                <TrendingUp color="#10B981" size={28} />
              </View>
              <View className="flex-1">
                <Text className="text-green-400 text-xs font-semibold mb-1">
                  REMAINING
                </Text>
                <Text className="text-white text-lg font-bold">
                  ${remaining.toFixed(2)}
                </Text>
              </View>
            </View>
            <Text className="text-green-400 text-4xl font-bold">
              {(100 - percentage).toFixed(0)}%
            </Text>
          </View>

          <View className="bg-white/10 rounded-xl p-3 border border-white/10">
            <Text className="text-white/80 text-xs font-medium mb-2">
              You are on track for {monthName}
            </Text>
            <Text className="text-green-400 text-sm font-bold">
              ✓ Spent: ${totalSpent.toFixed(2)} / ${totalBudget.toFixed(2)}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}
