import { useTranslation, Trans } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  return (
<section
  id="about"
  className="scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6 pt-1 sm:pt-2 pb-10 grid md:grid-cols-2 gap-6 text-sm sm:text-base"
>



      {/* Sol taraf - Hakkımda */}
      <div className="flex justify-center items-center">
        <div className="max-w-md w-full text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center md:text-left">
            {t('about.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            <Trans
              i18nKey="about.description"
              components={{ strong: <strong className="font-semibold" /> }}
              values={{ name: 'Fatma Beyza Bozkurt' }}
            />
          </p>
        </div>
      </div>

      {/* Sağ taraf - Eğitim ve Deneyim */}
      <div className="space-y-8">
        {/* Eğitim Kutusu */}
        <div className="bg-gray-50 p-2 rounded-xl shadow-md mt-4">
          <h3 className="text-lg sm:text-xl font-bold mb-4">{t('about.educationTitle')}</h3>
          <div className="border-l-4 border-gray-300 pl-4 space-y-5">
            <div>
              <h4 className="font-semibold">{t('about.bartinUniversity')}</h4>
              <p>{t('about.bartinDepartment')}</p>
              <p className="italic text-sm">2021 – 2025</p>
            </div>
            <div>
              <h4 className="font-semibold">{t('about.istanbulUniversity')}</h4>
              <p>{t('about.istanbulDepartment')}</p>
              <p className="italic text-sm">2022 – 2024</p>
            </div>
          </div>
        </div>

        {/* Deneyim Kutusu */}
        <div className="bg-gray-50 p-2 rounded-xl shadow-md">
          <h3 className="text-lg sm:text-xl font-bold mb-4">{t('about.experienceTitle')}</h3>
          <div className="border-l-4 border-gray-300 pl-4 space-y-5">
            <div>
              <h4 className="font-semibold">{t('about.cakey.title')}</h4>
              <p className="italic text-sm">{t('about.cakey.date')}</p>
              <p className="text-gray-700">{t('about.cakey.text')}</p>
            </div>
            <div>
              <h4 className="font-semibold">{t('about.internship.title')}</h4>
              <p className="italic text-sm">{t('about.internship.date')}</p>
              <p className="text-gray-700">{t('about.internship.text')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
