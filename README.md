# uo-blackmage

This tool spawns a new Ultima Online Enhanced Client and add various new features to it.

It is based on nodejs and frida.re (https://www.frida.re/) and written in Typescript.

## Installation

1. Download or clone this repository
2. Install nodejs from https://nodejs.org/en/download/
3. Double click on the provided blackmage.bat

Running the bat file will install all dependeciens if they are not found and then start Ultima Online with 
uo-blackmage attached. You can also start UO by running `npm run uo` yourself.

## Making modifications / Development

After making changes in the ```src/``` directory it is needed to run `npm run build`. 
During development `npm run watch` can be used to detect changes automatically and
rebuild uo-blackmage as needed.

Development is mostly done on vscode as it provides pretty good support for typescript and node.

## Available Extensions

* New function available in the LUA UI: [lua functions](docs/lua-functions.md)
* Prints all functions registered available for use by the LUA UI
* Prints all loaded lua libraries
* LogUOPNames: Logs all filenames loaded from UOP archives into uop-names.txt (can be further processed for use in MythicPackageEditor)
* Required for `AddLuaFunctions`. Keeps track of the lua state within the client and exposes it to our own functions. 
* ... more undocumented

# Extra

1. There is a compiled LuaPlus dll in lib/. It's supposed to be very close to the LuaPlus version in UOSA. Feel free to compile it by yourself from sources but for sake of ease I just included my archived version.

Just got tired of messing with this in C++/C# (RIP UOBlackmage) and python (RIP uo-frida) so as of 2020 its nodejs only.