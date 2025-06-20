import { UserInfoType } from "../types/user.types";

export function getLocalStorageItem<T>(
  key: string,
  defaultValue: T | null = null
): T | null {
  try {
    const item = localStorage.getItem(key);
    if (item === null) {
      return defaultValue;
    }
    return JSON.parse(item) as T;
  } catch (error) {
    return defaultValue;
  }
}

export function setLocalStorageItem<T>(key: string, value: T): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
}

export function removeLocalStorageItem(key: string): boolean {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}

export const localStorageHandlers = {
  getUserInfo(): UserInfoType | null {
    return getLocalStorageItem<UserInfoType>("userInfo");
  },

  setUserInfo(userInfo: UserInfoType): boolean {
    return setLocalStorageItem("userInfo", userInfo);
  },

  getCurrentKeywordList(): string[] | null {
    return getLocalStorageItem<string[]>("currentKeywordList", []);
  },

  setCurrentKeywordList(keywords: string[]): boolean {
    return setLocalStorageItem("currentKeywordList", keywords);
  },
};
