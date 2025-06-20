import { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import { TravelType } from '../../../types/travel.types';

export default function useGetBarcode(id: string, type: TravelType) {
  const barcodeRef = useRef(null);

  useEffect(() => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, id.slice(-3), {
        format: 'CODE128B',
        lineColor: '#ffffff',
        background: type === 'foreign' ? '#1E90FF' : '#008D18',
        width: 1,
        height: 22,
        margin: 0,
        displayValue: false,
      });
    }
  }, [id, type]);

  return { barcodeRef };
}
