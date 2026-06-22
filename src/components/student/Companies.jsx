import { assets } from "../../assets/assets";

const Companies = () => {
  const logos = [
    assets.microsoft_logo,
    assets.walmart_logo,
    assets.accenture_logo,
    assets.adobe_logo,
    assets.paypal_logo,
  ];

  return (
    <div className="py-16">
      <p className="text-center text-base text-gray-500">
        Trusted by learners from
      </p>

      {/* Wrapper */}
      <div className="max-w-3xl w-full mx-auto overflow-hidden mt-8">
        {/* Track */}
        <div className="animate-marquee flex items-center gap-12 md:gap-20">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="company-logo"
              className="w-20 md:w-28 shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
