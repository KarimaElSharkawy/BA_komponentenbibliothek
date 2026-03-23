# BA Komponentenbibliothek

Diese Komponentenbibliothek wurde im Rahmen der Bachelorarbeit entwickelt. Sie enthält wiederverwendbare UI-Komponenten für Angular-Anwendungen und dokumentiert deren Einsatz anhand einzelner Komponenten sowie anhand von Showcases.

## Überblick

Die Komponenten befinden sich im Verzeichnis `src/app/component` und sind als standalone Angular-Komponenten umgesetzt.

Die Bibliothek umfasst unter anderem Komponenten für Formulare, Navigation, Typografie und strukturierte Inhaltsdarstellung. Ergänzend dazu zeigen Showcases, wie mehrere Komponenten in realistischen Anwendungsszenarien kombiniert werden können.

## Komponenten

### Abbreviation

Die `AbbreviationComponent` stellt Abkürzungen zusammen mit ihrer ausgeschriebenen Bedeutung dar. Sie eignet sich besonders für fachliche Begriffe, die im Textkontext zusätzlich erläutert werden sollen.

<img width="455" height="83" alt="Beispielansicht der AbbreviationComponent" src="https://github.com/user-attachments/assets/1e9219e5-1df4-44e2-a8a6-2eef669ea253" />

---

### Akkordeon

Die `AkkordeonComponent` gruppiert Inhalte in auf- und zuklappbare Abschnitte. Sie eignet sich insbesondere für FAQ-Bereiche oder umfangreichere Erklärungstexte.

<img width="1157" height="293" alt="Beispielansicht der AkkordeonComponent" src="https://github.com/user-attachments/assets/e727a64f-c0ab-419c-9466-91882b169d54" />

---

### Burger Menu

Die `BurgerMenuComponent` stellt eine platzsparende Navigation für kleinere Viewports bereit. Sie bündelt Navigationspunkte in einem mobilen Menü und unterstützt damit responsive Anwendungskonzepte.

<img width="299" height="295" alt="Beispielansicht der BurgerMenuComponent" src="https://github.com/user-attachments/assets/2a5f57d2-506b-4d15-b396-7347cd59940a" />

---

### Button

Die `ButtonComponent` bildet unterschiedliche Zustände und Varianten von Buttons ab. Dazu gehören Standard-Buttons, deaktivierte Buttons und reine Icon-Buttons. Sie wird vor allem für primäre Aktionen in Formularen und Navigationen eingesetzt.

#### Aktiv

Die aktive Variante zeigt den regulären Zustand eines klickbaren Buttons.

<img width="1168" height="103" alt="Aktive Variante der ButtonComponent" src="https://github.com/user-attachments/assets/4d5af6c3-c07a-47b7-ba7c-c0bd69f9d810" />

#### Deaktiviert

Die deaktivierte Variante kennzeichnet Aktionen, die aktuell nicht verfügbar sind.

<img width="1169" height="88" alt="Deaktivierte Variante der ButtonComponent" src="https://github.com/user-attachments/assets/8ef675d1-9175-4542-8080-2add73b1994c" />

#### Icon Only

Diese Variante verzichtet auf ein Textlabel und eignet sich beispielsweise für Zurück-, Menü- oder Symbolaktionen.

<img width="87" height="78" alt="Icon-Only-Variante der ButtonComponent" src="https://github.com/user-attachments/assets/f99ec34a-3372-4d81-a99c-ef399273e457" />

---

### Checkbox

Die `CheckboxComponent` wird für Zustimmungen, Einverständnisse und optionale Auswahlen verwendet. Sie unterstützt sowohl Pflichtfelder als auch freiwillige Angaben innerhalb von Formularen.

#### Pflichtfeld

Diese Variante zeigt eine verpflichtende Checkbox im regulären Zustand.

<img width="323" height="74" alt="Pflichtfeld-Variante der CheckboxComponent" src="https://github.com/user-attachments/assets/97b7feca-3729-46ba-83f3-c72767bc09fa" />

