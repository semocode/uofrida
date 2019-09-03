# uo-frida

UOSA dynamic instrumentation toolset based on https://www.frida.re/

I'm tired of messing with this in C++/C# so I ported it to frida (Python/Javascript) :)

# Installation

1. Install Python from https://www.python.org/
1. Install frida toolkit through python package manager `pip` with `pip install frida`
1. Clone this repository (just into the UOSA folder will work): `git clone <this-repo-url>`
1. Start uofrida from the command line: `python uofrida\uofrida.py`

# Configuration

All extensions under `js/extensions` have a `disabled` flag to quickly configure which extensions to load. Extensions come with an maturity rating. Disable experimental extensions if there are problems with them (like client crashing with access violation).

# Lua

There is a compiled LuaPlus dll in lib/. It's supposed to be very close to the LuaPlus version in UOSA. Feel free to compile it by yourself from sources but for sake of ease I just included my archived version.

# Extensions

## AddLuaFunctions

Adds new functionality to the EC: 

Funtions for mouse control: `MoveMouseAbs(x,y)`, `MouseLClick()`, `MouseRClick()`
Move the mouse to where you need to click. Coordinates are screen coordinates like in win32 `mouse_event`

Funtions for keyboard control: `DICtrlShift`, `DIKey1`, `DIKey2`, `DIKey3`, `DIKey4`
Simulates a certain keypress event. `DICtrlShift` to pop object handles ;)

Load lua libraries: `load_io_lib`, `load_os_lib`, `load_package_lib`
Loads standard lua libraries which are present in the client but are purposely not loaded. See https://www.lua.org/manual/5.1/manual.html#5 for more details.

## PrintUOLuaFunctions

Prints all functions registered for calling from LUA

## PrintUOLuaLibraries

Prints all loaded lua libraries

## LogUOPNames

Logs all filenames loaded from UOP archives into uop-names.txt (can be further processed for use in MythicPackageEditor)

## LuaNewState

Required for `AddLuaFunctions`. Keeps track of the lua state within the client and exposes it to our own functions. 