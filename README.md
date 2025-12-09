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
    * Wbudowana funkcja wyszukiwania i filtrowania stacji.
    * Lokalne buforowanie danych (`localStorage`) i wsparcie dla trybu offline.
    * Załączony Google Analytics (`gtag.js`).
2.  **`editor.html`** (Edytor):
    * Panel administracyjny do zarządzania rekordami (CRUD).
    * Wizualizacja dostępności w formie osi czasu.
    * Funkcje masowej edycji i walidacji formatu danych.
3.  **`kasy.json`** (Baza Danych):
    * Centralny plik JSON zawierający szczegółowe godziny otwarcia i przerwy dla poszczególnych przewoźników i stacji (wraz z numerami EPA).

### 👤 Autorzy i Kontrybutorzy

* **Piotr M 🚂** – Koncepcja, Dane wejściowe, Wizja, Edytor danych.
* **Gemini (AI)** – Implementacja kodu, logika aplikacji, optymalizacje.
* **Edytorzy Danych:** Piotr M. 🚂, Anna S., Piotr S.

---

**Ważna informacja:** Aplikacja jest narzędziem poglądowym. Informacje o godzinach otwarcia kas należy zawsze weryfikować na stronach poszczególnych przewoźników.

### 🔗 LINKI

Strona produkcyjna: https://piotrrgw.github.io/kasy_biletowe1/index.html

Strona administratora: https://piotrrgw.github.io/kasy_biletowe1/editor.html