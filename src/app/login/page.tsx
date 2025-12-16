import Logo from "@/components/shared/logo";
import Login from "@/features/auth/components/Login";

const page = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-4">
      <Logo />
      <Login />
    </section>
  );
};

export default page;
