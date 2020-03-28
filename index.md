**1. Temat projektu**

FoodHUB - aplikacja webowa wspomagająca wybór przepisu kulinarnego na podstawie dostępnych składników

**2. Dane składu zespołu projektowego**

- Weronika Mirek, WZISS2-1211, 215916
- Konrad Adamik, WZISS2-1211, 215941
- Arkadiusz Hadała, WZISS22411IS, 192980

**3. Dane kierownika projektu**
- Kamil Cała, WZISS2-1211, 192426

**4. Opis aplikacji, główne cele, zasadnicza funkcjonalność**

Projekt realizowany będzie w formie aplikacji SPA przy użyciu frameworka Vue.js.

Aplikacja ma za zadanie wyszukać w swojej bazie odpowiedni przepis (“spoonacular API”), na podstawie składników podanych przez użytkownika. Użytkownik wyszukuje posiadane przez siebie składniki pojedynczo z listy rozwijanej (jest możliwość rozpoczęcia pisania nazwy składnika, w celu szybszego wyszukania), po czym zatwierdza przyciskiem “Dodaj kolejny”. Użytkownik może wybrać, ile dodatkowych składników (czyli takich, których nie posiada) może uwzględnić aplikacja. Po wybraniu i zatwierdzeniu wszystkich kryteriów, należy wyszukać odpowiedni dla siebie przepis z listy wyszukanych przez system. Każdy przepis będzie zawierał pełną listę składników potrzebnych do jego wykonania oraz sposób wykonania. Po kliknięciu na poszczególne składniki wyświetli się lista makroskładników, które zawiera. Dla każdego przepisu wykorzystane zostanie API, które policzy kaloryczność posiłku (“Food Calorie Data Search API”), jak i zostanie podana ogólna liczba tworzących go makroskładników.

Zalogowanie do aplikacji umożliwia przeglądanie historii wyszukiwanych przepisów oraz dodawanie przepisów do ulubionych.

Do zapisywania profili użytkowników, ich danych oraz preferencji (ulubione przepisy), zostanie wykorzystana baza danych oraz autentykacja Firebase. Będzie również możliwe korzystanie bez logowania, lecz z ograniczoną funkcjonalnością (wyłącznie wyszukiwanie przepisów).

-------------------

*Link do repozytoriunm na Github: https://github.com/Riserax/food-hub*
