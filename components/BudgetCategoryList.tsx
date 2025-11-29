// components/BudgetCategoryList.tsx
import { Edit2, Trash2 } from "lucide-react-native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

interface Category {
  id: string;
  name: string;
  budget: number;
  spent: number;
  icon: string;
  color: string;
}

interface BudgetCategoryListProps {
  categories: Category[];
  onEdit?: (category: Category) => void;
  onDelete?: (categoryId: string) => void;
}

function getStatusIndicator(percentage: number) {
  if (percentage <= 70) {
    return { emoji: "🟢", label: "Safe", color: "#10B981" };
  } else if (percentage <= 100) {
    return { emoji: "🟡", label: "Close to limit", color: "#F59E0B" };
  } else {
    return { emoji: "🔴", label: "Exceeded", color: "#EF4444" };
  }
}

export function BudgetCategoryList({
  categories,
  onEdit,
  onDelete,
}: BudgetCategoryListProps) {
  return (
    <View className="px-5 mb-6">
      <Text className="text-white text-lg font-bold mb-4">Categories</Text>

      <ScrollView scrollEnabled={false} showsVerticalScrollIndicator={false}>
        {categories.map((category, index) => {
          const percentage = (category.spent / category.budget) * 100;
          const status = getStatusIndicator(percentage);
          const remaining = category.budget - category.spent;
          const isOverBudget = remaining < 0;

          return (
            <View
              key={category.id}
              className={`bg-white/10 rounded-2xl p-4 border border-white/20 mb-3 ${
                index === categories.length - 1 ? "mb-0" : ""
              }`}
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 10,
                elevation: 5,
              }}
            >
              {/* Category Header */}
              <View className="flex-row items-center justify-between mb-3">
                <View className="flex-row items-center flex-1">
                  <View
                    className="w-12 h-12 rounded-xl items-center justify-center mr-3 border border-white/10"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <Text className="text-2xl">{category.icon}</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-white font-bold text-base">
                      {category.name}
                    </Text>
                    <Text className="text-white/50 text-xs">
                      {status.emoji} {status.label}
                    </Text>
                  </View>
                </View>

                {/* Edit & Delete Buttons */}
                <View className="flex-row gap-2">
                  <TouchableOpacity
                    onPress={() => onEdit?.(category)}
                    className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-2"
                  >
                    <Edit2 color="#3B82F6" size={16} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => onDelete?.(category.id)}
                    className="bg-red-500/20 border border-red-500/30 rounded-lg p-2"
                  >
                    <Trash2 color="#EF4444" size={16} />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Budget Amount */}
              <View className="flex-row justify-between mb-3 px-1">
                <View>
                  <Text className="text-white/60 text-xs mb-1">Spent</Text>
                  <Text className="text-white font-bold">
                    ${category.spent.toFixed(2)}
                  </Text>
                </View>
                <View>
                  <Text className="text-white/60 text-xs mb-1">Budget</Text>
                  <Text className="text-white font-bold">
                    ${category.budget.toFixed(2)}
                  </Text>
                </View>
                <View className="items-end">
                  <Text className="text-white/60 text-xs mb-1">
                    {isOverBudget ? "Over" : "Remaining"}
                  </Text>
                  <Text
                    className={`font-bold ${
                      isOverBudget ? "text-red-400" : "text-green-400"
                    }`}
                  >
                    ${Math.abs(remaining).toFixed(2)}
                  </Text>
                </View>
              </View>

              {/* Progress Bar with Color Indicator */}
              <View className="mb-2">
                <View className="flex-row justify-between mb-1">
                  <View className="flex-row items-center">
                    <Text
                      style={{ fontSize: 12 }}
                      className="text-white/70 font-medium"
                    >
                      {status.emoji} {percentage.toFixed(0)}%
                    </Text>
                  </View>
                  <Text className="text-white/50 text-xs">
                    of ${category.budget}
                  </Text>
                </View>

                {/* Progress Bar */}
                <View className="h-3 bg-white/20 rounded-full overflow-hidden border border-white/10">
                  <View
                    style={{
                      width: `${Math.min(percentage, 100)}%`,
                      backgroundColor: status.color,
                    }}
                    className="h-full rounded-full"
                  />
                </View>
              </View>

              {/* Status Message */}
              {percentage > 100 && (
                <Text className="text-red-400 text-xs font-semibold mt-2">
                  ⚠️ Exceeded budget by $
                  {(category.spent - category.budget).toFixed(2)}
                </Text>
              )}
              {percentage > 70 && percentage <= 100 && (
                <Text className="text-yellow-400 text-xs font-semibold mt-2">
                  📊 Approaching budget limit
                </Text>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
