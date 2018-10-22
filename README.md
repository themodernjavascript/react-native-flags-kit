
# react-native-flags-kit

## Getting started

`$ npm install react-native-flags-kit --save`

### Mostly automatic installation

`$ react-native link react-native-flags-kit`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-flags-kit` and add `RNFlagsKit.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNFlagsKit.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNFlagsKitPackage;` to the imports at the top of the file
  - Add `new RNFlagsKitPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-flags-kit'
  	project(':react-native-flags-kit').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-flags-kit/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-flags-kit')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNFlagsKit.sln` in `node_modules/react-native-flags-kit/windows/RNFlagsKit.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Flags.Kit.RNFlagsKit;` to the usings at the top of the file
  - Add `new RNFlagsKitPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNFlagsKit from 'react-native-flags-kit';

// TODO: What to do with the module?
RNFlagsKit;
```
  