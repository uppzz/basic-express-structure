npm i express dotenv express-handlebars  
npm i --save-dev nodeman  
---------------------------------------------------
# INFO
-> folgendes wird bei mir alles in singular bzw plural gespeichert 

Singular:
+ function names
+ variables
+ urls
+ website part directories   (like routes/shop   or   views/shop)
+ filenames
+ object keys


Plural:
+ arrays
+ arrays of objects
+ main directories
+ .json files

--------------------------------------------------
# STARTE HIER

1. open terminal:
2. npm init
3. npm i 
   HINWEIS: package.json ("start": script)
4. erstelle eine .env datei und schreibe folgendes rein:
   PORT = 5000
5. erstelle eine .gitignore und schreibe folgendes rein:
   node_modules 
   .env
   package-lock.json
6. starte den Server mit npm start

-----------------------------

auf github.com 
1. erstelle ein neues repository und gebe ihm einen namen 

Git code von github.com pullen:
1. git init
2. git add .
3. git commit -m "first pull"
4. git remote add origin https://github.com/Programmierhilfe/backend.git
5. git pull origin main      
6. git fetch                  -> zeigt die existierenden branches an.
7. git switch <branchname>           


Git Code nach github.com pushen, wenn im github repo nichts drin ist.
1. git init
2. git add .
3. git commit -m "message"
4. git remote add origin <repository link>
5. git push -u origin master

neuen lokalen branch erstellen und die files auf github.com im gleichnamigen branch speichern speichern:
1. git checkout -b <new branch name>
2. (1malig) git push -u origin <new branch name>
2.1 (für spätere pushes) git push oder git pull


branches miteinander verbinden (sollte ein unterbranch in github.com schon vorhanden sein): (Die branches können auch verschieden heissen.)
git fetch 
git branch --set-upstream-to=origin/<github online branch name> <lokaler branch name>

switch branch:
git switch <branch name>
