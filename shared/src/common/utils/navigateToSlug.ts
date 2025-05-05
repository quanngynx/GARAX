import router from 'next/router';

export const handleNavigateToSlug = (routedAt: string, name: string) => {
  const slugName = name.toLowerCase().replace(/\s+/g, '-');
  console.log('table name::', slugName);
  router.push(`${routedAt}/${slugName}`);
};
