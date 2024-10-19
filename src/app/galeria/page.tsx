import Galery from "@/components/Galery/Galery";
import { getData } from "@/utils/data";

export default async function Page() {
  const data = await getData();
  return (
    <main>
      <Galery data={data} />
    </main>
  );
}
