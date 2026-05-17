module.exports = function (api) {
    api.cache(true);
    return {
      presets: [
        ["babel-preset-expo", { jsxImportSource: "nativewind" }], // 👈 THIS IS THE FIX
      ],
      plugins: [
        "react-native-reanimated/plugin", // Keep this for Reanimated
      ],
    };
  };