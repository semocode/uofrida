
ECHO OFF
IF NOT EXIST node_modules (
    ECHO Installing dependencies through npm..
    call npm install
)
call npm run build
call npm run uo
pause