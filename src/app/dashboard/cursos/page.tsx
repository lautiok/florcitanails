import Cursos from "@/components/Cursos/Cursos";
import HeaderLayout from "../headerLayour";

export default function Page() {
  return (
    <HeaderLayout>
      <section>
        <Cursos width="100%" />
      </section>
    </HeaderLayout>
  );
}
