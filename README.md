# uo-blackmage

UOSA dynamic instrumentation toolset based on https://www.frida.re/

This tool will spawn a new Ultima Online Enhanced Client and add various functionality to it.


# Installation

1. Clone this repository anywhere: `git clone https://github.com/nufasou/uofrida.git`
2. Install nodejs from https://nodejs.org/en/download/
3. Install dependencies by running `npm install` (this will also build uo-blackmage)
4. Start UOSA with uo-blackmage attached: `npm run uo`

After making changes in the ```src/``` directory it is needed to run `npm run build`. 
During development `npm run watch` can be used to detect changes automatically and
rebuild uo-blackmage as needed.

Development is mostly done on vscode as it provides pretty good support for typescript and node.

# Available Extensions

* New function available in the LUA UI: [lua functions](docs/lua-functions.md)
* Prints all functions registered available for use by the LUA UI
* Prints all loaded lua libraries

## LogUOPNames

Logs all filenames loaded from UOP archives into uop-names.txt (can be further processed for use in MythicPackageEditor)

## LuaNewState

Required for `AddLuaFunctions`. Keeps track of the lua state within the client and exposes it to our own functions. 

# Extra

1. There is a compiled LuaPlus dll in lib/. It's supposed to be very close to the LuaPlus version in UOSA. Feel free to compile it by yourself from sources but for sake of ease I just included my archived version.

Just got tired of messing with this in C++/C# (RIP UOBlackmage) and python (RIP uo-frida) so as of 2020 its nodejs only.