#### Pflichtfeld mit Fehler

Diese Variante zeigt die Checkbox mit Validierungsfehler bei fehlender Auswahl.

<img width="346" height="100" alt="CheckboxComponent mit Validierungsfehler" src="https://github.com/user-attachments/assets/2ddd4c30-0a57-4744-9893-723993d6e38a" />

#### Optional

Diese Variante zeigt eine Checkbox für freiwillige Angaben ohne Pflichtvalidierung.

<img width="492" height="73" alt="Optionale Variante der CheckboxComponent" src="https://github.com/user-attachments/assets/5d3882e3-9056-407d-b0df-9b51b77e3235" />

---

### Dropdown

Die `DropdownComponent` stellt auswählbare Optionen in kompakter Form bereit. Sie eignet sich für strukturierte Eingaben, bei denen Nutzerinnen und Nutzer aus vordefinierten Werten wählen.

#### Pflichtfeld

Diese Variante zeigt ein verpflichtendes Dropdown im regulären Zustand.

<img width="1167" height="140" alt="Pflichtfeld-Variante der DropdownComponent" src="https://github.com/user-attachments/assets/10c6aeaf-b00b-4200-b3c7-1a24a195051c" />

#### Pflichtfeld mit Fehler

Diese Variante zeigt das Dropdown mit Validierungsfehler bei fehlender Auswahl.

<img width="1167" height="133" alt="DropdownComponent mit Validierungsfehler" src="https://github.com/user-attachments/assets/cffc6ba3-6d01-4c8a-b1a5-80762f0f4a7f" />

#### Optional

Diese Variante zeigt ein Dropdown für zusätzliche, nicht verpflichtende Angaben.

<img width="1168" height="115" alt="Optionale Variante der DropdownComponent" src="https://github.com/user-attachments/assets/40948fa7-cdb7-4f25-854b-74189e4e1f98" />

---

### Email Input

Die `EmailInputComponent` ist ein spezialisiertes Eingabefeld für E-Mail-Adressen. Neben Pflichtfeldern unterstützt sie typische Formularvalidierungen für Kontaktangaben.

#### Pflichtfeld

Diese Variante zeigt das Pflichtfeld im regulären Eingabezustand.

<img width="1167" height="118" alt="Pflichtfeld-Variante der EmailInputComponent" src="https://github.com/user-attachments/assets/6d2561f9-43f0-4c9e-947b-1cf3d243efb7" />

#### Pflichtfeld mit Fehler

Diese Variante zeigt die Fehleransicht bei fehlender oder ungültiger Eingabe.

<img width="1165" height="128" alt="EmailInputComponent mit Validierungsfehler" src="https://github.com/user-attachments/assets/47a375b0-5acd-4a4f-af8a-63ba5b6d423d" />

#### Optional

Diese Variante zeigt das gleiche Eingabefeld ohne verpflichtende Kennzeichnung.

<img width="1165" height="122" alt="Optionale Variante der EmailInputComponent" src="https://github.com/user-attachments/assets/4d5d82ba-4b74-4dd6-9140-edf3964e03b5" />

---

### Heading

Die `HeadingComponent` dient zur konsistenten Ausgabe von Überschriften in unterschiedlichen Ebenen. Sie sorgt für ein einheitliches typografisches Erscheinungsbild innerhalb der Anwendung.

<img width="478" height="76" alt="Beispielansicht der HeadingComponent" src="https://github.com/user-attachments/assets/75e78ef3-30a1-4925-8931-44739737dfb7" />

---

### Lang

Die `LangComponent` ermöglicht den Wechsel zwischen verfügbaren Sprachvarianten. Sie eignet sich besonders für mehrsprachige Navigationen und Bedienoberflächen.

<img width="523" height="88" alt="Beispielansicht der LangComponent" src="https://github.com/user-attachments/assets/ae9d6878-f5fc-488a-8d64-3485bf3955c1" />

---

### Logo

