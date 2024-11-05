import MainLayout from "@/app/mainLayout";
import style from "./certificadoid.module.css";
import CertificadoContainer from "@/components/CertificadoContainer/CertificadoContainer";
export default function Certificado() {
  return (
    <MainLayout>
      <main className={style.certificado}>
        <CertificadoContainer />
      </main>
    </MainLayout>
  );
}
