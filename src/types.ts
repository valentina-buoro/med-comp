import { z } from 'zod';

// Define the Medication Schema
export const MedicationSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(2, "Name is required"),
  dosage: z.string().min(1, "Dosage is required (e.g., 500mg)"),
  frequency: z.enum(['Daily', 'Weekly', 'As Needed']),
  time: z.date(), // JS Date object for the reminder time
  imageUri: z.string().optional(),
});

export type Medication = z.infer<typeof MedicationSchema>;