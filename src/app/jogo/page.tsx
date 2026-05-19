import { Suspense } from "react";
import SlotMachineClient from "./GamePageClient";

export default function JogoPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100svh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--ink-dim)",
          }}
        >
          A carregar...
        </div>
      }
    >
      <SlotMachineClient />
    </Suspense>
  );
}
