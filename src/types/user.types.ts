import { User } from '@supabase/supabase-js';

export type SupabaseUserType = User & {
  user_metadata: {
    username: string;
  };
};

export type AccountFormType = {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
};

export type UserInfoType = {
  id?: string;
  email: string;
  username: string;
  created_at: number;
  recent_travel?: {
    title: string;
    id: string;
  };
  upcoming_travel?: {
    title: string;
    id: string;
    departure_at: string;
  };
};
