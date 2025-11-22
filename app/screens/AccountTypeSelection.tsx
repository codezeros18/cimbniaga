import { useRouter } from "expo-router"
import { useState } from "react"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

type AccountOption = {
  id: string
  title: string
  description: string
}

const accountOptions: AccountOption[] = [
  {
    id: "octo_savers",
    title: "OCTO Savers",
    description: "Tabungan bebas biaya admin untuk transaksi harian yang simple.",
  },
  {
    id: "xtra_dana",
    title: "Xtra Dana",
    description: "Cocok buat dana darurat dengan bunga kompetitif dan setoran fleksibel.",
  },
  {
    id: "xtra_premier",
    title: "Xtra Premier",
    description: "Nikmati limit transaksi tinggi dan prioritas layanan eksklusif CIMB.",
  },
]

export default function AccountTypeSelection() {
  const router = useRouter()
  const [accountTypeId, setAccountType] = useState<string | null>(null)

  const handleNext = () => {
    if (!accountTypeId) return
    const selectedOption = accountOptions.find((option) => option.id === accountTypeId)
    router.push({
      pathname: "/screens/ReviewAndSign",
      params: {
        accountTypeId,
        accountTypeName: selectedOption?.title ?? "",
      },
    })
  }

  return (
    <ScrollView className="flex-1 bg-white" contentContainerStyle={{ paddingBottom: 40 }}>
      <View className="px-6 pt-10">
        <View className="flex-row items-center justify-between">
          <Image
            source={require("../../assets/images/cimb-logo.webp")}
            style={{ width: 110, height: 28 }}
            resizeMode="contain"
          />
          <View className="rounded-full px-3 py-1 border border-gray-200">
            <Text className="text-xs text-gray-500">Step 4 of 6</Text>
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-sm font-semibold text-cimb-red">PRA-TANDA TANGAN</Text>
          <Text className="text-3xl font-semibold text-gray-900 mt-2 leading-tight">
            Pilih rekening sesuai tujuanmu.
          </Text>
          <Text className="text-base text-gray-500 mt-2">
            Rekomendasi di bawah membantu kamu melanjutkan proses tanpa repot.
          </Text>
        </View>
      </View>

      <View className="px-6 mt-6">
        <View className="bg-cimb-red rounded-3xl px-5 py-4 shadow-lg shadow-red-200">
          <Text className="text-white font-semibold text-lg">Tips</Text>
          <Text className="text-white/80 text-sm mt-1">
            Kamu masih bisa mengganti jenis rekening sebelum tanda tangan digital, jadi pilih
            sementara aja dulu.
          </Text>
        </View>
      </View>

      <View className="px-6 mt-6">
        <View className="bg-white rounded-3xl shadow-xl shadow-gray-200 p-5">
          <Text className="text-base font-semibold text-gray-900 mb-4">Rekomendasi CIMB</Text>
          {accountOptions.map((option, index) => {
            const isSelected = option.id === accountTypeId
            const isLast = index === accountOptions.length - 1

            return (
              <TouchableOpacity
                key={option.id}
                activeOpacity={0.9}
                onPress={() => setAccountType(option.id)}
                className={`flex-row items-start py-4 ${isLast ? "" : "border-b border-gray-100"}`}
              >
                <View
                  className={`w-10 h-10 rounded-2xl mr-4 items-center justify-center ${
                    isSelected ? "bg-cimb-red/10" : "bg-gray-100"
                  }`}
                >
                  <Text className="text-xs font-semibold text-gray-600">
                    {(index + 1).toString().padStart(2, "0")}
                  </Text>
                </View>
                <View className="flex-1 pr-3">
                  <Text
                    className={`text-lg font-semibold ${
                      isSelected ? "text-cimb-red" : "text-gray-900"
                    }`}
                  >
                    {option.title}
                  </Text>
                  <Text className="text-sm text-gray-500 mt-1">{option.description}</Text>
                </View>
                <View
                  className={`w-5 h-5 mt-1 rounded-full border-2 ${
                    isSelected ? "bg-cimb-red border-cimb-red" : "border-gray-300"
                  }`}
                />
              </TouchableOpacity>
            )
          })}
        </View>
      </View>

      <View className="px-6 mt-8">
        <PrimaryButton title="Next" onPress={handleNext} />
        <Text className="text-xs text-gray-400 text-center mt-2">
          Pastikan pilihan sesuai sebelum lanjut ke Review & Sign.
        </Text>
      </View>

      <View className="items-center mt-10">
        <Text className="text-gray-300 text-xs">© 2025 CIMB Niaga Digital Banking</Text>
      </View>
    </ScrollView>
  )
}
