import Galery from "@/components/Galery/Galery";
import { getData } from "@/utils/data";
import { metadata } from "../layout";

export default async function Page() {
  metadata.title = "Florcita Nails - Galería de fotos";
  const data = await getData();
  return (
    <main>
      <Galery data={data} />
    </main>
  );
}
