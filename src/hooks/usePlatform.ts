import usePlatforms from "./usePlatforms";

const usePlatform = (selectedPlatformId?: number) => {
  const { data: platforms, error } = usePlatforms();
  return platforms?.results.find((p) => p.id == selectedPlatformId);
};

export default usePlatform;
