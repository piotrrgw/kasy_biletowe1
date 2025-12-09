# 🚆 Asystent Kas Biletowych

Aplikacja webowa wspierająca Drużynę Konduktorską w szybkim sprawdzaniu godzin otwarcia kas biletowych na stacjach kolejowych w Polsce.

Projekt wykorzystuje logikę front-endową (JavaScript) do dynamicznego obliczania statusu (Czynna/Przerwa/Nieczynna) w czasie rzeczywistym, uwzględniając dni tygodnia i święta ruchome.

---

### 🚀 Dostęp do Aplikacji

| Moduł | Link | Opis |
| :--- | :--- | :--- |
| **Główny Asystent** | **index.html** | Interfejs dla Drużyny Konduktorskiej (podgląd statusu kas). |
| **Panel Edytora** | **editor.html** | Interfejs dla administratorów/edytorów danych. Służy do modyfikacji i walidacji godzin pracy kas. |

### 🛠️ Struktura i Technologie

Projekt składa się z trzech głównych elementów:

1.  **`index.html`** (Asystent):
    * Główny widok publiczny.
    * **Automatyczne ładowanie i scalanie wielu segmentów JSON w celu stworzenia pełnej bazy danych.**
    * Wbudowana funkcja wyszukiwania i filtrowania stacji.
    * Lokalne buforowanie danych (`localStorage`) i wsparcie dla trybu offline.
    * Załączony Google Analytics (`gtag.js`).
2.  **`editor.html`** (Edytor):
    * **Panel administracyjny w profesjonalnym layoucie.**
    * **Automatyczne ładowanie wszystkich segmentów JSON przy starcie.**
    * Rozszerzone zarządzanie rekordami (dodano pola **Województwo** i wymuszenie wyboru z listy dla **Przewoźnika**).
    * **Podgląd Stacji** – wyświetla wszystkie rekordy dla aktualnie edytowanej stacji (np. Poznań Główny).
    * Persystencja niezapisanych zmian w sesji (`sessionStorage`).
    * Wizualizacja dostępności w formie osi czasu.
    * Funkcje masowej edycji i walidacji formatu danych.
3.  **Pliki `data_*.json`** (Baza Danych - Segmenty):
    * **Baza danych została podzielona na segmenty (pliki JSON), oddzielne dla każdego przewoźnika i dla stacji bez kas (np. `data_pkp_intercity.json`, `data_brak_kasy.json`).**
    * Każdy plik zawiera szczegółowe godziny otwarcia i przerwy (wraz z numerami EPA).

### 👤 Autorzy i Kontrybutorzy

* **Piotr M 🚂** – Koncepcja, Dane wejściowe, Wizja, Edytor danych.
* **Gemini (AI)** – Implementacja kodu, logika aplikacji, optymalizacje.
* **Edytorzy Danych:** Piotr M. 🚂, Anna S., Piotr S.

---

**Ważna informacja:** Aplikacja jest narzędziem poglądowym. Informacje o godzinach otwarcia kas należy zawsze weryfikować na stronach poszczególnych przewoźników.

### 🔗 LINKI

Strona produkcyjna: https://piotrrgw.github.io/kasy_biletowe1/index.html

Strona administratora: https://piotrrgw.github.io/kasy_biletowe1/editor.html