Die `LogoComponent` bindet Logos in definierter Größe inklusive Alternativtext ein. Sie eignet sich für Header, Formulareinstiege oder institutionelle Kennzeichnungen.

<img width="335" height="112" alt="Beispielansicht der LogoComponent" src="https://github.com/user-attachments/assets/28a20e39-1ab6-48ee-a2f4-bd0bb4f36753" />

---

### Name Input

Die `NameInputComponent` ist für personenbezogene Texteingaben wie Vorname oder Nachname vorgesehen. Sie unterstützt Pflicht- und optionale Felder innerhalb größerer Formulare.

#### Pflichtfeld

Diese Variante zeigt die verpflichtende Ausführung im Standardzustand.

<img width="1168" height="117" alt="Pflichtfeld-Variante der NameInputComponent" src="https://github.com/user-attachments/assets/4a89f0db-8dfd-406e-8c20-4cfd1523fefb" />

#### Pflichtfeld mit Fehler

Diese Variante zeigt die Fehleransicht für ein nicht ausgefülltes Pflichtfeld.

<img width="1162" height="135" alt="NameInputComponent mit Validierungsfehler" src="https://github.com/user-attachments/assets/85ad9c50-39f2-4784-a42e-f88b60e73e8e" />

#### Optional

Diese Variante zeigt ein nicht verpflichtendes Namensfeld für ergänzende Angaben.

<img width="1167" height="126" alt="Optionale Variante der NameInputComponent" src="https://github.com/user-attachments/assets/f541d2b1-e404-4cb1-9bb5-618d35996c2e" />

---

### Nav Text

Die `NavTextComponent` stellt textbasierte Navigationslinks bereit. Sie wird insbesondere in Navigationsleisten, Fußnavigationen oder Menüeinträgen eingesetzt.

#### Aktiv

Diese Variante zeigt einen aktiven Navigationslink.

<img width="310" height="32" alt="Aktive Variante der NavTextComponent" src="https://github.com/user-attachments/assets/0e3e852d-3736-4745-b112-07aff62c268f" />

#### Hover

Diese Variante zeigt das Verhalten des Links bei Interaktion mit Maus oder Trackpad.

<img width="302" height="37" alt="Hover-Zustand der NavTextComponent" src="https://github.com/user-attachments/assets/2d05459e-9e19-4468-8a65-96fde5137fef" />

#### Standard

Diese Variante zeigt den ruhenden, nicht aktiven Zustand des Navigationslinks.

<img width="298" height="50" alt="Standardzustand der NavTextComponent" src="https://github.com/user-attachments/assets/2a298010-7f89-4215-9ffc-124bc40f0493" />

---

### Text Link

Die `TextLinkComponent` erweitert einfache Textlinks um zusätzliche Darstellungsoptionen, beispielsweise für die Inline-Verwendung oder mit ergänzenden Icons. Sie eignet sich für Hinweise auf externe Inhalte, Dokumente oder weiterführende Informationen.

#### Standard

Diese Variante zeigt einen einfachen Textlink ohne zusätzliche Symbole.

<img width="459" height="60" alt="Standardvariante der TextLinkComponent" src="https://github.com/user-attachments/assets/fe2194f6-a364-4da6-811c-d2f440d799ec" />

#### Mit PDF-Icon

Diese Variante eignet sich für Verweise auf Dokumente und macht den Dokumententyp unmittelbar sichtbar.

<img width="424" height="60" alt="TextLinkComponent mit PDF-Icon" src="https://github.com/user-attachments/assets/13c56bbe-35f0-4af4-b156-6c97e58a47d1" />

#### Mit Pfeil

Diese Variante eignet sich beispielsweise für externe Ziele oder Inhalte, die in einem neuen Tab geöffnet werden.

<img width="591" height="63" alt="TextLinkComponent mit Pfeil-Icon" src="https://github.com/user-attachments/assets/172766db-72a0-4e4e-8e64-6563eb2fc2c0" />

---

### Text Paragraph

