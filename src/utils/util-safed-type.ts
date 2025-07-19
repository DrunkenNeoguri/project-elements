export function getTypedObjectData<TDataType>(data: unknown): TDataType | null {
  if (data && typeof data === 'object' && !Array.isArray(data)) {
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
