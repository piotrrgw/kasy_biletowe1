# kasy_biletowe1

# Weryfikator Dostępności Kas Biletowych (Ticket Counter Status Checker)

Aplikacja webowa umożliwiająca pasażerom weryfikację statusu operacyjnego kas biletowych na stacjach kolejowych w czasie rzeczywistym. System analizuje bieżącą godzinę oraz zdefiniowane harmonogramy, aby jednoznacznie określić, czy punkt sprzedaży jest w danym momencie otwarty.

## 🚀 Kluczowe Funkcjonalności

* **Weryfikacja w czasie rzeczywistym:** Sprawdzanie dostępności kasy dokładnie w momencie wysłania zapytania przez użytkownika.
* **Obsługa harmonogramów złożonych:** Algorytm uwzględnia standardowe godziny otwarcia oraz przerwy pracownicze/techniczne.
* **Kalendarz świąt:** Implementacja logiki obsługującej dni świąteczne i wolne od pracy, w których godziny otwarcia mogą ulec zmianie lub punkt może być nieczynny.

## 💾 Zarządzanie Danymi

Architektura danych oparta jest na lekkim rozwiązaniu "No-Backend":

* **Źródło danych:** Informacje o stacjach i godzinach pracy przechowywane są w ustrukturyzowanym pliku **JSON**.
* **Aktualizacja:** Baza danych jest zarządzana manualnie, co pozwala na łatwą edycję parametrów bez konieczności angażowania systemów bazodanowych (SQL).

## 🤖 AI-Assisted Development

Projekt został zrealizowany w modelu **AI-Assisted**, przy wsparciu generatywnej sztucznej inteligencji **Google Gemini**. Narzędzie to zostało wykorzystane do:

* Opracowania logiki walidacji dat i godzin (w tym obsługi wyjątków kalendarzowych).
* Optymalizacji struktury pliku JSON dla szybszego parsowania danych.
* Przyspieszenia procesu pisania kodu (Boilerplate code).

## 🛠️ Technologie

* HTML5 / CSS3
* JavaScript (ES6+)
* JSON (Data Storage)
