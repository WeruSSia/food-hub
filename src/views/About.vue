<template>
	<div id="container">
		<vue-headful title="About the project" />
		<h2>Charakterystyka projektu</h2>
		<p>
			<strong>FoodHUB</strong> - aplikacja webowa wspomagająca wybór
			przepisu kulinarnego.
		</p>
		<p>
			Projekt został zrealizowany w formie aplikacji SPA przy użyciu
			frameworka Vue.js. Interfejs użytkownika jest przyjazny zarówno dla
			urządzeń stacjonanych jak i mobilnych.
		</p>
		<p>
			Aplikacja ma za zadanie wyszukać w swojej bazie odpowiedni przepis
			(<a href="https://spoonacular.com/food-api">spoonacular API</a>), na
			podstawie składników podanych przez użytkownika.
		</p>
		<p>
			Każdy przepis zawiera pełną listę składników potrzebnych do jego
			wykonania oraz instrukcję wykonania. Znajdują się także inne
			podstawowe informacje dotyczące wybranego dania.
		</p>
		<p>
			Zalogowanie do aplikacji umożliwia przeglądanie historii
			wyszukiwanych przepisów oraz dodawanie przepisów do ulubionych.
			Istnieje również możliwość korzystanie z aplikacji bez logowania,
			lecz z ograniczoną funkcjonalnością (wyłącznie wyszukiwanie
			przepisów).
		</p>
		<p>
			Do zapisywania profili użytkowników, ich danych oraz preferencji
			(ulubione przepisy), została wykorzystana baza danych oraz
			autentykacja przy pomocy <strong>Firebase</strong>.
		</p>
		<hr />
		<h2>Zasadnicze funkcjonalności aplikacji</h2>
		<p>Istnieją dwie możliwości wyszukania przepisów:</p>
		<ul>
			<li>po nazwie dania,</li>
			<li>
				lub z użyciem wprowadzonej listy składników oraz słów
				kluczowych.
			</li>
		</ul>
		<p>
			Pierwsza możliwość jest dostępna z poziomu górnego paska
			nawigacyjnego, zawierającego dostęp do głównych funkcjonalności
			aplikacji (<strong>Rys. 1</strong>). Wystarczy w polu tekstowym
			wpisać pożądaną frazę, a następnie nacisnąć ikonę lupy w celu
			wyszukania przepisów.
		</p>
		<img src="../assets/about_page/header_not_logged_in.png" width="97%" />
		<p class="img-label">
			<strong>Rys. 1</strong> - Górny pasek nawigacyjny
		</p>
		<p>
			Drugą możliwością jest wybór konkretnych składników i słów
			kluczowych. Po naciśnięciu *Ingredients* na pasku wyszukiwania,
			pojawi się druga część górnego paska nawigacyjnego - strefa
			wyszukiwania (<strong>Rys. 2</strong>). Użytkownik w polach
			tekstowych wpisuje pożądane oraz niepożądane w przepisie składniki,
			których dodanie zatwierdza przyciskiem "+" lub "-". Można również
			podać słowa kluczowe dla szukanego przepisu. Po wybraniu i
			zatwierdzeniu wszystkich kryteriów, należy wyszukać przepisy
			przyciskiem "Search".
		</p>
		<img src="../assets/about_page/search_area_filled.png" width="97%" />
		<p class="img-label">
			<strong>Rys. 2</strong> - Strefa wyszukiwania wypełniona składnikami
		</p>
		<p>
			Wyniki wyszukiwania zostaną wyświetlone użytkownikowi w postaci
			kafelków z ilustracją oraz tytułem przepisu (**Rys. 3**). W górnej
			części znajduje się informacja o liczbie wyszukanych przepisów oraz
			lista wprowadzonych wcześniej składników (jeśli wyszukiwanie
			odbywało się ścieżką z wyborem składników).
		</p>
		<img src="../assets/about_page/searching_results.png" width="97%" />
		<p class="img-label">
			<strong>Rys. 3</strong> - Widok wyników wyszukiwania
		</p>
		<p>
			Po kliknięciu w wybrany przepis użytkownik zostanie przeniesiony do
			jego szczegółów (<strong>Rys. 4</strong>). Widok ten jest podzielony
			na 4 sekcje:
		</p>
		<ul>
			<li>ogólne informacje o przepisie,</li>
			<li>lista składników,</li>
			<li>wskazówki wykonania,</li>
			<li>fakty żywieniowe.</li>
		</ul>
		<p>
			Podczas wykonywania przepisu jest możliwość odznaczania
			wykorzystanych już składników bądź wykonanych kroków.
		</p>
		<img src="../assets/about_page/recipe_details.png" width="70%" />
		<p class="img-label">
			<strong>Rys. 4</strong> - Widok szczegółów przepisu
		</p>
		<p>
			Do zalogowania służy przycisk *SIGN IN*, znajdujący się na pasku
			nawigacyjnym (<strong>Rys. 1</strong>). Po jego kliknięciu pojawi
			się okno modalne z formularzem logowania lub zakładania konta w
			aplikacji (<strong>Rys. 5</strong>). Możliwe jest logowanie przy
			użyciu konta na Facebook'u lub tradycyjnie, z użyciem adresu e-mail.
		</p>
		<img src="../assets/about_page/sign_in_modal.png" width="35%" />
		<p class="img-label"><strong>Rys. 5</strong> - Okno logowania</p>
		<p>
			Posiadanie konta w aplikacji niesie ze sobą korzyści w postaci
			możliwości dodawania przepisów do osobistej listy ulubionych oraz
			dostępu do historii ostatnio przeglądanych przepisów.
			Funkcjonalności te są dostępne po użyciu dwóch dodatkowych
			przycisków w górnym pasku nawigacyjnym, które pojawiają się po
			zalogowaniu (<strong>Rys. 6</strong>).
		</p>
		<img src="../assets/about_page/header_logged_in.png" width="97%" />
		<p class="img-label">
			<strong>Rys. 6</strong> - Górny pasek nawigacyjny dla zalogowanego
			użytkownika
		</p>
		<p>
			Aplikacja posiada również ekran startowy, gdzie wyświetlany jest
			zapęlony pokaz slajdów z punktowym opisem możliwości aplikacji oraz
			sekcja losowych przepisów, dostępnych bez konieczności
			jakiegokolwiek wyszukiwania (<strong>Rys. 7</strong>).
		</p>
		<img src="../assets/about_page/start_page.png" width="97%" />
		<p class="img-label"><strong>Rys. 7</strong> - Ekran startowy</p>
		<p>
			Dostęp do swojego konta użytkownik posiada poprzez wybranie ikony
			profilu z prawej strony paska nawigacyjnego (<strong>Rys. 6</strong
			>). Wyświetlane są tam jego dane podane przy procesie tworzenia
			konta, przyciski przenoszące do przydatnych miejsc w aplikacji oraz
			losowy kulinarny dowcip, na poprawę humoru (<strong>Rys. 8</strong
			>).
		</p>
		<img src="../assets/about_page/profile_page.png" width="97%" />
		<p class="img-label">
			<strong>Rys. 8</strong> - Ekran profilu użytkownika
		</p>
		<hr />
		<h3>Linki do składowych projektu</h3>
		<p>
			<a href="https://github.com/Riserax/food-hub"
				>Repozytorium na Github</a
			>
		</p>
		<p>
			<a href="https://github.com/Riserax/food-hub/projects/1"
				>System zarządzania projektem</a
			>
		</p>
		<p>
			<a href="https://riserax.github.io/food-hub"
				>Aplikacja na Github Pages</a
			>
		</p>
	</div>
</template>

<script>
export default {
	mounted() {
		window.scrollTo({
			top: this.$el.offsetTop,
			behavior: "smooth",
		});
	},
};
</script>
<style scoped>
#container {
	display: flex-inline;
	height: auto;
	padding-left: 5%;
	padding-right: 5%;
	padding-bottom: 30px;
}

h2,
h3,
p,
ul {
	text-align: justify;
}

hr {
	margin-top: 20px;
}

h2,
h3 {
	margin-bottom: 10px;
}

p {
	margin-top: 7px;
	margin-bottom: 7px;
}

ul {
	margin-top: 5px;
}

img {
	margin-top: 10px;
	border: 2px solid lightgray;
	border-radius: 14px;
}

a {
	color: #d9001b;
	text-decoration: none;
}

.img-label {
	margin-left: 1.6%;
	margin-bottom: 15px;
	margin-top: 0;
	font-size: 14px;
}
</style>