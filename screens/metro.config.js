const { getDefaultConfig } = require('@expo/metro-config');

module.exports = (async () => {
  const {
    resolver: { assetExts }
  } = await getDefaultConfig();
  
  assetExts.push('gltf');
  assetExts.push('bin'); // If you also have .bin files

  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts
    }
  };
})();
