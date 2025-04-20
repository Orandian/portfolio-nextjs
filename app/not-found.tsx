import Link from "next/link";

const page = () => {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <div className="space-y-4">
        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/" className="underline underline-offset-4">
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default page;
