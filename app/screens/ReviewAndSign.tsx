import { useLocalSearchParams, useRouter } from "expo-router"
import { useMemo, useRef, useState } from "react"
import { GestureResponderEvent, Image, PanResponder, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Svg, { Path } from "react-native-svg"
import PrimaryButton from "../components/PrimaryButton"

type SignaturePoint = { x: number; y: number }
type SignatureLine = SignaturePoint[]

const DEFAULT_ACCOUNT_TYPE = "OCTO Savers"

const accountTypeLabels: Record<string, string> = {
  octo_savers: "OCTO Savers",
  xtra_dana: "Xtra Dana",
  xtra_premier: "Xtra Premier",
}

const documents = [
  {
    label: "Foto KTP",
    source: require("../../assets/images/card.png"),
  },
  {
    label: "Selfie",
    source: require("../../assets/images/illustration-onboarding.webp"),
  },
]

export default function ReviewAndSign() {
  const router = useRouter()
  const { accountTypeId, accountTypeName } = useLocalSearchParams<{
    accountTypeId?: string | string[]
    accountTypeName?: string | string[]
  }>()
  const [isAgreed, setIsAgreed] = useState(false)
  const [signatureLines, setSignatureLines] = useState<SignatureLine[]>([])

  const resolvedAccountTypeName =
    (Array.isArray(accountTypeName) ? accountTypeName[0] : accountTypeName) ||
    accountTypeLabels[(Array.isArray(accountTypeId) ? accountTypeId[0] : accountTypeId) ?? ""] ||
    DEFAULT_ACCOUNT_TYPE

  const reviewItems = [
    { label: "Nama Lengkap", value: "Vanessa Valendhita Santoso" },
    { label: "NIK", value: "3201185604980007" },
    { label: "Jenis Rekening", value: resolvedAccountTypeName },
  ]

  const addPointToLastLine = (event: GestureResponderEvent, startNewLine = false) => {
    const { locationX, locationY } = event.nativeEvent
    setSignatureLines((prev) => {
      if (startNewLine || prev.length === 0) {
        return [...prev, [{ x: locationX, y: locationY }]]
      }
      const clone = [...prev]
      const lastLine = clone[clone.length - 1]
      clone[clone.length - 1] = [...lastLine, { x: locationX, y: locationY }]
      return clone
    })
  }

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt) => addPointToLastLine(evt, true),
      onPanResponderMove: (evt) => addPointToLastLine(evt),
    }),
  ).current

  const hasSignature = signatureLines.some((line) => line.length > 1)

  const signaturePaths = useMemo(
    () =>
      signatureLines.map((line) => {
        if (!line.length) return ""
        return line.reduce((path, point, index) => {
          const command = index === 0 ? "M" : "L"
          return `${path} ${command} ${point.x} ${point.y}`
        }, "")
      }),
    [signatureLines],
  )

  const handleSubmit = () => {
    if (!isAgreed || !hasSignature) return
    router.push("/screens/StatusScreen")
  }

  const canSubmit = isAgreed && hasSignature

  const resetSignature = () => setSignatureLines([])

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
            <Text className="text-xs text-gray-500">Step 5 of 6</Text>
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-sm font-semibold text-cimb-red">REVIEW DATA</Text>
          <Text className="text-3xl font-semibold text-gray-900 mt-2 leading-tight">
            Cek lagi semua data sebelum tanda tangan.
          </Text>
          <Text className="text-base text-gray-500 mt-2">
            Pastikan informasi personal, dokumen, dan jenis rekening sudah sesuai.
          </Text>
        </View>
      </View>

      <View className="px-6 mt-6">
        <View className="bg-cimb-red rounded-3xl px-5 py-4 shadow-lg shadow-red-200">
          <Text className="text-white font-semibold text-lg">Reminder</Text>
          <Text className="text-white/80 text-sm mt-1">
            Setelah submit kamu bisa pantau status pembukaan rekening. Pastikan tanda tangan dan
            persetujuan kamu sudah jelas.
          </Text>
        </View>
      </View>

      <View className="px-6 mt-6">
        <View className="bg-white rounded-3xl border border-gray-100 shadow-sm">
          <View className="px-5 py-5 border-b border-gray-100">
            <Text className="text-base font-semibold text-gray-900">Data Pribadi</Text>
            <Text className="text-xs text-gray-500 mt-1">Pastikan data sudah benar sebelum kamu submit.</Text>
          </View>
          <View className="px-5 py-3">
            {reviewItems.map((item, idx) => (
              <View
                key={item.label}
                className={`py-3 ${idx !== reviewItems.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <Text className="text-xs uppercase tracking-wide text-gray-400">{item.label}</Text>
                <Text className="text-base text-gray-900 mt-1 font-semibold">{item.value}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View className="px-6 mt-6">
        <View className="bg-white rounded-3xl border border-gray-100 shadow-sm">
          <View className="px-5 py-5 border-b border-gray-100">
            <Text className="text-base font-semibold text-gray-900">Dokumen</Text>
          </View>
          <View className="flex-row justify-between px-5 py-4">
            {documents.map((doc, index) => (
              <View key={doc.label} className={`flex-1 ${index === 0 ? "mr-3" : "ml-3"}`}>
                <View className="rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
                  <Image source={doc.source} className="w-full h-32" resizeMode="cover" />
                </View>
                <Text className="text-sm text-gray-700 font-medium mt-2 text-center">{doc.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View className="px-6 mt-6">
        <View className="bg-white rounded-3xl border border-gray-100 shadow-sm">
          <View className="px-5 pt-5">
            <Text className="text-base font-semibold text-gray-900">Tanda Tangan Digital</Text>
            <Text className="text-xs text-gray-500 mt-1">Gambar tanda tanganmu di kotak berikut.</Text>
          </View>
          <View className="px-5 py-4">
            <View
              className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 overflow-hidden"
              style={{ height: 200 }}
            >
              <View className="flex-1" {...panResponder.panHandlers}>
                <Svg width="100%" height="100%">
                  {signaturePaths.map((path, idx) => (
                    <Path
                      key={`signature-line-${idx}`}
                      d={path}
                      stroke="#C1121F"
                      strokeWidth={3}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ))}
                </Svg>
              </View>
            </View>
            <View className="flex-row justify-between items-center mt-3">
              <Text className="text-xs text-gray-500">Pastikan tanda tangan jelas dan sesuai KTP.</Text>
              <TouchableOpacity onPress={resetSignature}>
                <Text className="text-sm font-semibold text-cimb-red">Reset</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View className="px-6 mt-6">
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setIsAgreed((prev) => !prev)}
          className="flex-row items-start gap-3"
        >
          <View
            className={`w-5 h-5 rounded-md border items-center justify-center ${
              isAgreed ? "bg-cimb-red border-cimb-red" : "border-gray-300"
            }`}
          >
            {isAgreed && <View className="w-2.5 h-2.5 bg-white rounded-[2px]" />}
          </View>
          <Text className="text-sm text-gray-700 flex-1">
            Saya menyetujui Terms & Conditions serta menyatakan bahwa data yang saya berikan sudah benar.
          </Text>
        </TouchableOpacity>
      </View>

      <View className="px-6 mt-8">
        <View className={`${!canSubmit ? "opacity-60" : ""}`}>
          <PrimaryButton title="Submit" onPress={canSubmit ? handleSubmit : undefined} />
        </View>
        {!canSubmit && (
          <Text className="text-xs text-red-500 text-center mt-2">
            Tandatangani dan centang persetujuan untuk melanjutkan.
          </Text>
        )}
      </View>

      <View className="items-center mt-10">
        <Text className="text-gray-300 text-xs">© 2025 CIMB Niaga Digital Banking</Text>
      </View>
    </ScrollView>
  )
}
