import { transactions } from "@/constants/sampleData";
import { Text, View } from "react-native";

const RecentTransactions = () => {
  return (
    <View className="mb-6">
      <Text className="section-title">Recent Transactions</Text>
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
                {isIncome ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default RecentTransactions;
