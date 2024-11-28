import { Dream } from '../types/dream';

export function saveDream(dream: Dream): void {
  const dreams = getDreams();
  dreams.push(dream);
  localStorage.setItem('dreams', JSON.stringify(dreams));
}

export function getDreams(): Dream[] {
  const dreams = localStorage.getItem('dreams');
  if (!dreams) return [];
  
  const parsedDreams = JSON.parse(dreams) as Dream[];
  const twentyFourHoursAgo = Date.now() - 24 * 60 * 60 * 1000;
  
  // Filter dreams from last 24 hours
  return parsedDreams
    .filter(dream => dream.timestamp > twentyFourHoursAgo)
    .sort((a, b) => b.timestamp - a.timestamp);
}