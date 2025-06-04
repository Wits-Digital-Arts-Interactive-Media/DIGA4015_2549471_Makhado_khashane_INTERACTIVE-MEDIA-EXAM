import React, { createContext, useContext, useState, useEffect } from 'react';

const AdoptedPetContext = createContext();

export const AdoptedPetProvider = ({ children }) => {
  const [adoptedPets, setAdoptedPets] = useState([]);

  const adoptPet = (pet, ownerInfo) => {
    const adoptedPet = {
      ...pet,
      id: `${pet.id}-adopted-${Date.now()}`,
      adoptionDate: new Date(),
      ownerInfo,
      stats: {
        energy: 100,
        hunger: 100,
        happiness: 100,
        sleepiness: 0
      },
      activities: []
    };
    setAdoptedPets(prev => [...prev, adoptedPet]);
    return adoptedPet;
  };

  const updatePetStats = (petId, newStats) => {
    setAdoptedPets(prev => prev.map(pet => 
      pet.id === petId 
        ? { ...pet, stats: { ...pet.stats, ...newStats } }
        : pet
    ));
  };

  const addPetActivity = (petId, activity) => {
    setAdoptedPets(prev => prev.map(pet => 
      pet.id === petId 
        ? {
            ...pet,
            activities: [
              { ...activity, timestamp: new Date() },
              ...pet.activities
            ]
          }
        : pet
    ));
  };

  const getAdoptedPet = (petId) => {
    return adoptedPets.find(pet => pet.id === petId);
  };

  // Decrease pet stats over time
  useEffect(() => {
    const interval = setInterval(() => {
      setAdoptedPets(prev => prev.map(pet => ({
        ...pet,
        stats: {
          ...pet.stats,
          energy: Math.max(0, pet.stats.energy - 1),
          hunger: Math.max(0, pet.stats.hunger - 1),
          happiness: Math.max(0, pet.stats.happiness - 1),
          sleepiness: Math.min(100, pet.stats.sleepiness + 1)
        }
      })));
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  // Save to localStorage
  useEffect(() => {
    const savedPets = localStorage.getItem('adoptedPets');
    if (savedPets) {
      setAdoptedPets(JSON.parse(savedPets));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('adoptedPets', JSON.stringify(adoptedPets));
  }, [adoptedPets]);

  return (
    <AdoptedPetContext.Provider value={{
      adoptedPets,
      adoptPet,
      updatePetStats,
      addPetActivity,
      getAdoptedPet
    }}>
      {children}
    </AdoptedPetContext.Provider>
  );
};

export const useAdoptedPet = () => {
  const context = useContext(AdoptedPetContext);
  if (!context) {
    throw new Error('useAdoptedPet must be used within an AdoptedPetProvider');
  }
  return context;
};
