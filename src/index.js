import {useRef, useEffect} from 'react';

/**
 * A custom hook that triggers a callback when the component first mounts
 * @param {Function} callback The callback that will be triggered on mount
 */
export function useDidMount(callback) {
  useEffect(() => callback(), []);
}

/**
 * A custom hook that triggers a callback passing to it the old value whenever a
 * change is detected
 * @param {Function} callback The callback triggered on change
 * @param {Any} prop The prop to watch for updates
 */
export function useDidUpdate(callback, prop) {
  const propRef = useRef({prev: prop, now: prop});
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    propRef.current.now = prop;

    return () => {
      propRef.current.prev = prop;
    };
  }, [prop]);

  useEffect(() => {
    if (propRef.current.now !== propRef.current.prev) {
      callbackRef.current(propRef.current.prev);
    }
  }, [prop]);
}

/**
 * Custom hook that triggers a callback whenever a component is about to unmount
 * @param {Function} callback The callback triggered when unmounting
 */
export function useWillUnmount(callback) {
  const ref = useRef(callback);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  useEffect(() => () => ref.current(), []);
}
