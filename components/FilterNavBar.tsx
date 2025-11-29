import { useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";

interface FilterNavBarProps {
  selectedFilter: string;
  onFilterChange: (
    filter: string,
    startDate?: string,
    endDate?: string
  ) => void;
}

export function FilterNavBar({
  selectedFilter,
  onFilterChange,
}: FilterNavBarProps) {
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filterOptions = [
    { id: "weekly", label: "Weekly", icon: "📅" },
    { id: "monthly", label: "Monthly", icon: "📊" },
    { id: "yearly", label: "Yearly", icon: "📈" },
    { id: "custom", label: "Custom", icon: "🎯" },
  ];

  const handleFilterSelect = (filterId: string) => {
    if (filterId === "custom") {
      setShowCustomModal(true);
    } else {
      onFilterChange(filterId);
    }
  };

  const handleCustomApply = () => {
    if (startDate && endDate) {
      onFilterChange("custom", startDate, endDate);
      setShowCustomModal(false);
      setStartDate("");
      setEndDate("");
    }
  };

  return (
    <>
      {/* Filter Navigation Bar */}
      <View className="pb-4">
        <View
          className="bg-white/5 rounded-2xl p-1 border border-white/10 flex-row"
          style={{
            shadowColor: "#8B5CF6",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 12,
            elevation: 5,
          }}
        >
          {filterOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              onPress={() => handleFilterSelect(option.id)}
              className={`flex-1 py-3 px-2 rounded-xl items-center justify-center mx-1 flex-row ${
                selectedFilter.startsWith(option.id)
                  ? "bg-gradient-to-r from-purple-600 to-blue-500 border border-purple-400/50"
                  : "bg-transparent border border-transparent"
              }`}
              style={{
                shadowColor: selectedFilter.startsWith(option.id)
                  ? "#8B5CF6"
                  : "transparent",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: selectedFilter.startsWith(option.id) ? 0.4 : 0,
                shadowRadius: 8,
                elevation: selectedFilter.startsWith(option.id) ? 5 : 0,
              }}
            >
              <Text className="text-lg mr-1">{option.icon}</Text>
              <Text
                className={`font-semibold text-sm ${
                  selectedFilter.startsWith(option.id)
                    ? "text-white"
                    : "text-white/60"
                }`}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Custom Date Modal */}
      <Modal
        transparent
        animationType="fade"
        visible={showCustomModal}
        onRequestClose={() => setShowCustomModal(false)}
      >
        <View className="flex-1 bg-black/50 justify-center items-center p-5">
          <View
            className="bg-slate-900 rounded-3xl p-6 w-full border border-white/20"
            style={{
              shadowColor: "#8B5CF6",
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.5,
              shadowRadius: 20,
              elevation: 10,
            }}
          >
            <Text className="text-white text-xl font-bold mb-4">
              Select Custom Period
            </Text>

            <View className="mb-4">
              <Text className="text-white/70 text-sm mb-2 font-semibold">
                Start Date
              </Text>
              <TextInput
                placeholder="YYYY-MM-DD"
                placeholderTextColor="#6B7280"
                value={startDate}
                onChangeText={setStartDate}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white"
              />
            </View>

            <View className="mb-6">
              <Text className="text-white/70 text-sm mb-2 font-semibold">
                End Date
              </Text>
              <TextInput
                placeholder="YYYY-MM-DD"
                placeholderTextColor="#6B7280"
                value={endDate}
                onChangeText={setEndDate}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white"
              />
            </View>

            <View className="flex-row gap-3">
              <TouchableOpacity
                onPress={() => setShowCustomModal(false)}
                className="flex-1 bg-white/10 rounded-lg py-3 border border-white/20"
              >
                <Text className="text-white text-center font-semibold">
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleCustomApply}
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg py-3 border border-purple-400/50"
              >
                <Text className="text-white text-center font-bold">Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