Die `TextParagraphComponent` dient zur einheitlichen Ausgabe von Fließtextabsätzen. Sie unterstützt konsistente Abstände und eine einheitliche Typografie innerhalb der Anwendung.

<img width="356" height="72" alt="Beispielansicht der TextParagraphComponent" src="https://github.com/user-attachments/assets/4b83ca60-fe19-4089-ae27-22366cc8984a" />

---

### Textarea

Die `TextareaComponent` ist für längere Freitexte vorgesehen, etwa für Beschreibungen, Begründungen oder Vorfallschilderungen. Sie unterstützt Pflichtangaben sowie Längenvalidierung.

#### Pflichtfeld

Diese Variante zeigt das verpflichtende Mehrzeilenfeld im regulären Zustand.

<img width="1169" height="189" alt="Pflichtfeld-Variante der TextareaComponent" src="https://github.com/user-attachments/assets/76226571-217b-4df4-9003-110fd8210741" />

#### Pflichtfeld mit Fehler

Diese Variante zeigt die Fehleransicht bei nicht erfüllten Pflicht- oder Mindestlängenregeln.

<img width="1169" height="193" alt="TextareaComponent mit Validierungsfehler" src="https://github.com/user-attachments/assets/deba2f14-9a4c-45e5-b074-5e4ff327ba60" />

#### Optional

Diese Variante zeigt ein Freitextfeld ohne verpflichtende Kennzeichnung.

<img width="1166" height="194" alt="Optionale Variante der TextareaComponent" src="https://github.com/user-attachments/assets/b6fa2d9d-7edf-43f1-8e90-1e76d67e1d16" />

---

## Showcases

### Formular-Showcase

Das Formular-Showcase kombiniert mehrere Eingabe- und Strukturkomponenten zu einer vollständigen Formularansicht. Es demonstriert insbesondere Validierung, Strukturierung und das Zusammenspiel mehrerer Formularbausteine auf einer Seite.

**Verwendete Komponenten:**

- `LogoComponent`
- `ButtonComponent`
- `HeadingComponent`
- `DropdownComponent`
- `TextareaComponent`
- `CheckboxComponent`
- `NameInputComponent`
- `EmailInputComponent`
- `TextLinkComponent`

<img width="780" height="421" alt="Formular-Showcase" src="https://github.com/user-attachments/assets/3a6cf7dd-0c2a-422c-b647-431d45815838" />

---

### Navigations-Showcase

Das Navigations-Showcase bildet eine responsive Navigation mit Desktop- und Mobile-Variante ab.

**Verwendete Komponenten:**

- `BurgerMenuComponent`
- `LangComponent`
- `NavTextComponent`
- `ShowcaseComponent`

#### Desktop

Die Desktop-Ansicht zeigt horizontal angeordnete Navigationspunkte sowie eine Sprachumschaltung für größere Viewports.

<img width="1146" height="95" alt="Desktop-Ansicht des Navigations-Showcases" src="https://github.com/user-attachments/assets/ecd0ed20-df24-4a20-b61f-816c42444ff4" />

#### Mobile

Die mobile Ansicht zeigt die kompakte Navigation mit Burger-Menü und Sprachumschaltung für kleinere Bildschirme.

<img width="410" height="383" alt="Mobile Ansicht des Navigations-Showcases" src="https://github.com/user-attachments/assets/7e7e61a4-951e-481c-a111-acdcacaf6ce7" />

---

## Voraussetzungen

Für die lokale Ausführung werden folgende Werkzeuge benötigt:

- Node.js (empfohlen: aktuelle LTS-Version)
- npm

## Installation

### Zur Installation aller Abhängigkeiten den folgenden Befehl ausführen:

npm install

## Storybook

### Zum lokalen Starten von Storybook:

npm run storybook

Anschließend ist Storybook unter http://localhost:6007 erreichbar.

### Zum Erzeugen eines Storybook-Builds:

npm run build-storybook

## Build

### Zum Erzeugen eines Produktions-Builds:

npm run build











