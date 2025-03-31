import type { Profile } from '../types';
import { sethrose } from './profiles/thesethrose';

// Add all profiles to this object
const profiles: Record<string, Profile> = {
  thesethrose: sethrose
};

export const getAllProfiles = (): Profile[] => {
  return Object.values(profiles);
};

export const getPublicProfiles = (): Profile[] => {
  return getAllProfiles().filter(profile => profile.isPublic);
};

export const getDirectoryProfiles = (): Profile[] => {
  return getAllProfiles().filter(profile => profile.isPublic && profile.showInDirectory);
};

export const getProfileByUsername = (username: string): Profile | undefined => {
  return profiles[username];
};
