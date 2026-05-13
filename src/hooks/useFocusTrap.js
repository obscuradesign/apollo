import { useEffect } from 'react';

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

/**
 * WCAG 2.1.2 — No Keyboard Trap (modal variant)
 *
 * Traps keyboard focus within `containerRef` for the lifetime of the component.
 * - On mount: moves focus to the first focusable descendant.
 * - Tab at last element wraps to first; Shift+Tab at first wraps to last.
 * - Escape calls `onEscape`.
 * - On unmount: restores focus to the element active before the modal opened.
 */
export function useFocusTrap(containerRef, onEscape) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const previouslyFocused = document.activeElement;

    const getFocusable = () =>
      Array.from(container.querySelectorAll(FOCUSABLE)).filter(
        (el) => !el.closest('[aria-hidden="true"]')
      );

    // Move focus into the modal on open
    const focusable = getFocusable();
    if (focusable.length) focusable[0].focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onEscape?.();
        return;
      }
      if (e.key !== 'Tab') return;

      const els = getFocusable();
      if (!els.length) return;

      const first = els[0];
      const last = els[els.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
