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
  createdAt: number;
  recentTravel?: {
    title: string;
    id: string;
  };
  upcomingTravel?: {
    title: string;
    id: string;
    departureAt: string;
  };
};
