import BudgetStatus from "@/components/budgetStatus";
import ChartSection from "@/components/chartSection";
import RecentTransactions from "@/components/recentTransactions";
import SummaryCard from "@/components/summaryCard";
import { ScrollView, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-slate-950">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-5 pt-16 pb-8">
          <SummaryCard />
          <ChartSection />
          <BudgetStatus />
          <RecentTransactions />
        </View>
      </ScrollView>
    </View>
  );
}
