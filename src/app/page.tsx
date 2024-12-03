import { getVehicleMakes } from '@/lib/api';
import HomePage from '@/pages/home';

export default async function Home() {
  const data = await getVehicleMakes();

  return (
    <main className="p-4">
      <HomePage data={data} />
    </main>
  );
}
