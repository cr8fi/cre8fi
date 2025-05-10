import { FaGem, FaUsers, FaUserCircle, FaStore } from "react-icons/fa";

const features = [
  {
    title: "Content reward system",
    description:
      "Earn points by sharing your content and engaging with the community.",
    icon: <FaGem className="text-white text-5xl" />,
  },
  {
    title: "Interactive social features",
    description:
      "Connect with a thriving creator community through posts, comments, and secure private messaging.",
    icon: <FaUsers className="text-white text-5xl" />,
  },
  {
    title: "Creators Profile",
    description:
      "Create a profile that highlights your skills and showcases your portfolio.",
    icon: <FaUserCircle className="text-white text-5xl" />,
  },
  {
    title: "Market Place for Service and Assets",
    description:
      "Explore a dynamic marketplace where you can offer and purchase creative services or trade digital assets.",
    icon: <FaStore className="text-white text-5xl" />,
  },
];

const FeaturesSection = () => {
  return (
    <section className="font-['Sora'] bg-[url('./assets/bg.svg')] bg-cover bg-center bg-no-repeat py-20 px-6 text-white flex justify-center">
      <div className="w-full max-w-[1202.47px]">
        <div className="w-[768.5px] mx-auto flex flex-col items-center gap-[9px] mb-[60px] text-center">
          <h2 className="text-5xl md:text-6xl font-bold">Our Features</h2>
          <p className="text-white text-xl font-normal md:text-lg">
            Discover what Cre8Fi can do for you
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-[24px] px-4 ">
          {/* Left Column */}
          <div className="flex flex-col gap-[24px] w-full md:w-[590.24px]">
            {features.slice(0, 2).map((feature, index) => {
              const height = index === 0 ? "h-[320px]" : "h-[180px]";
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-[#202442] to-[#2A1B53] border-[2px] border-[#3C3F5B] rounded-[19.61px] p-6 flex flex-col gap-4 ${height} transition-transform duration-300 ease-in-out hover:scale-[1.02]`}
                >
                  <div className="w-[60px] h-[60px] flex items-center justify-center rounded-[12px] border border-white/20">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl text-left font-semibold">{feature.title}</h3>
                  <p className="text-sm text-left text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-[24px] w-full md:w-[588.24px]">
            {features.slice(2, 4).map((feature, index) => {
              const height = index === 0 ? "h-[180px]" : "h-[320px]";
              return (
                <div
                  key={index + 2}
                  className={`bg-gradient-to-br from-[#202442] to-[#2A1B53] border-[2px] border-[#3C3F5B] rounded-[19.61px] p-6 flex flex-col gap-4 ${height} transition-transform duration-300 ease-in-out hover:scale-[1.02]`}
                >
                  <div className="w-[60px] h-[60px] flex items-center justify-center rounded-[12px] border border-white/20">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl text-left font-semibold">{feature.title}</h3>
                  <p className="text-sm text-left text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
