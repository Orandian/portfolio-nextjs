import AboutMe from "@/components/about-me";
import DownloadCVButton from "@/components/downloadCV";
import Navigator from "@/components/navigator";

export default function Home() {
  return (
    <div className="space-y-4">
      <div className="space-y-6 text-gray-300">
        <h1 className="text-5xl font-bold">Hello.</h1>
        <p className="text-2xl font-bold">My name is Yan Naing Htwe</p>
      </div>

      <AboutMe />
      <DownloadCVButton />
      <Navigator />
    </div>
  );
}
