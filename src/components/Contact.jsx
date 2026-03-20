const Contact = () => {
  return (
    <section className="w-full py-14 px-6 md:px-16 bg-white">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* LEFT SIDE - TEXT */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact Us
          </h2>

          <p className="text-gray-600 mb-6">
            Have questions or want to order something special? 
            Feel free to reach out to us anytime. We’d love to hear from you!
          </p>

          <div className="space-y-3 text-gray-700">
            <p>📍 Ambattur, Chennai</p>
            <p>📞 +91 98765 43210</p>
            <p>📧 ambattur.aarthi@gmail.com</p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form className="bg-white p-8 rounded-xl shadow-md space-y-4">
          
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;