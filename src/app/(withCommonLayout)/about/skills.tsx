import { FaCode, FaServer, FaPaintBrush, FaCogs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
  SiGit,
} from "react-icons/si";

const SkillsSection = () => {
  const skills = [
    { name: "Frontend", Icon: FaCode, level: 90 },
    { name: "Backend", Icon: FaServer, level: 85 },
    { name: "UI/UX", Icon: FaPaintBrush, level: 80 },
    { name: "DevOps", Icon: FaCogs, level: 75 },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4">
          <h6 className="text-orange-500 font-extrabold uppercase">
            Technical Skills
          </h6>
          <h2 className="text-gray-800 text-2xl font-extrabold">
            I offer a Full-cycle of Web Development Services
          </h2>
          <p className="text-gray-400 text-bold ">
            Equipped with a versatile tech stack spanning modern frontend
            frameworks, cloud-native architectures, and DevOps automation. I
            specialize in crafting full-stack solutions that balance
            cutting-edge innovation with production-grade reliability. My
            toolkit evolves constantly, currently focused on building performant
            applications with TypeScript, Next.js, and scalable cloud services.
          </p>
        </div>

        {/* Skill Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          {skills.map(({ name, Icon, level }, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-orange-100  rounded-lg">
                  <Icon className="h-6 w-6 text-orange-700 " />
                </div>
                <h3 className="ml-4 text-xl font-semibold">{name}</h3>
              </div>

              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <span className="text-xs font-bold inline-block py-1 px-2 rounded-full text-gray-800">
                    {level}%
                  </span>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-100">
                  <div
                    style={{ width: `${level}%` }}
                    className="transition-all duration-500 ease-out bg-orange-600 rounded"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Icons Grid */}
        <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
          <div className="p-4 hover:scale-110 transition-transform">
            <SiReact className="w-12 h-12 mx-auto text-[#61DAFB]" />
            <span className="mt-2 block text-sm">React</span>
          </div>
          <div className="p-4 hover:scale-110 transition-transform">
            <SiNextdotjs className="w-12 h-12 mx-auto text-black" />
            <span className="mt-2 block text-sm">Next.js</span>
          </div>
          <div className="p-4 hover:scale-110 transition-transform">
            <SiTailwindcss className="w-12 h-12 mx-auto text-[#06B6D4]" />
            <span className="mt-2 block text-sm">Tailwind</span>
          </div>
          <div className="p-4 hover:scale-110 transition-transform">
            <SiNodedotjs className="w-12 h-12 mx-auto text-[#339933]" />
            <span className="mt-2 block text-sm">Node.js</span>
          </div>
          <div className="p-4 hover:scale-110 transition-transform">
            <SiTypescript className="w-12 h-12 mx-auto text-[#3178C6]" />
            <span className="mt-2 block text-sm">TypeScript</span>
          </div>
          <div className="p-4 hover:scale-110 transition-transform">
            <SiGit className="w-12 h-12 mx-auto text-[#F05032]" />
            <span className="mt-2 block text-sm">Git</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
