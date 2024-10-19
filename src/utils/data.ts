export async function getData() {
  const api = process.env.NEXT_PUBLIC_API_GALERY;

  try {
    if (!api) {
      console.error("La URL de la API no está definida.");
      throw new Error("La URL de la API no está definida");
    }
    const res = await fetch(api);
    const result = await res.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Error fetching data");
  }
}
