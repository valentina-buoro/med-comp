import AsyncStorage from '@react-native-async-storage/async-storage'; // Standard storage fallback
//import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Medication } from '../types';

interface MedState {
  medications: Medication[];
  addMedication: (med: Medication) => void;
  removeMedication: (id: string) => void;
}

export const useMedStore = create<MedState>()(
  persist(
    (set) => ({
      medications: [],
      addMedication: (med) => set((state) => ({ 
        medications: [...state.medications, { ...med, id: uuidv4() }] 
      })),
      removeMedication: (id) => set((state) => ({
        medications: state.medications.filter((m) => m.id !== id)
      })),
    }),
    {
      name: 'medication-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);