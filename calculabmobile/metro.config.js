const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);
  
  config.resolver.assetExts.push('png');
  config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== 'svg');
  config.resolver.sourceExts.push('svg');
  
  return {
    ...config,
    transformer: {
      ...config.transformer,
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      assetPlugins: ['expo-asset/tools/hashAssetFiles']
    },
    resolver: {
      ...config.resolver,
    }
  };
})();