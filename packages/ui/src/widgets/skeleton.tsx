import classnames from 'classnames';

interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
  radius?: string;
}

const Skeleton = ({ width = '100%', height = '16px', className, radius = '4px' }: SkeletonProps) => {
  return (
    <div
      className={classnames('skeleton', className)}
      style={{ width, height, borderRadius: radius }}
    />
  );
}

export default Skeleton;