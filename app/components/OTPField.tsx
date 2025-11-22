import React, { useEffect, useRef } from 'react';
import {
    NativeSyntheticEvent,
    TextInput,
    TextInputKeyPressEventData,
    View
} from 'react-native';

interface OTPInputProps {
  code: string[];
  setCode: React.Dispatch<React.SetStateAction<string[]>>;
  numberOfDigits?: number;
}

const OTPInput: React.FC<OTPInputProps> = ({ code, setCode, numberOfDigits = 4 }) => {
  const textInputRefs = useRef<Array<TextInput | null>>(Array(numberOfDigits).fill(null));

  useEffect(() => {
    if (!code || code.length !== numberOfDigits) {
      setCode(Array(numberOfDigits).fill(''));
    }
  }, [numberOfDigits, setCode]);

  const handleTextChange = (text: string, index: number) => {
    if (text.length > 1) {
      const newCode = Array(numberOfDigits).fill('');
      for (let i = 0; i < Math.min(text.length, numberOfDigits); i++) {
        newCode[i] = text[i];
      }
      setCode(newCode);

      const nextIndex = Math.min(text.length, numberOfDigits - 1);
      textInputRefs.current[nextIndex]?.focus();
      return;
    }

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text !== '' && index < numberOfDigits - 1) {
      textInputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    const key = e.nativeEvent.key;
    if (key === 'Backspace' && code[index] === '' && index > 0) {
      textInputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View className="flex-row justify-around w-4/5 self-center mb-10">
      {code.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => { textInputRefs.current[index] = ref; }}
          className="w-12 h-14 border border-gray-300 rounded-xl text-center text-2xl font-poppins-bold text-gray-800 bg-gray-100"
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(text) => handleTextChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          value={digit}
          // Kursor sekarang akan terlihat karena caretHidden tidak ada
        />
      ))}
    </View>
  );
};

export default OTPInput;
