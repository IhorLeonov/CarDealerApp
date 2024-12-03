import { VehicleDataResponse, VehicleMakesResponse } from '@/types';

export const sendRequest = async <T>(url: string, init?: RequestInit) => {
  try {
    const res = await fetch(url, init);

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`API Error: ${errorText}`);
    }

    return (await res.json()) as T;
  } catch (error) {
    console.error('API Request failed', error);

    throw error;
  }
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getVehicleMakes = (init?: RequestInit) => {
  return sendRequest<VehicleMakesResponse>(
    `${BASE_URL}/GetMakesForVehicleType/car?format=json`,
    init,
  );
};

export const getVehicleData = (
  makeId: string,
  year: string,
  init?: RequestInit,
) => {
  return sendRequest<VehicleDataResponse>(
    `${BASE_URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    init,
  );
};
