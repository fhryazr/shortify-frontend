import Logo from "@/components/shared/logo";
import LoginCard from "@/features/auth/components/LoginCard";

const page = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-4">
      <Logo />
      <LoginCard />
    </section>
  );
};

export default page;
