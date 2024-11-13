import { useState, useEffect, useMemo } from "react";
import { Animated, Easing } from "react-native";

export default function useHook(toggle: boolean) {
  const [mount, setMount] = useState(toggle);
  const [header, setHeader] = useState(false);
  const [animation] = useState(new Animated.Value(0.0));

  useEffect(() => {
    if (toggle) {
      setMount(true);
    }
    Animated.timing(animation, {
      toValue: toggle ? 1.0 : 0.0,
      duration: 400,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start((e) => {
      if (e.finished && !toggle) {
        setMount(false);
      }
    });
  }, [toggle, animation]);

  return useMemo(
    () => ({
      mount,
      header,
      animation,
      setHeader,
    }),
    [mount, header, animation],
  );
}
