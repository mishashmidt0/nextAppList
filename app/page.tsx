import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href={"/list/1"}>К списку</Link>
    </main>
  );
}
