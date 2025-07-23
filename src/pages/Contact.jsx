import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="bg-white py-24 px-6 text-center flex flex-col items-center"
    >
      {/* Başlık */}
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
        {t("contact.title")} <span className="inline-block animate-bounce">💌</span>
      </h2>

      {/* Açıklama */}
      <p className="text-gray-600 text-lg md:text-xl mb-4">
        {t("contact.description")}
      </p>

      {/* Mail */}
      <a
        href="mailto:beyza.bozkurtt@gmail.com"
        className="text-xl md:text-2xl font-medium text-pink-400 hover:text-pink-600 transition mb-8 underline underline-offset-4 decoration-pink-300 hover:decoration-pink-600"
      >
        beyza.bozkurtt@gmail.com
      </a>

      {/* Sosyal Butonlar */}
      <div className="flex gap-6 flex-wrap justify-center">
        <a
          href="https://github.com/beyzabozkurtt"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-black hover:text-white bg-gray-100 hover:bg-black border border-gray-300 px-5 py-2 rounded-full transition-transform hover:scale-105 shadow-sm"
        >
          <FaGithub className="text-xl" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/fbeyzabozkurt"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white bg-[#0077b5] hover:bg-[#005a8d] px-5 py-2 rounded-full transition-transform hover:scale-105 shadow-sm"
        >
          <FaLinkedin className="text-xl" />
          LinkedIn
        </a>
      </div>

      
     
    </section>
  );
}
