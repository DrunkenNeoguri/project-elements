import { PostgrestResponse } from '@supabase/supabase-js';

export function getTypedDocData<TDataType>(doc: PostgrestResponse<TDataType>): TDataType | null {
  const data: unknown = doc;
  if (data && typeof data === 'object') {
    return data as TDataType;
  }
  return null;
}

export function getParsedJsonData<TJSONType>(json: string): TJSONType | null {
  try {
    const parsedData: unknown = JSON.parse(json);
    return parsedData as TJSONType;
  } catch {
    return null;
  }
}
