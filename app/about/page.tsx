import Image from "next/image";

interface Members {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const team: Members[] = [
  {
    name: "Jane Smith",
    role: "Founder & Editor-in-Chief",
    bio: "Jane has been writing about technology and culture for over a decade. She founded this blog with the mission of making complex topics accessible to everyone.",
    imageUrl: "pic2.svg",
  },
  {
    name: "John Doe",
    role: "Senior Writer",
    bio: "John specializes in in-depth analysis of emerging technologies and their impact on society. He has a background in computer science and journalism.",
    imageUrl: "pic1.svg",
  },
];

const AboutPage = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 bg-[#F8F9FA] min-h-screen ">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About Our Blog</h1>
        <p className="text-xl text-gray-600 mb-8">
          Exploring the intersection of technology, culture, and human
          experience through thoughtful writing and analysis.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-purple-300 to-pink-200  p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">What We Do</h3>
            <p className="text-gray-600">
              We create in-depth content that helps our readers understand and
              navigate the rapidly evolving digital world. Our articles combine
              technical expertise with accessible writing to deliver valuable
              insights.
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-300 to-pink-200 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <p className="text-gray-600">
              We believe in thorough research, honest reporting, and presenting
              complex topics in ways that empower our readers. Every article we
              publish adheres to these principles.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center bg-gradient-to-r from-pink-300 to-purple-200 p-6 rounded-lg shadow-md"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={200}
                  height={200}
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500 mb-4">{member.role}</p>
              <p className="text-gray-600 text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-xl text-gray-600 mb-8">
          Have questions or want to collaborate? We d love to hear from you.
        </p>
        <button className="bg-[#5a47ab] text-white px-8 py-3 rounded-lg hover:bg-[#D05270] transition-colors">
          Contact Us
        </button>
      </section>
    </main>
  );
};

export default AboutPage;
