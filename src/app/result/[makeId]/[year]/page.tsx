import Button from '@/components/button';
import Car from '@/components/car';
import { getVehicleData, getVehicleMakes } from '@/lib/api';
import { VehicleMakesResponse } from '@/types';

type PageProps = {
  params: {
    makeId: string;
    year: string;
  };
};

export async function generateStaticParams() {
  const res: VehicleMakesResponse = await getVehicleMakes();
  const cars = res.Results;

  const currentYear = new Date().getFullYear();
  const paths = [];

  for (const car of cars) {
    for (let year = 2015; year <= currentYear; year += 1) {
      paths.push({
        makeId: car.MakeId.toString(),
        year: year.toString(),
      });
    }
  }

  return paths;
}

export default async function Page({ params: { makeId, year } }: PageProps) {
  const cars = await getVehicleData(makeId, year);

  return (
    <div className="p-6">
      <h1 className="text-center">Vehicle Data</h1>

      <Button className="mt-4" href="/">
        Home
      </Button>

      {cars.Results.length > 0 ? (
        <ul className="mt-4 flex flex-col gap-4">
          {cars.Results.map(({ Make_Name, Model_ID, Model_Name }) => (
            <Car
              key={Model_ID}
              name={Make_Name}
              model={Model_Name}
              year={year}
            />
          ))}
        </ul>
      ) : (
        <p className="text-center">No data</p>
      )}
    </div>
  );
}
