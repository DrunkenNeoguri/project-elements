import { createClient } from '@supabase/supabase-js';
import { sendErrorToSentry } from './util-sentry';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl as string, supabaseAnonKey as string);
export const supabaseAuth = supabase.auth;

export function supabaseDatabase(tableName: string) {
  try {
    return supabase.from(tableName);
  } catch (error) {
    sendErrorToSentry({
      type: 'client',
      context: 'util-supabase.supabaseDatabase',
      error: error as Error,
    });
    throw new Error('Supabase Load Error: Supabase를 불러올 수 없습니다.');
  }
}

export function supabaseStorage(dirName: string) {
  try {
    return supabase.storage.from(dirName);
  } catch (error) {
    sendErrorToSentry({
      type: 'client',
      context: 'util-supabase.firebaseStorage',
      error,
    });
    throw new Error('Firebase Storage Load Error: Firebase Storage를 불러올 수 없습니다.');
  }
}
