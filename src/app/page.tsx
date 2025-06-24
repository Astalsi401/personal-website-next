import { Routes } from "@/config/routes";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-5 mx-auto">
          <Link
            className="block rounded-sm bg-white/10 p-2.5 hover:bg-white/20"
            href={Routes.public.testServer}
          >
            Server Test
          </Link>
          <Link
            className="block rounded-sm bg-white/10 p-2.5 hover:bg-white/20"
            href={Routes.public.testClient}
          >
            Client Test
          </Link>
        </div>
      </main>
    </div>
  );
}
