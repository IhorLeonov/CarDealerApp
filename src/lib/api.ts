import { VehicleDataResponse, VehicleMakesResponse } from '@/types';

export const sendRequest = async <T>(url: string, init?: RequestInit) => {
  const res = await fetch(url, init);

  if (!res.ok) {
    throw new Error(await res.text());
  }
  return (await res.json()) as T;
};

export const getVehicleMakes = (init?: RequestInit) => {
  return sendRequest<VehicleMakesResponse>(
    'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json',
    init,
  );
};

export const getVehicleData = (
  makeId: string,
  year: string,
  init?: RequestInit,
) => {
  return sendRequest<VehicleDataResponse>(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    init,
  );
};
