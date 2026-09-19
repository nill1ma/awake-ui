import { clsx } from 'clsx';

export function Loading() {
  return (
    <div className={clsx('awake-loading-container')}>
      <div className={clsx('awake-loading-dots')}>
        <span className={clsx('awake-loading-dot')}></span>
        <span className={clsx('awake-loading-dot')}></span>
        <span className={clsx('awake-loading-dot')}></span>
      </div>
    </div>
  );
}