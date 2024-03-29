'use client'

import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LocationsContext = createContext({});

interface LocationsProviderProps {
  children: React.ReactNode;
}

export const LocationsProvider: React.FC<LocationsProviderProps> = ({ children }) => {
  const [storeLocationsFiltered, setStoreLocationsFiltered] = useState([]);

  return (
    <LocationsContext.Provider value={{ storeLocationsFiltered, setStoreLocationsFiltered }}>
      {children}
    </LocationsContext.Provider>
  );
};

LocationsProvider.propTypes = {
  children: PropTypes.node.isRequired
};
