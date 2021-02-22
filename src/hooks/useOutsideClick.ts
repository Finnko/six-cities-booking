import { useEffect, RefObject } from 'react';

type Event = MouseEvent | TouchEvent | KeyboardEvent;

const useOnClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: (event: Event) => void,
): void => {
  useEffect(() => {
    const listener = (e: Event) => {
      const el = ref.current;

      if (!el || el.contains((e.target as Node) || null)) {
        return;
      }
      handler(e);
    };

    const escapeListener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handler(e);
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    document.addEventListener('keyup', escapeListener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
      document.removeEventListener('keyup', escapeListener);
    };
  }, [ref, handler]);
};

export { useOnClickOutside };
