import { MainContent } from "./home/MainContent";

import { Icons, ImageWrapper, Typography } from "lib";

const features = [
  {
    title: "Our Belief",
    icon: Icons.logo,
    description:
      "We believe in empowering individuals to secure their digital assets with ease and confidence. Our mission is to revolutionize asset protection in the digital age, ensuring peace of mind for our users in the face of market uncertainties.",
  },
  {
    title: "How We Empower You",
    icon: Icons.logo,
    description:
      "Our approach combines the security of blockchain technology with user-friendly services. By leveraging Ethereum, we offer flexible and reliable protection options through tokens, backed by a transparent and dynamic pricing system.",
  },
  {
    title: "Our Services",
    icon: Icons.logo,
    description:
      "Stabilan provides a suite of services including token-based asset protection, a market-responsive token pricing model, and opportunities for asset backing. All these are accessible through an intuitive and comprehensive user dashboard.",
  },
  {
    title: "Token-Based Insurance",
    icon: Icons.logo,
    description:
      "Purchase protection tokens using Ethereum to insure your digital assets. These tokens are your safeguard, offering adaptability and security in a fluctuating market.",
  },
  {
    title: "Asset Backing Opportunities",
    icon: Icons.logo,
    description:
      "Engage in our asset backing program to support other users' digital assets, while earning rewards for accurate market predictions. This feature promotes a collaborative and supportive ecosystem.",
  },
  {
    title: "User Dashboard",
    icon: Icons.logo,
    description:
      "Manage your protection tokens and backing activities through our user-friendly dashboard. It gives you a real-time overview of your investments and their market performance.",
  },
];

export default function Home() {
  return (
    <div>
      <MainContent />
      <div className="my-48">
        <div className="w-full text-center">
          <Typography type="h2">Stabilan - some more text here</Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mx-20 mt-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-sm rounded-3xl p-4">
              <div className="flex flex-col gap-4 p-4 items-center text-center">
                <ImageWrapper
                  src={feature.icon}
                  width={50}
                  height={50}
                  alt={`${feature.title} icon`}
                  className="w-12 h-12 mb-4"
                />
                <Typography type="h5" className="font-bold mb-2">
                  {feature.title}
                </Typography>
                <Typography type="body-regular">
                  {feature.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
