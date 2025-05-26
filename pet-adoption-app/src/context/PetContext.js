import React, { createContext, useContext, useState, useEffect } from 'react';

const PetContext = createContext();

const CAT_API_KEY = 'live_8955t4mvxLiei3ZRJkll1pPLaFjU7kI1Aow0Ab4bckh5J1SYgy2OYrfUuLjdsYN9';
const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search?limit=5';
const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random';

// Helper function to generate random pet names
const petNames = [
  "Luna", "Max", "Bella", "Charlie", "Lucy", "Leo", "Milo", "Daisy", "Rocky", "Lily",
  "Oliver", "Molly", "Buddy", "Lola", "Jack", "Sadie", "Duke", "Maggie", "Bear", "Sophie"
];

const getRandomName = () => petNames[Math.floor(Math.random() * petNames.length)];

// Helper function to generate random age
const getRandomAge = () => {
  const years = Math.floor(Math.random() * 12) + 1;
  return `${years} ${years === 1 ? 'year' : 'years'} old`;
};

const API = {
  getPets: async () => {
    try {
      // Fetch 5 cats
      const catsResponse = await fetch(CAT_API_URL, {
        headers: {
          'x-api-key': CAT_API_KEY
        }
      });
      const catsData = await catsResponse.json();
      
      // Fetch 5 dogs
      const dogPromises = Array(5).fill().map(async () => {
        const response = await fetch(DOG_API_URL);
        return response.json();
      });
      const dogsData = await Promise.all(dogPromises);

      // Format cats data
      const cats = catsData.map((cat, index) => ({
        id: `cat-${index}`,
        name: getRandomName(),
        type: 'cat',
        breed: cat.breeds?.[0]?.name || 'Mixed Breed',
        age: getRandomAge(),
        image: cat.url
      }));

      // Format dogs data
      const dogs = dogsData.map((dog, index) => ({
        id: `dog-${index}`,
        name: getRandomName(),
        type: 'dog',
        breed: dog.message.split('/')[4].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        age: getRandomAge(),
        image: dog.message
      }));

      return [...cats, ...dogs];
    } catch (error) {
      console.error('Error fetching pets:', error);
      throw new Error('Failed to fetch pets');
    }
  },

  submitAdoption: (data) => 
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: "Adoption request submitted successfully" });
      }, 1500);
    }),

  getFavorites: () => 
    new Promise((resolve) => {
      const favorites = localStorage.getItem('favorites');
      resolve(favorites ? JSON.parse(favorites) : []);
    }),

  addToFavorites: (pet) =>
    new Promise((resolve) => {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      const updatedFavorites = [...favorites, pet];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      resolve(updatedFavorites);
    }),

  removeFromFavorites: (petId) =>
    new Promise((resolve) => {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      const updatedFavorites = favorites.filter(pet => pet.id !== petId);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      resolve(updatedFavorites);
    })
};

export function PetProvider({ children }) {
  const [pets, setPets] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [adoptionRequests, setAdoptionRequests] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch pets on mount
  useEffect(() => {
    fetchPets();
    loadFavorites();
  }, []);

  const fetchPets = async () => {
    try {
      setLoading(true);
      const data = await API.getPets();
      setPets(data);
    } catch (err) {
      setError('Failed to fetch pets');
      console.error('Error fetching pets:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadFavorites = async () => {
    try {
      const data = await API.getFavorites();
      setFavorites(data);
    } catch (err) {
      console.error('Error loading favorites:', err);
    }
  };

  const addToFavorites = async (pet) => {
    try {
      const updatedFavorites = await API.addToFavorites(pet);
      setFavorites(updatedFavorites);
    } catch (err) {
      console.error('Error adding to favorites:', err);
    }
  };

  const removeFromFavorites = async (petId) => {
    try {
      const updatedFavorites = await API.removeFromFavorites(petId);
      setFavorites(updatedFavorites);
    } catch (err) {
      console.error('Error removing from favorites:', err);
    }
  };

  const submitAdoptionRequest = async (request) => {
    try {
      const response = await API.submitAdoption(request);
      if (response.success) {
        setAdoptionRequests(prev => [...prev, { ...request, id: Date.now() }]);
        return { success: true };
      }
    } catch (err) {
      console.error('Error submitting adoption request:', err);
      return { success: false, error: 'Failed to submit adoption request' };
    }
  };

  const value = {
    pets,
    favorites,
    adoptionRequests,
    selectedPet,
    loading,
    error,
    setSelectedPet,
    addToFavorites,
    removeFromFavorites,
    submitAdoptionRequest,
    refreshPets: fetchPets
  };

  return (
    <PetContext.Provider value={value}>
      {children}
    </PetContext.Provider>
  );
}

export function usePetContext() {
  const context = useContext(PetContext);
  if (!context) {
    throw new Error('usePetContext must be used within a PetProvider');
  }
  return context;
}
