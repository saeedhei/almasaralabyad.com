import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-100 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(45,212,191,0.1)_0%,_transparent_70%)]" aria-hidden="true" />
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div className="mb-12 md:mb-16 lg:mb-20 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4">
            About <span className="text-emerald-500">Al Masar Al Abyad</span>
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Our philosophy: Guiding you on a clear path to holistic well-being.
          </p>
        </div>

        <div className="rounded-xl shadow-lg overflow-hidden mb-12 md:mb-16 group">
          <Image
            src="/images/placeholder-image.webp"
            alt="The Al Masar Al Abyad team collaborating."
            width={1400}
            height={700}
            className="w-full h-auto object-cover transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-105"
            priority
            style={{ transform: 'scale(1.02)' }}
          />
        </div>

        <section className="space-y-8 md:space-y-10 lg:space-y-12 text-lg text-gray-700">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10">
            <h2 className="text-xl font-semibold text-emerald-600 mb-4">Our Guiding Principle: The White Path</h2>
            <p className="leading-relaxed">
              The name <strong className="font-semibold text-gray-800">&quot;Al Masar Al Abyad&quot;</strong>, meaning &quot;The White Path,&quot; embodies our core belief. We see the journey to optimal health and fitness as a unique and personal path for everyone. Our mission is to be your trusted companion, providing clear, effective, and evidence-based solutions tailored to your individual needs.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10">
            <h2 className="text-xl font-semibold text-emerald-600 mb-4">Expert Guidance, Personalized Support</h2>
            <p className="leading-relaxed">
              With years of dedicated experience, our team of highly qualified and passionate coaches is committed to delivering a personalized and convenient in-home coaching experience right here in Dubai. Furthermore, our certified nutrition specialists work closely with you to develop customized dietary plans that align with your lifestyle and aspirations, fostering sustainable healthy habits.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10">
            <h2 className="text-xl font-semibold text-emerald-600 mb-4">Building Lasting Relationships</h2>
            <p className="leading-relaxed">
              At Al Masar Al Abyad, we are dedicated to building more than just a service provider relationship. We aim to forge lasting connections based on trust and mutual respect with each of our valued clients. Your decision to embark on this journey with us fuels our passion and commitment. We sincerely hope that through our collaborative efforts, we can make a meaningful and positive impact on your well-being and the wider community.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10">
            <p className="leading-relaxed">
              We extend a warm welcome to the Al Masar Al Abyad family. We are confident that by choosing our expertise and personalized approach, you are taking a decisive step towards achieving your health and fitness goals. We eagerly anticipate celebrating your success!
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}