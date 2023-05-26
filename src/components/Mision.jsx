import React from 'react'
import { UserGroupIcon, TrophyIcon,  LockClosedIcon } from '@heroicons/react/24/outline'

function Mision() {
    const features = [
        {
          name: 'Misión',
          description:
            'El club deportivo Rocket es un organismo deportivo de la disciplina de voleibol en todas sus modalidades, cuyo propósito es fomentar la práctica de este deporte, enmarcado en los principios y valores para el fortalecimiento del tejido social.',
          icon: UserGroupIcon,
        },
        {
          name: 'Visión',
          description:
            'El club deportivo Rocket se proyecta para el año 2025, como una organización altamente competente en la disciplina del voleibol, con un equipo de trabajo altamente calificado y certificado, que permitan alcanzar los objetivos brindando un servicio amable, cercano, oportuno y de calidad para cumplir con las expectativas de los afiliados, beneficiarios y clientes externos.',
          icon: TrophyIcon,
        },

      ]
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">F.F.A.A</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Introduccion
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Club Deportivo Rocket. una organización sin fines de lucro que promueve el voleibol en todas sus modalidades, ramas y categorías. Además, se enfoca en fomentar la recreación, el aprovechamiento del tiempo libre y la masificación de programas de interés público y social. El club está afiliado y administrado por la Liga de Voleibol de Fuerzas Armadas, con sede en Villavicencio (Meta).
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Mision