"use server";

import { z } from "zod";
import { customizeResume } from "@/ai/flows/customize-resume";
import { RESUME_DATA } from "@/lib/data";

const formSchema = z.object({
  companyDescription: z.string(),
  jobDescription: z.string(),
});

type FormState = {
  success: boolean;
  data?: { customizedResume: string };
  error?: string;
};

export async function handleCustomizeResume(
  values: z.infer<typeof formSchema>
): Promise<FormState> {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      error: "Invalid form data.",
    };
  }
  
  const { companyDescription, jobDescription } = validatedFields.data;

  try {
    const result = await customizeResume({
      resumeText: RESUME_DATA.resumeText,
      companyDescription,
      jobDescription,
    });
    return { success: true, data: result };
  } catch (error) {
    console.error("AI customization failed:", error);
    return {
      success: false,
      error: "Failed to customize resume. Please try again.",
    };
  }
}
