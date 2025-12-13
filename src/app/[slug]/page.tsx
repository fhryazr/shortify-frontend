// import { getPostBySlug } from "@/lib/posts";

import { Spinner } from "@/components/ui/spinner";
import NotFound from "../not-found";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  // const post = getPostBySlug(slug);

  if (slug === "not-found") {
    return <NotFound />
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-2">
      <p>Redirecting to short.ly/{slug}</p>
      <Spinner className="size-8" />
    </div>
  );
}
