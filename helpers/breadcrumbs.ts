import { navigationData } from "../lib/projects/navigation";

export const breadcrumbs = (index: number) => {
  const lastItemIndex = navigationData.length - 1;
  const atStart = index === 0;
  const atEnd = index === lastItemIndex;

  return {
    previous: navigationData[atStart ? lastItemIndex : index - 1],
    next: navigationData[atEnd ? 0 : index + 1],
  };
};
