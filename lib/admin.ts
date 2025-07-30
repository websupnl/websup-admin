import env from './env';

export const isSiteAdmin = (email?: string | null) => {
  if (!email) return false;
  return email === env.adminEmail;
};
