import React from "react";
import team from "../data/teamData.json"; // adjust path if needed

const About = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=80"
          alt="Shopping experience"
          className="w-full h-72 object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-3 text-lg md:text-xl italic">
            Zevoria – <span className="font-semibold">Discover. Desire. Deliver.</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto py-16 px-6 md:px-12 lg:px-24">
        <div className="space-y-8 text-lg leading-relaxed">
          <p>
            At <span className="font-semibold">Zevoria</span>, we believe shopping should be more
            than just a transaction—it should be an experience. Since our
            inception, we have been dedicated to creating a seamless, stylish,
            and satisfying online shopping journey for our customers.
          </p>

          <p>
            Our story is built on a foundation of <strong>innovation, integrity,
            and impact</strong>. From humble beginnings, we have grown into a
            forward-thinking e-commerce platform that values people, quality,
            and progress. Today, we proudly serve a wide range of customers who
            trust us to deliver not just products, but also confidence,
            convenience, and care.
          </p>

          {/* Mission & Vision */}
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Mission</h2>
          <p>
            Our mission is simple yet powerful: <em>to connect people with
            products that inspire joy, confidence, and fulfillment</em>. We are
            dedicated to making shopping effortless, exciting, and rewarding for
            everyone.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Vision</h2>
          <p>
            We envision a future where <strong>quality, trust, and innovation</strong>{" "}
            converge to shape a better shopping experience. We strive to be more
            than just an online store; we aim to be a trusted lifestyle partner
            that delivers value and satisfaction with every order.
          </p>

          {/* Core Values */}
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Core Values</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Integrity</strong> – We are honest, transparent, and dependable.</li>
            <li><strong>Excellence</strong> – We are committed to delivering the best every time.</li>
            <li><strong>Innovation</strong> – We embrace new ways to enhance the shopping journey.</li>
            <li><strong>Customer First</strong> – We listen, respond, and adapt to our customers’ needs.</li>
            <li><strong>Impact</strong> – We aim to leave a lasting positive impression with every delivery.</li>
          </ul>

          {/* Why Choose Us */}
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Why Choose Zevoria?</h2>
          <p>
            Choosing Zevoria means choosing more than just an online store. It
            means choosing a partner who:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Delivers quality</strong> products at affordable prices</li>
            <li><strong>Offers convenience</strong> with fast and reliable shipping</li>
            <li><strong>Provides trust</strong> through secure transactions and support</li>
            <li><strong>Brings style</strong> by curating modern, trending, and timeless products</li>
          </ul>

          {/* Closing */}
          <p className="mt-8">
            The future excites us. As we continue to grow, we remain steadfast
            in our commitment to providing innovative, reliable, and sustainable
            solutions that push boundaries and inspire progress. Together with
            our customers, we are shaping a tomorrow filled with discovery,
            desire, and delivery.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center
                transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-red-600 font-medium">{member.role}</p>
                <p className="text-sm text-gray-600 mt-3 text-center">{member.bio}</p>

                {/* Social Icons */}
                <div className="flex space-x-4 mt-4 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600"
                  >
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-400"
                  >
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-pink-500"
                  >
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
