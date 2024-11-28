const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function getDreamInterpretation(name: string, dream: string) {
  try {
    const response = await fetch(`${API_URL}/interpret`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, dream }),
    });

    if (!response.ok) {
      throw new Error('Failed to get interpretation');
    }

    return await response.json();
  } catch (error) {
    console.error('Error getting interpretation:', error);
    throw error;
  }
}