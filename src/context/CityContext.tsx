import React, { createContext, useContext, useState } from 'react';

export const CITIES = [
  'Lucknow',
  'Jaipur',
  'Barabanki',
  'Jodhpur',
  'Varanasi',
  'Gorakhpur',
  'Udaipur',
] as const;

export type City = (typeof CITIES)[number];

export interface CityMetadata {
  city: City;
  state: 'Uttar Pradesh' | 'Rajasthan';
  discom: string;
  irradiance: string;
  sunnyDays: string;
  subsidyCap: string;
  peakTariff: string;
  office: string;
  phone: string;
  highlight: string;
}

export const CITY_DETAILS: Record<City, CityMetadata> = {
  Lucknow: {
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    discom: 'MVVNL / UPPCL (Madhyanchal)',
    irradiance: '5.2 kWh/m²/day',
    sunnyDays: '300 Days',
    subsidyCap: 'Up to ₹78,000 + 40% UPNEDA State Top-Up',
    peakTariff: '₹7.50 / kWh (Commercial LT)',
    office: 'C-12, Sector G, Aliganj, Lucknow — 226 024',
    phone: '+91 72399 92778',
    highlight: 'Corporate Headquarters & Central Dispatch',
  },
  Jaipur: {
    city: 'Jaipur',
    state: 'Rajasthan',
    discom: 'JVVNL / RRECL (Jaipur Discom)',
    irradiance: '5.8 kWh/m²/day',
    sunnyDays: '325 Days',
    subsidyCap: '30% MNRE CFA + RREC State Incentive',
    peakTariff: '₹8.20 / kWh (Industrial HT)',
    office: 'B-45, Malviya Nagar, Jaipur — 302 017',
    phone: '+91 72399 92778',
    highlight: 'Rajasthan Regional HQ & 24/7 O&M Cell',
  },
  Barabanki: {
    city: 'Barabanki',
    state: 'Uttar Pradesh',
    discom: 'MVVNL / UPPCL (Agri Feeder Zone)',
    irradiance: '5.1 kWh/m²/day',
    sunnyDays: '295 Days',
    subsidyCap: 'PM-KUSUM 60% Subsidized Pumping (Comp B & C)',
    peakTariff: '₹6.80 / kWh (Agro-Processing)',
    office: 'Near Shaheed Chowk, NH-28, Barabanki — 225 001',
    phone: '+91 72399 92778',
    highlight: 'PM-KUSUM Agricultural Pumping Hub',
  },
  Jodhpur: {
    city: 'Jodhpur',
    state: 'Rajasthan',
    discom: 'JdVVNL / RRECL (Jodhpur Discom)',
    irradiance: '6.1 kWh/m²/day',
    sunnyDays: '335 Days',
    subsidyCap: 'Open Access 1:1 Banking & Solar Park Wheeling',
    peakTariff: '₹7.90 / kWh (Warehousing)',
    office: 'Paota Circle, Jodhpur — 342 001',
    phone: '+91 72399 92778',
    highlight: 'High-Yield Desert Microgrid Hub',
  },
  Varanasi: {
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    discom: 'PuVVNL / UPNEDA (Purvanchal)',
    irradiance: '5.0 kWh/m²/day',
    sunnyDays: '290 Days',
    subsidyCap: 'PM Surya Ghar Muft Bijli Yojana Grid-Tied',
    peakTariff: '₹7.20 / kWh (Institutional)',
    office: 'Sigra Industrial Corridor, Varanasi — 221 002',
    phone: '+91 72399 92778',
    highlight: 'Institutional & MSME Rooftop Cluster',
  },
  Gorakhpur: {
    city: 'Gorakhpur',
    state: 'Uttar Pradesh',
    discom: 'PuVVNL / UPNEDA (Eastern Agri)',
    irradiance: '4.9 kWh/m²/day',
    sunnyDays: '285 Days',
    subsidyCap: 'PM-KUSUM Component C Solarisation Grant',
    peakTariff: '₹6.90 / kWh (Cold Chain & Agri)',
    office: 'Civil Lines, Gorakhpur — 273 001',
    phone: '+91 72399 92778',
    highlight: 'Eastern UP Agro-Cold Storage Desk',
  },
  Udaipur: {
    city: 'Udaipur',
    state: 'Rajasthan',
    discom: 'AVVNL / RRECL (Ajmer Discom)',
    irradiance: '5.7 kWh/m²/day',
    sunnyDays: '315 Days',
    subsidyCap: 'C&I Captive Net Metering & Wheeling Scheme',
    peakTariff: '₹8.10 / kWh (Industrial HT)',
    office: 'Sukher Industrial Area, Udaipur — 313 001',
    phone: '+91 72399 92778',
    highlight: 'Mineral & Textile Processing Solar EPC',
  },
};

interface CityContextValue {
  activeCity: City;
  setActiveCity: (city: City) => void;
  cityData: CityMetadata;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

const CityContext = createContext<CityContextValue>({
  activeCity: 'Lucknow',
  setActiveCity: () => {},
  cityData: CITY_DETAILS.Lucknow,
  modalOpen: false,
  setModalOpen: () => {},
});

export const CityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeCity, setActiveCity] = useState<City>('Lucknow');
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <CityContext.Provider
      value={{
        activeCity,
        setActiveCity,
        cityData: CITY_DETAILS[activeCity],
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};

export const useCity = () => useContext(CityContext);

