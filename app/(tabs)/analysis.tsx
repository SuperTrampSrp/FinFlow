import BudgetStatus from "@/components/budgetStatus";
import ChartSection from "@/components/chartSection";
import { FilterNavBar } from "@/components/FilterNavBar";
import SummaryCard from "@/components/summaryCard";
import { ScrollView, View } from "react-native";

const Analysis = () => {
  return (
    <View className="flex-1 bg-slate-950">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-5 pt-16 pb-8">
          <FilterNavBar selectedFilter="weekly" onFilterChange={() => {}} />
          <SummaryCard />
          <ChartSection />
          <BudgetStatus />
        </View>
      </ScrollView>
    </View>
  );
};

export default Analysis;
