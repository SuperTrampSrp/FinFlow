import { TrendingDown, TrendingUp } from "lucide-react-native";
import { Text, View } from "react-native";

const SummaryCard = () => {
  return (
    <View
      className="section-style mb-6"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 10,
      }}
    >
      <Text className="text-white/70 text-sm mb-2">Total Balance</Text>
      <Text className="text-white text-4xl font-bold mb-6">$8,245.50</Text>

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
  );
};

export default SummaryCard;
