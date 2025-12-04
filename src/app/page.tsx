import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button variant="default">Click Me</Button>
      <Button variant="secondary">Click Me</Button>
      <Button variant="destructive">Click Me</Button>
      <Button variant="ghost">Click Me</Button>
      <Button variant="link">Click Me</Button>
      <Button variant="outline">Click Me</Button>
    </div>
  );
}
