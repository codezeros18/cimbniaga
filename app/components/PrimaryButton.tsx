import { Text, TouchableOpacity } from 'react-native'

interface PrimaryButtonProps {
  title: string
  onPress?: () => void
}

export default function PrimaryButton({ title, onPress }: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-blue-600 py-3 rounded-xl w-full mt-4"
    >
      <Text className="text-white text-center text-base font-semibold">
        {title}
      </Text>
    </TouchableOpacity>
  )
}
