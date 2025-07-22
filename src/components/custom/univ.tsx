const UnivSection = () => {
  const BannerLogo = ({ src, alt }: { src: string; alt: string }) => (
    <div className="bg-gradient-to-r from-indigo-200 to-red-200 rounded-lg shadow-md p-2 transition-transform hover:scale-105 hover:shadow-lg">
      <img src={src} alt={alt} className="h-12 object-contain max-w-[160px]" />
    </div>
  );

  const BannerX = () => (
    <div className="text-2xl font-bold text-gray-600 animate-pulse">×</div>
  );

  return (
    <div className="w-full bg-gradient-to-r from-indigo-100 via-white to-red-100 py-4 px-6 flex items-center justify-center gap-4 flex-wrap border-t border-b">
      <BannerLogo
        src="/aun_logo.png"
        alt="American University of Nigeria"
      />
      <BannerX />
      <BannerLogo
        src="/k_logo.png"
        alt="Karunya Institute of Technology and Sciences"
      />
      <BannerX />
      <BannerLogo
        src="https://webfiles.amrita.edu/2024/04/WhQq1FiB-amrita-vishwa-vidyapeetham-university-logo-colored-version.svg"
        alt="Amrita Vishwa Vidyapeetham"
      />
    </div>
  );
};
export default UnivSection;