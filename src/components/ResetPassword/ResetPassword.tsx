"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ResetPasswordContent } from "../ResetPasswordContent/ResetPasswordContent";

export default function ResetPassword() {
  const params = useSearchParams();
  const token = params.get("token");

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ResetPasswordContent token={token} />
    </Suspense>
  );
}
