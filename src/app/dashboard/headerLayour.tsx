import HeaderDash from "@/components/HeaderDashboard/HeaderDash";

export default function HeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ width: "100%" }}>
      <HeaderDash />
      {children}
    </section>
  );
}
