Hej Brygado,

Postarałem się wprowadzić tailwind css przy pomocy node.js oraz wprowadziłem lokalne zmienne css, które można używać w nazwach klas tailwind'u. 

Jak narazie wprowadziłem tą paletę kolorów z figmy, i ich deklaracje znajdują się w global.css, lecz jeśli będziecie je dodawać/usuwać lub zmieniać nazwy, to musicie także dodać lub usunąć deklarację w tailwind.config.js.

Jak będziecie pracować z tailwindem, to upewnijcie się że najpierw w terminalu odpalicie komendę "pnpm run dev". Dzięki niej klasy dodane w html'u związane z klasami tailwind'u, które wcześniej nie były używane będą dodawane automatycznie do global.css i wszystko będzie działać.