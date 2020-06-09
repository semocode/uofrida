## AddLuaFunctions

Adds new functionality to the EC: 

Funtions for mouse control: `MoveMouseAbs(x,y)`, `MouseLClick()`, `MouseRClick()`
Move the mouse to where you need to click. Coordinates are screen coordinates like in win32 `mouse_event`

Funtions for keyboard control: `DICtrlShift`, `DIKey1`, `DIKey2`, `DIKey3`, `DIKey4`
Simulates a certain keypress event. `DICtrlShift` to pop object handles ;)

Load lua libraries: `load_io_lib`, `load_os_lib`, `load_package_lib`
Loads standard lua libraries which are present in the client but are purposely not loaded. See https://www.lua.org/manual/5.1/manual.html#5 for more details.