import { BudgetCategoryList } from "@/components/BudgetCategoryList";
import { BudgetSummaryStats } from "@/components/BudgetSummaryStats";
import { MonthlyBudgetHeader } from "@/components/MonthlyBudgetHeader";
import { RemainingOverspentCard } from "@/components/RemainingOverspentCard";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";

interface Category {
  id: string;
  name: string;
  budget: number;
  spent: number;
  icon: string;
  color: string;
}
const Budget = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: "1",
      name: "Food & Dining",
      budget: 600,
      spent: 450,
      icon: "🍔",
      color: "#3B82F6",
    },
    {
      id: "2",
      name: "Transport",
      budget: 300,
      spent: 280,
      icon: "🚗",
      color: "#8B5CF6",
    },
    {
      id: "3",
      name: "Shopping",
      budget: 500,
      spent: 620,
      icon: "🛍️",
      color: "#EC4899",
    },
    {
      id: "4",
      name: "Utilities",
      budget: 400,
      spent: 380,
      icon: "💡",
      color: "#10B981",
    },
    {
      id: "5",
      name: "Entertainment",
      budget: 200,
      spent: 150,
      icon: "🎬",
      color: "#F59E0B",
    },
  ]);

  const totalBudget = categories.reduce((sum, cat) => sum + cat.budget, 0);
  const totalSpent = categories.reduce((sum, cat) => sum + cat.spent, 0);

  const handleAddCategory = () => {
    console.log("Add new category");
  };

  const handleEdit = (category: Category) => {
    console.log("Edit category:", category.name);
  };

  const handleDelete = (categoryId: string) => {
    setCategories(categories.filter((cat) => cat.id !== categoryId));
  };
  return (
    <View className="flex-1 bg-slate-950">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <MonthlyBudgetHeader
          totalBudget={totalBudget}
          totalSpent={totalSpent}
          onAddCategory={handleAddCategory}
        />

        <BudgetCategoryList
          categories={categories}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <RemainingOverspentCard
          totalBudget={totalBudget}
          totalSpent={totalSpent}
          monthName="October"
        />

        <BudgetSummaryStats categories={categories} totalSpent={totalSpent} />
      </ScrollView>
    </View>
  );
};

export default Budget;
