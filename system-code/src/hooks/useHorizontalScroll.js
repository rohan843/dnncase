/**
 * A hook to allow mouse-based horizontal scrolling.
 * 
 * @param {MutableRefObject} refOfElementToScroll The component to which the scroll must be applied.
 * @param {number} scrollScale By what value the Y-direction scroll must be multiplied.
 * @param {string} behavior Scroll Behavior ['instant' | 'smooth' | 'auto']
 * @returns An event handler that must be applied to an 'onWheel' or an 'onWheelCapture' event (the event object must be passed as well).
 */
export default function useHorizontalScrolling(
  refOfElementToScroll,
  scrollScale = 1.3,
  behavior = "instant"
) {
  return (event) => {
    const container = refOfElementToScroll.current;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount * scrollScale,
      behavior,
    });
  };
}
