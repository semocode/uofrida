# uo-frida

UOSA dynamic instrumentation toolset based on https://www.frida.re/

I'm tired of messing with this in C++/C# so I ported it to frida (Python/Javascript) :)

# Installation

1. Install Python 3.6 from https://www.python.org/
1. Install frida toolkit through python package manager `pip` with `pip install frida`
1. Clone this repository (just into the UOSA folder will work): `git clone <this-repo-url>`
1. Open `config/config.py` and change the paths to UOSA folder and uofrida folder (dont forget double backslashes)
1. Start uofrida from the command line: `python uofrida.py`

# Configuration

All extensions under `js/extensions` have a `disabled` flag to quickly configure which extensions to load. Extensions come with an maturity rating. Disable experimental extensions if there are problems with them (like client crashing with access violation).

# Lua

There is a compiled LuaPlus dll in lib/. It's supposed to be very close to the LuaPlus version in UOSA. Feel free to compile it by yourself from sources but for sake of ease I just included my archived version.

# Extensions

## AddUOKeyboardFunctions

Adds new functions for calling from lua: 

Mouse Control: `MoveMouseAbs(x,y)`, `MouseLClick()`, `MouseRClick()`
Move the mouse to where you need to click. Coordinates are screen coordinates like in win32 `mouse_event`

Keyboard: `DICtrlShift`, `DIKey1`, `DIKey2`, `DIKey3`, `DIKey4`
Simulates a certain keypress event. `DICtrlShift` to pop object handles in client ;)

Load lua libraries: `load_io_lib`, `load_os_lib`, `load_package_lib`
Loads standard lua libraries which normally dont get loaded. See https://www.lua.org/manual/5.1/manual.html#5 for more details.

## LuaNewState

Required for `AddUOKeyboardFunctions`. Keeps track of the lua state within the client and exposes it to our own functions. 