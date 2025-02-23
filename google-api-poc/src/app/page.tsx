'use client'

import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps'
import { useState } from 'react'

export default function Home() {
  const medcloud = {
    description:
      '33 Francisco Ribas St, Centro, Centro Comercial Guaraúna, Ponta Grossa, Brazil',
    name: 'Medcloud',
    lat: -25.093985,
    lng: -50.162449,
  }
  const [location, setLocation] = useState<{ lat: number; lng: number }>(
    medcloud,
  )

  const anotherLocations = [
    medcloud,
    {
      name: 'Alto Piquiri',
      description: 'Av. Brasil, 2151 - Centro, Alto Piquiri - PR, 87580-000',
      lat: -24.029363,
      lng: -53.443084,
    },
    {
      name: 'Hospital Santa Casa',
      description:
        'R. Dr. Francisco Burzio, 774 - Centro, Ponta Grossa - PR, 84010-200',
      lat: -25.089151306950964,
      lng: -50.16176246473454,
    },
  ]

  return (
    <div className="flex">
      <div className="p-5 bg-white flex flex-col gap-2 h-[100vh] w-[50%]">
        {anotherLocations.map((loc, index) => {
          return (
            <button key={index} onClick={() => setLocation(loc)}>
              <div className="bg-yellow-600 flex-col text-left rounded-md p-2 flex">
                <p className="font-semibold">{loc.name}</p>
                <p>{loc.description}</p>
              </div>
            </button>
          )
        })}
      </div>
      {/* // TODO - Precisa da API Key do Google Maps para AdvancedMarker funcionar corretamente. */}
      <APIProvider apiKey="">
        <div className="mr-0 m-auto w-[50%] h-[100vh]">
          <Map zoom={19} center={location}></Map>
          <AdvancedMarker position={location} />
        </div>
      </APIProvider>
    </div>
  )
}
