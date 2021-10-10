import AsyncStorage from '@react-native-async-storage/async-storage'
import { AsyncStoreDTO } from '../types'

export async function persistItemToStore(data: AsyncStoreDTO) {
  try {
    await AsyncStorage.setItem(data.key, data.value)
  } catch (error) {
    return error;
  }
}

export async function getItemFromStore(key: string) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    return error;
  }
}

export async function removeItemFromStore(key: string) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    return e;
  }
}
