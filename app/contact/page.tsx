import ContactMe from "@/components/contact-me";
import Navigator from "@/components/navigator";

const page = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Contact Me</h1>
      <ContactMe />
      <Navigator />
    </div>
  );
};

export default page;
