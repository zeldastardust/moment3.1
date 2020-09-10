#Moment 2
##Automatiseringsprocessens syfte
Syftet att automatisera handlar om att göra arbetet med filer och projekt snabbare
och lättare. Att med funktioner lösa uppgifter istället för att återkommande göra dem själv. Man kan med tex gulp slå samman flera filers innehåll, komprimera innehåll i filer, konvertera innehåll i filer och kopiera filer etc.

##Verktyg och Paket
- browser-synk För att få livereload av webbläsarfönstret
- css nano För minifiering av css filer
- gulp-concat För sammanslagning av js filer.
- gulp-imagemin För komprimering av bildfiler
- gulp-postcss Verktyg för att använda css med js plugins
- gulp-sourcemaps För att lagra i sourcefiler
- gulp terser För minifiering av js filer

##Mitt system
Först i systemet görs require för gulp och de olika paketen. Sedan definieras filsökvägar.
Sedan finns en task för att kopiera HTML filer.
En task för att slå samman och minifiera js filer samt spara en sourcemap av dem. En liknande finns för css filer och där finns även automatisering av prefix. För bildfiler finns en task som minifierar dem. I alla tasks finns en .pipe för att browsersync ska göra en autoload av webbläsarfönstret. Det finns en watcher som där browser sync först initierar servern och sen övervakas alla filsökvägar för att sedan parallelt köra tasks vid ändringar.



