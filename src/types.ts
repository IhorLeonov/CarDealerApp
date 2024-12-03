export type Car = {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
};

export type VehicleMakesResponse = {
  Count: number;
  Message: string;
  Results: Car[];
  SearchCriteria: string;
};

export type VehicleData = {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
};

export type VehicleDataResponse = {
  Count: number;
  Message: string;
  Results: VehicleData[];
  SearchCriteria: string;
};
