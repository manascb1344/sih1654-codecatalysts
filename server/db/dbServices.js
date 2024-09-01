import { db } from './index.js';
import { resumes } from './schema.js';
import { eq } from 'drizzle-orm';

export const saveResumeToDatabase = async (resumeData) => {
  try {
    const result = await db.insert(resumes).values(resumeData).returning();
    return result[0].id;
  } catch (error) {
    console.error('Error saving resume:', error);
    throw error;
  }
};

export const getResumeById = async (id) => {
  try {
    const result = await db.select().from(resumes).where(eq(resumes.id, id));
    return result[0];
  } catch (error) {
    console.error('Error fetching resume:', error);
    throw error;
  }
};

export const getAllResumes = async () => {
  try {
    const result = await db.select().from(resumes);
    return result;
  } catch (error) {
    console.error('Error fetching all resumes:', error);
    throw error;
  }
};