# 🚆 Asystent Kas Biletowych

**Kompleksowe narzędzie webowe do weryfikacji dostępności kas biletowych na dworcach kolejowych w czasie rzeczywistym.**

Projekt działa w architekturze **"No-Backend"**, co oznacza, że cała logika przetwarzana jest po stronie przeglądarki klienta, a bazą danych jest lekki plik JSON. Rozwiązanie to zapewnia szybkość, prywatność oraz możliwość działania offline.

---

## 🚀 Kluczowe Funkcjonalności

### 🔍 Dla Konduktora (`index.html`)
* **Status w czasie rzeczywistym:** Natychmiastowa informacja, czy kasa jest **OTWARTA**, **ZAMKNIĘTA** lub czy trwa **PRZERWA**.
* **Zaawansowany Kalendarz:** Algorytm uwzględnia:
    * Dni robocze, soboty, niedziele.
    * **Święta stałe** (np. Bożego Narodzenia, Nowy Rok).
    * **Święta ruchome** (Wielkanoc, Boże Ciało) wyliczane automatycznie do 2050 roku.
* **Szczegółowe dane:** Wyświetla numer okienka (EPA), przewoźnika oraz dokładne godziny otwarcia i przerw.
* **Integracja z przewoźnikami:** Bezpośrednie linki do oficjalnych wyszukiwarek kas (PKP IC, Polregio, Koleje Mazowieckie itp.).
* **Tryb Offline / Cache:** Dane są zapisywane w `LocalStorage`, co pozwala na sprawdzenie statusu nawet przy chwilowym braku internetu.

### 🛠️ Dla Administratora (`editor.html`)
* **Graficzny Interfejs Edycji:** Przyjazny panel do zarządzania bazą danych `kasy.json` bez konieczności edycji kodu.
* **Obsługa Błędów (CORS):** Możliwość ręcznego wczytania pliku bazy danych (działa lokalnie bez serwera).
* **Walidacja Danych:** Formularze ułatwiające wprowadzanie godzin w poprawnym formacie.
* **Wsparcie dla Zespołu:** Predefiniowana lista edytorów (Piotr M., Piotr S., Anna S.) oraz lista przewoźników.
* **Eksport:** Generowanie gotowego do wdrożenia pliku JSON jednym kliknięciem.

---

## 📂 Struktura Projektu

```text
kasy_biletowe1/
│
├── index.html      # Aplikacja dla pasażera (Frontend)
├── editor.html     # Panel administracyjny (Backend-less CMS)
├── kasy.json       # Główna baza danych (JSON)
└── README.md       # Dokumentacja projektu
````

-----

### ⚙️ Technologie

Projekt został zrealizowany przy użyciu natywnych technologii webowych, co gwarantuje kompatybilność z każdą nowoczesną przeglądarką (mobilną i desktopową):

  * **HTML5** (Semantyczna struktura)
  * **CSS3** (Responsywność, Flexbox/Grid, Zmienne CSS)
  * **JavaScript (ES6+)** (Logika biznesowa, parsowanie JSON, obsługa plików)
  * **JSON** (Przechowywanie danych)

-----

### 📖 Instrukcja Obsługi

### Uruchomienie Aplikacji

Jako że projekt jest statyczną stroną WWW, nie wymaga instalacji Node.js, PHP ani baz danych SQL.

1.  Pobierz repozytorium.
2.  Otwórz plik `index.html` w dowolnej przeglądarce internetowej.

### Zarządzanie Danymi (Edycja)

Aby zaktualizować godziny otwarcia lub dodać nową stację:

1.  Uruchom plik `editor.html`.
2.  **Jeśli działasz lokalnie:** Użyj przycisku "Wybierz plik", aby załadować `kasy.json` z dysku.
3.  **Jeśli działasz na serwerze:** Plik załaduje się automatycznie.
4.  Wybierz stację z listy lub dodaj nową.
5.  Wprowadź zmiany i kliknij "Zapisz zmiany (w pamięci)".
6.  Po zakończeniu prac kliknij **"POBIERZ PLIK kasy.json"**.
7.  Podmień pobrany plik w głównym katalogu projektu i wyślij zmiany do repozytorium.

-----

## 👥 Autorzy i Kontrybucja

Projekt rozwijany w modelu **AI-Assisted Development**.

  * **Piotr M. 🚂** – Koncepcja, Dane, Zarządzanie Projektem.
  * **Gemini (Google)** – Implementacja kodu, Logika JS, Design.
  * **Zespół Edytorski:** Piotr M., Piotr S., Anna S.

-----

## 📄 Licencja

Projekt udostępniony do użytku wewnętrznego oraz publicznego jako narzędzie informacyjne. Dane mają charakter poglądowy.

-----
## 🔗 LINKI

Strona produkcyjna: https://piotrrgw.github.io/kasy_biletowe1/index.html

Strona administratora: https://piotrrgw.github.io/kasy_biletowe1/editor.html
