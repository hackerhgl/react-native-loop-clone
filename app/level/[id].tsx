import React, { useRef, useEffect } from "react";
import { View, StatusBar, Animated, type ViewStyle } from "react-native";
import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@/contexts/Theme";
import { useSettings } from "@/contexts/Settings";
import useEngine from "@/engine";
import LevelSelectOverlay from "./SelectOverlay";
import useToggle from "./toggle.hook";
import Shapes from "./Shapes";

export default function LevelScreen() {
  const params = useGlobalSearchParams<{ id: string }>();
  const forceLevel = parseInt(params.id, 10) || 1;
  const { toggle, setToggle } = useToggle();
  const { playSound, pauseSound } = useSettings();
  // const { theme } = useTheme();
  const {
    theme,
    level,
    size,
    grid,
    // capture not used, removing from destructure
    success,
    controls,
    setRotate,
    animateColor,
  } = useEngine(forceLevel);

  const ref = useRef<View>(null);

  // Handle sound state
  useEffect(() => {
    playSound();
    return () => {
      pauseSound();
      // setDefaultStatusBar();
    };
  }, []);

  // Handle status bar
  useEffect(() => {
    StatusBar.setBarStyle(success ? "light-content" : "dark-content", true);
  }, [success]);

  const bgStyle: ViewStyle = {
    flex: 1,
    backgroundColor: animateColor("primary") as any,
  };

  return (
    <>
      <Animated.View ref={ref} style={bgStyle}>
        <View className="flex-1">
          <StatusBar animated />
          <View className="flex-1 items-center justify-center">
            <Animated.Text
              style={{ color: animateColor("accent") }}
              className="text-xl text-center absolute top-12"
            >
              #{level}
            </Animated.Text>

            {grid.map((column, y) => (
              <View key={y} className="flex-row">
                {column.map(({ id, type, animation }, x) => (
                  <Shapes
                    key={id}
                    id={id}
                    size={size}
                    type={type}
                    success={success}
                    animation={animation}
                    animateColor={animateColor}
                    setRotate={() => {
                      if (
                        ["null"].indexOf(type) === -1 &&
                        Number.isInteger(animation) // Changed _value to value
                      ) {
                        setRotate(x, y);
                      }
                    }}
                  />
                ))}
              </View>
            ))}
          </View>

          <Animated.View
            // onPress={controls.next}
            className={`absolute inset-0 ${success ? "visible" : "invisible"}`}
          >
            <View />
          </Animated.View>

          <View className="absolute inset-x-0 bottom-6">
            <Animated.Text
              style={{ color: animateColor("accent") }}
              className="text-xl font-semibold text-center"
            >
              React Native Loop
            </Animated.Text>
          </View>
        </View>

        <LevelSelectOverlay
          theme={theme}
          level={level}
          toggle={toggle}
          setToggle={setToggle}
          {...controls}
        />
      </Animated.View>

      <Animated.View
        style={{ backgroundColor: animateColor("primary") }}
        className="absolute inset-x-0 bottom-0 pb-5"
      >
        <Animated.View
          className="self-center p-3"
          // onPress={() => (success ? capture(ref) : setToggle(true))}
        >
          <MaterialIcons
            name={success ? "camera" : "menu"}
            size={32}
            style={{
              color: success
                ? (animateColor("accent") as any)
                : theme.light.accent.alpha(0.4),
            }}
          />
        </Animated.View>
      </Animated.View>
    </>
  );
}