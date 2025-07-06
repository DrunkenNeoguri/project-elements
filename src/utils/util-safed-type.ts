import { DocumentData } from 'firebase/firestore';

export function getTypedDocData<TDataType>(doc: DocumentData): TDataType | null {
  const data: unknown = doc.data();
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
