echo off

set dir=%programfiles(x86)%\Android\android-sdk\tools\emulator.exe

if not exist "%dir%" goto killBat

"%dir%" -list-avds
pause

"%dir%" -avd pixel_2_oreo_8_0_-_api_26

:killBat
exit