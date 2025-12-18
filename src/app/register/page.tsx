import Logo from "@/components/shared/logo";
import RegisterCard from "@/features/auth/components/RegisterCard";

const page = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-4">
      <Logo />
      <RegisterCard />
    </section>
  );
};

export default page;
