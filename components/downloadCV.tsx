const DownloadCVButton = () => {
  return (
    <div className="flex md:items-center md:flex-row flex-col space-y-4 md:space-y-0 space-x-0 md:space-x-2 text-gray-400">
      <p>For more details -</p>
      <div className="flex items-center space-x-2">
        <a
          href="/YanNaingHtwe.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-semibold transition cursor-pointer underline underline-offset-4"
        >
          Download CV
        </a>
        <p className="text-sm">OR</p>
        <a
          href="/YanNaingHtwe.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-semibold transition cursor-pointer underline underline-offset-4"
        >
          View CV
        </a>
      </div>
    </div>
  );
};

export default DownloadCVButton;
