# uo-frida

UOSA dynamic instrumentation toolset based on https://www.frida.re/

# Installation

1. Install Python 3.6 from https://www.python.org/
1. Install frida toolkit through python package manager `pip` with `pip install frida`
1. Clone this repository (just into the UOSA folder will work)
1. Open `config/config.py` and change the paths to UOSA folder and uofrida folder (dont forget double backslashes)
1. Start uofrida from the command line: `python uofrida.py`

# Configuration

All extensions under `js/extensions` has a disabled flag to easiely configure which extensions to use. Extensions also come with a maturity rating.