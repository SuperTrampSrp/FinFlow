import { budgetData } from "@/constants/sampleData";
import { Text, View } from "react-native";

const BudgetStatus = () => {
  return (
    <View className="mb-6">
      <Text className="section-title">Budget Status</Text>
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
                    backgroundColor: isOverBudget ? "#EF4444" : item.color,
                  }}
                  className="h-full rounded-full"
                />
              </View>
              {isOverBudget && (
                <Text className="text-red-400 text-xs mt-1 font-medium">
                  ⚠️ Over budget by ${(item.spent - item.limit).toFixed(2)}
                </Text>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default BudgetStatus;
