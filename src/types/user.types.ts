export type AccountFormType = {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
};

export type UserInfoType = {
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
