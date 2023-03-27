ECHO off

SET /P name=Quantes vegades vols que esrigui el teu nom

goto loop

:loop
echo Oscar
SET /A name=%name%-1

if(%name%) GTR (0) goto loop
pause
exit