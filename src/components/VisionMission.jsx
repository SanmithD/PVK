function VisionMission() {
  return (
    <section className="py-16 sm:py-24 bg-background-light/50 dark:bg-background-dark/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-background-light border-2 border-gray-500 dark:bg-background-dark p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold  mb-4">
              Our Vision
            </h3>
            <p className="font-medium">
              To be the leading Kannada platform for thought-provoking content, fostering a community of informed and engaged viewers.
            </p>
          </div>

          <div className="bg-background-light border-2 border-gray-500 dark:bg-background-dark p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold  mb-4">
              Our Mission
            </h3>
            <p className="font-medium">
              To create high-quality, accessible content that educates, entertains, and inspires, while promoting Kannada language and culture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
