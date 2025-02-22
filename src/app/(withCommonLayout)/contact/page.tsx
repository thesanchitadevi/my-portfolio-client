import ContactForm from "@/components/ui/Contact/ContactForm";
import { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "Contact | Sanchita Devi",
  description: "Contact me for any assistance",
};

const ContactPage = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <h6 className="text-orange-500 font-extrabold uppercase">
            Contact me
          </h6>
          <h2 className="text-gray-800 dark:text-gray-100 text-2xl md:text-3xl font-extrabold md:w-1/2">
            Feel free to contact me if any assistance is needed in the future
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left p-6 rounded-xl transition-shadow"
              >
                <div className="bg-white dark:bg-black shadow-lg rounded-full p-4 mb-4 md:mb-0 md:mr-4">
                  <item.icon className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-gray-800 dark:text-gray-100 text-lg font-semibold mb-1">
                    {item.title}
                  </h4>
                  {item.title === "Phone" ? (
                    <Link
                      href={`tel:${item.description}`}
                      className="text-gray-600 dark:text-gray-100 text-sm hover:text-orange-600 transition-colors"
                    >
                      {item.description}
                    </Link>
                  ) : item.title === "Mail" ? (
                    <Link
                      href={`mailto:${item.description}`}
                      className="text-gray-600 dark:text-gray-100 text-sm hover:text-orange-600 transition-colors"
                    >
                      {item.description}
                    </Link>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-100 text-sm">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 p-6 sm:p-8  rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
          <div className="h-64 sm:h-96 rounded-xl overflow-hidden">
            <iframe
              title="Office Location Map"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Dhaka+(My%20Business%20Name)&amp;t=p&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              className="rounded-lg "
            />
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
