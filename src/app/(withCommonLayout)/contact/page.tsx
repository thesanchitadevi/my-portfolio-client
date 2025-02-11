import { FiMapPin, FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

const contactItems = [
  {
    icon: FiMapPin,
    title: "Visit office",
    description: "123 Main Street, City, Country",
  },
  {
    icon: FiPhoneCall,
    title: "Phone",
    description: "+158 996 888",
  },
  {
    icon: TfiEmail,
    title: "Mail",
    description: "thesanchitadevi@gmail.com",
  },
];

const ContactPage = () => {
  return (
    <div>
      <div className="mt-6 max-w-6xl mx-auto">
        <div className="space-y-4">
          <h6 className="text-orange-500 font-extrabold uppercase ">
            Contact me
          </h6>
          <h2 className="text-gray-800 text-2xl font-extrabold w-full md:w-1/2">
            Feel free to contact me if any assistance is needed in the future
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {contactItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-center justify-center rounded-lg w-full h-44 p-5 gap-4"
              >
                <div className="bg-white rounded-full shadow-lg p-5">
                  {/* <FiMapPin className="w-7 h-7 text-orange-600" /> */}
                  {<item.icon className="w-7 h-7 text-orange-600" />}
                </div>
                <h4 className="text-gray-800 text-lg font-bold">
                  {item.title}
                  <p className="text-sm text-gray-500 mt-1">
                    {" "}
                    {item.description}
                  </p>
                </h4>
              </div>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-6xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
          <div className="w-[100%]">
            <iframe
              width="100%"
              height="400"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Dhaka+(My%20Business%20Name)&amp;t=p&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">cat gps tracker</a>
            </iframe>
          </div>

          <form className="ml-auo space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-none focus:border-blue-500"
            ></textarea>
            <button
              type="button"
              className="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-2.5 w-full !mt-6"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
