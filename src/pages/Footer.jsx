import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#fefefe] border-t mt-20 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Sol - Telif */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Fatma Beyza Bozkurt
        </p>

        {/* Sağ - Başa Dön */}
        <a
          href="#top"
          className="text-sm text-gray-500 hover:text-black transition"
        >
          {t("footer.backToTop")} ↑
        </a>
      </div>
    </footer>
  );
}
