import { redirect } from "next/navigation";
import { axiosInstance } from "@/lib/axios";
import { AxiosError } from "axios";
import NotFound from "./not-found";
import { queryClient } from "@/lib/react-query";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getRedirectUrl(slug: string) {
  try {
    const response = await axiosInstance.get(`/${slug}`, {
      maxRedirects: 0,
      validateStatus: (status) => status >= 200 && status < 400,
    });

    // Jika backend return JSON
    if (response.data?.url) {
      return response.data.url;
    }

    queryClient.invalidateQueries({ queryKey: ["links"] });

    // Jika backend return 301/302 dengan location header
    return response.headers.location || null;
  } catch (error) {
    // Type-safe error handling
    if (error instanceof AxiosError) {
      // Jika backend return 301/302, ambil dari header Location
      if (error.response?.status === 301 || error.response?.status === 302) {
        return error.response.headers.location || null;
      }
    }

    return null;
  }
}

export default async function RedirectPage({ params }: Props) {
  const { slug } = await params;
  const redirectUrl = await getRedirectUrl(slug);

  if (!redirectUrl) {
    return <NotFound />;
  }

  redirect(redirectUrl);
}
