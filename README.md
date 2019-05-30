# WallabyJS bug [#2090](https://github.com/wallabyjs/public/issues/2090)

This project is a POC to demonstrate the bug in [wallabyjs#2090](https://github.com/wallabyjs/public/issues/2090)

This bug does not present itself if the codebase, and the wallabyjs folder are on the same drive.

**However**, if you move the codebase to a drive with a different drive-letter (at least in Windows), the code will bug out

```
[Error] Runtime error: Error: ENOENT: no such file or directory, stat 'D:\dev\wallabyjs--2090\.\src\spec\__mocks__\react.js' 
[Error]     at Object.statSync (fs.js:872:3) 
[Error]     at Object.statSync (D:\dev\wallabyjs--2090\node_modules\graceful-fs\polyfills.js:295:24) 
[Error]     at getScriptCacheKey (D:\dev\wallabyjs--2090\node_modules\@jest\transform\build\ScriptTransformer.js:693:39) 
[Error]     at ScriptTransformer.transform (D:\dev\wallabyjs--2090\node_modules\@jest\transform\build\ScriptTransformer.js:504:24) 
[Error]     at Runtime._execModule (D:\dev\wallabyjs--2090\node_modules\jest-runtime\build\index.js:842:53) 
[Error]     at Runtime._loadModule (D:\dev\wallabyjs--2090\node_modules\jest-runtime\build\index.js:577:12) 
[Error]     at Runtime.requireModule (D:\dev\wallabyjs--2090\node_modules\jest-runtime\build\index.js:433:10) 
[Error]     at Runtime.requireModuleOrMock (D:\dev\wallabyjs--2090\node_modules\jest-runtime\build\index.js:598:21) 
[Error]     at Object.<anonymous> (D:\dev\wallabyjs--2090\node_modules\enzyme-adapter-react-16\src\ReactSixteenAdapter.js:2:1) 
[Error]     at Runtime._execModule (D:\dev\wallabyjs--2090\node_modules\jest-runtime\build\index.js:888:13) 
[Error]     at Runtime._loadModule (D:\dev\wallabyjs--2090\node_modules\jest-runtime\build\index.js:577:12) 
[Error]     at Runtime.requireModule (D:\dev\wallabyjs--2090\node_modules\jest-runtime\build\index.js:433:10) 
[Error]     at Runtime.requireModuleOrMock (D:\dev\wallabyjs--2090\node_modules\jest-runtime\build\index.js:598:21) 
[Error]     at Object.require (D:\dev\wallabyjs--2090\node_modules\enzyme-adapter-react-16\src\index.js:2:18) 
[Error]     at Runtime._execModule (D:\dev\wallabyjs--2090\node_modules\jest-runtime\build\index.js:888:13) 
[Error]     at Runtime._loadModule (D:\dev\wallabyjs--2090\node_modules\jest-runtime\build\index.js:577:12) 
[Error]     at Runtime.requireModule (D:\dev\wallabyjs--2090\node_modules\jest-runtime\build\index.js:433:10) 
[Error]     at Runtime.requireModuleOrMock (D:\dev\wallabyjs--2090\node_modules\jest-runtime\build\index.js:598:21) 
[Error]     at Object.<anonymous> (.\src\spec\test-setup.js:4:64) 
[Error]     at Runtime._execModule (D:\dev\wallabyjs--2090\node_modules\jest-runtime\build\index.js:888:13) 
[Error]     at Runtime._loadModule (D:\dev\wallabyjs--2090\node_modules\jest-runtime\build\index.js:577:12) 
[Error]     at Runtime.requireModule (D:\dev\wallabyjs--2090\node_modules\jest-runtime\build\index.js:433:10) 
[Error]     at config.setupFilesAfterEnv.forEach.path (D:\dev\wallabyjs--2090\node_modules\jest-jasmine2\build\index.js:186:55) 
[Error]     at Array.forEach (<anonymous>) 
[Error]     at D:\dev\wallabyjs--2090\node_modules\jest-jasmine2\build\index.js:186:31 
[Error]     at Generator.next (<anonymous>) 
[Error]     at asyncGeneratorStep (D:\dev\wallabyjs--2090\node_modules\jest-jasmine2\build\index.js:27:24) 
[Error]     at _next (D:\dev\wallabyjs--2090\node_modules\jest-jasmine2\build\index.js:47:9) 
[Error]     at D:\dev\wallabyjs--2090\node_modules\jest-jasmine2\build\index.js:52:7 
[Error]     at new Promise (<anonymous>) 
[Error]     at D:\dev\wallabyjs--2090\node_modules\jest-jasmine2\build\index.js:44:12 
[Error]     at _jasmine (D:\dev\wallabyjs--2090\node_modules\jest-jasmine2\build\index.js:206:19) 
[Error]     at jasmine2 (D:\dev\wallabyjs--2090\node_modules\jest-jasmine2\build\index.js:60:19) 
[Error]     at D:\dev\wallabyjs--2090\node_modules\jest-runner\build\runTest.js:385:24 
[Error]     at Generator.next (<anonymous>) 
[Error]     at asyncGeneratorStep (D:\dev\wallabyjs--2090\node_modules\jest-runner\build\runTest.js:161:24) 
[Error]     at _next (D:\dev\wallabyjs--2090\node_modules\jest-runner\build\runTest.js:181:9) 
[Error]     at processTicksAndRejections (internal/process/next_tick.js:81:5) 
```