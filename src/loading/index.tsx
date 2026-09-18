import { clsx } from 'clsx';

export function Loading() {
  return (
    <div className={clsx('loading-container')}>
      <div className={clsx('loading-dots')}>
        <span className={clsx('dot')}></span>
        <span className={clsx('dot')}></span>
        <span className={clsx('dot')}></span>
      </div>
    </div>
  );
}