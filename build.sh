./clean.sh
echo "Installing node_modules"
npm i
if [[ $1 == 'android' ]]; then
    cd android && ./gradlew clean && cd ..
    react-native run-android --verbose
fi

if [[ $1 == 'ios' ]]; then
    echo "Installing cocoapods"
    cd ios
    pod install
    cd ..
    react-native run-ios --verbose
fi
