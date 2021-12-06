import Skeleton from "react-loading-skeleton";

export const LoadingProduct = () => {
  return <Skeleton height={127} width={127} duration={5} />;
};

export const LoadingAvatar = () => {
  return <Skeleton circle={true} height={82} width={82} />;
};
