import { useTranslation, Trans } from 'react-i18next'
import profile from '../assets/ben.jpeg'
import { FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa'
import {
  SiNestjs, SiMysql, SiMongodb, SiFirebase,
  SiLaravel, SiExpo, SiPostman, SiApollographql
} from 'react-icons/si'

export default function Home() {
  const { t } = useTranslation()

  const skills = [
    { icon: <FaJsSquare className="text-yellow-400" />, name: 'JavaScript' },
    { icon: <FaReact className="text-blue-500" />, name: 'React.js' },
    { icon: <FaReact className="text-cyan-500" />, name: 'React Native' },
    { icon: <FaNodeJs className="text-green-600" />, name: 'Node.js' },
    { icon: <SiNestjs className="text-red-600" />, name: 'NestJS' },
    { icon: <SiLaravel className="text-red-500" />, name: 'Laravel' },
    { icon: <SiMysql className="text-blue-700" />, name: 'MySQL' },
    { icon: <SiMongodb className="text-green-700" />, name: 'MongoDB' },
    { icon: <FaGitAlt className="text-orange-500" />, name: 'Git' },
    { icon: <FaGithub className="text-gray-800" />, name: 'GitHub' },
    { icon: <SiFirebase className="text-yellow-500" />, name: 'Firebase' },
    { icon: <SiExpo className="text-black" />, name: 'Expo' },
    { icon: <SiPostman className="text-orange-600" />, name: 'Postman' },
    { icon: <SiApollographql className="text-purple-500" />, name: 'RESTful APIs' },
  ]

  return (
   <section
  id="home"
  className="min-h-screen flex flex-col justify-start items-center px-6 pt-6 md:pt-10 pb-4 bg-white"
>


      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Sol Alan - Yazı */}
        <div className="space-y-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black whitespace-nowrap">
            {t('home.title')}
          </h1>

          <p className="text-gray-700 leading-relaxed text-lg">
            <Trans
              i18nKey="home.subtitle"
              components={{ strong: <strong /> }}
              values={{ name: 'Fatma Beyza Bozkurt' }}
            />
          </p>
        </div>

        {/* Sağ Alan - Görsel */}
        <div className="flex justify-center md:justify-end items-center">
          <img
            src={profile}
            alt="Fatma Beyza Bozkurt"
            className="w-64 md:w-72 object-cover rounded-xl shadow"
          />
        </div>
      </div>
<div className="max-w-6xl w-full mt-10 overflow-x-hidden">
  <div className="flex gap-8 animate-scroll w-[200%] py-4">
    {[...skills, ...skills].map((tech, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center min-w-[90px] h-[90px] transition-transform duration-300 hover:scale-110"
      >
        <div className="text-3xl mb-1">{tech.icon}</div> {/* İkon boyutu küçüldü */}
        <span className="text-sm">{tech.name}</span>
      </div>
    ))}
  </div>
</div>


    </section>
  )
}
