# masalche
# To Build
# build apk
eas build -p android --profile preview
# build dev
eas build --profile development --platform android
# npm ls react-native-reanimated to find duplicates
# To find Fix Your Code warnings and errors
yarn lint
yarn lint --fix
npx unimported