import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="flex items-center justify-center">
        <div className="relative flex h-16 w-16">
          <div className="absolute border-t-4 border-blue-400 border-solid rounded-full w-12 h-12 animate-spin"></div>
        </div>
        <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          <Image
            src={"/images/logo/logo-dark.svg"}
            alt="Logo"
            width={150}
            height={30}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
