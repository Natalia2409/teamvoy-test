After you downloaded this app, you need to write npm i in terminal and then write npm start.
First of all, you see a title of this app "Pokedex", it`s a component which is in the directory Header.
Than, you see a list of cards (only 12) and a button "Load More". I made a card, which contains image, name and types, and when I get a list of pokemons from API with limit (12), I put this data to cards. Clicking on this button, you can load more data, every time count of cards will increase by 12. One click will show 24 cards, two - 36, etc. If you click on any of this card, on the right part of screen will show a big card with more detail information about this pokemon. By default this big card is hidden.
For this app I use Redux to save loading data from API.
