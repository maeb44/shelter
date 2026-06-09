const response = await fetch('./assets/src/pets.json');
if (!response.ok) throw new Error('pets.json not loaded');
export const petsData = await response.json();