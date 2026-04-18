export const ProfileSkeleton = () => {
  return (
    <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
      <div className="animate-pulse sm:p-10 h-100 rounded-[40px] bg-gray-200" />
      <div className="animate-pulse sm:p-8 h-100 rounded-[40px] bg-gray-200" />
    </section>
  );
};
