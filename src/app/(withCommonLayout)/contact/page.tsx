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
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <h6 className="text-orange-500 font-extrabold uppercase">
            Contact me
          </h6>
          <h2 className="text-gray-800 text-2xl md:text-3xl font-extrabold">
            Feel free to contact me if any assistance is needed in the future
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left bg-white p-6 rounded-xl transition-shadow"
              >
                <div className="bg-white shadow-lg rounded-full p-4 mb-4 md:mb-0 md:mr-4">
                  <item.icon className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-gray-800 text-lg font-semibold mb-1">
                    {item.title}
                  </h4>
                  {item.title === "Phone" ? (
                    <a
                      href={`tel:${item.description}`}
                      className="text-gray-600 text-sm hover:text-orange-600 transition-colors"
                    >
                      {item.description}
                    </a>
                  ) : item.title === "Mail" ? (
                    <a
                      href={`mailto:${item.description}`}
                      className="text-gray-600 text-sm hover:text-orange-600 transition-colors"
                    >
                      {item.description}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 p-6 sm:p-8 bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
          <div className="h-64 sm:h-96 rounded-xl overflow-hidden">
            <iframe
              title="Office Location Map"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Dhaka+(My%20Business%20Name)&amp;t=p&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              className="rounded-lg"
            />
          </div>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-600 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm text-gray-600 mb-1"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="How can we help?"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-gray-600 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message..."
                rows="4"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6  transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
