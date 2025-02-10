import Image from "next/image";
import SkillsSection from "./skills";

const AboutPage = () => {
  return (
    <div>
      <div className="py-24 xl:mr-0 lg:mr-5 mr-0">
        <div className="w-[90%] max-w-7xl mx-auto px-4 md:px-5 lg:px-5">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Image Section */}
            <div className="w-[90%] mx-auto">
              <Image
                className="sm:mt-5 ml-5 w-[90%] h-auto rounded-sm object-cover"
                src="https://pagedone.io/asset/uploads/1717742431.png"
                alt="about"
                width={400}
                height={400}
              />
            </div>

            {/* Content Section */}
            <div className="w-[80%] flex flex-col justify-center gap-8">
              <div className="space-y-4">
                <h6 className="text-orange-500 font-extrabold uppercase">
                  About Me
                </h6>
                <h2 className="text-gray-800 text-2xl font-extrabold">
                  A passionate Junior Designer and Front-End Developer based in
                  Dhaka, Bangladesh.
                </h2>
                <p className="text-gray-400 font-semibold pt-5">
                  I am passionate Junior Designer, and I&apos;m very dedicated
                  to my work. With 1 year of experience as a professional Web
                  developer, I have acquired the skills necessary to make your
                  project a success.
                </p>
              </div>

              <Image
                src="https://i.postimg.cc/RCcNHk1p/signature.png"
                alt="signature"
                width={300}
                height={100}
                className="w-48"
              />

              <a
                href="/SanchitaDevi_CV.pdf"
                download="SanchitaDevi_CV.pdf"
                className="bg-orange-500 py-4 text-white text-xl font-bold rounded-full px-10 w-fit hover:bg-orange-600 transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
      <SkillsSection />
    </div>
  );
};

export default AboutPage;
