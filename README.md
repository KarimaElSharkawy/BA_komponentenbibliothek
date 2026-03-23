# <u>BA Komponentenbibliothek</u>

Angular-Komponentenbibliothek mit Storybook zur Dokumentation und Vorschau von UI-Komponenten.

## <u>Komponenten</u>

Die Komponenten befinden sich im Verzeichnis `src/app/component` und sind als standalone Angular-Komponenten umgesetzt. Die Bibliothek umfasst Formularfelder, Navigationsbausteine sowie Text- und Darstellungskomponenten.

### <u>Abbreviation</u>

Die `AbbreviationComponent` dient zur Darstellung von Abkürzungen und deren ausgeschriebener Bedeutung. Sie eignet sich für fachliche Begriffe, die im Text verständlich aufgelöst werden sollen.

Die folgende Abbildung zeigt eine Beispielansicht der Komponente.

---

<img width="455" height="83" alt="Bildschirmfoto 2026-03-23 um 01 01 47" src="https://github.com/user-attachments/assets/1e9219e5-1df4-44e2-a8a6-2eef669ea253" />

Der Screenshot zeigt eine kompakte Abkürzungsdarstellung im Textkontext.

### <u>Akkordeon</u>

Die `AkkordeonComponent` gruppiert längere Inhalte in auf- und zuklappbare Abschnitte. Sie ist besonders für FAQ-Bereiche oder umfangreiche Erklärungstexte geeignet.

Die folgende Abbildung zeigt eine Beispielansicht der Komponente.

---

<img width="1157" height="293" alt="Bildschirmfoto 2026-03-23 um 01 03 56" src="https://github.com/user-attachments/assets/e727a64f-c0ab-419c-9466-91882b169d54" />

Im Beispiel ist eine FAQ-ähnliche Struktur mit mehreren ausklappbaren Einträgen zu sehen.

### <u>Burger Menu</u>

Die `BurgerMenuComponent` stellt eine platzsparende Navigation für kleinere Viewports bereit. Sie bündelt Navigationspunkte in einem mobilen Menü.

Die folgende Abbildung zeigt eine Beispielansicht der Komponente.

---

<img width="299" height="295" alt="Bildschirmfoto 2026-03-23 um 01 04 05" src="https://github.com/user-attachments/assets/2a5f57d2-506b-4d15-b396-7347cd59940a" />

Der Screenshot zeigt die geöffnete mobile Menüansicht mit mehreren Navigationszielen.

### <u>Button</u>

Die `ButtonComponent` bildet unterschiedliche Button-Zustände ab, darunter Standard, deaktiviert und reine Icon-Buttons. Sie eignet sich für primäre Aktionen in Formularen und Navigationen.

#### <u>Aktiv</u>

Die folgende Abbildung zeigt die aktive Standardvariante des Buttons.

---

<img width="1168" height="103" alt="Bildschirmfoto 2026-03-23 um 01 06 40" src="https://github.com/user-attachments/assets/4d5af6c3-c07a-47b7-ba7c-c0bd69f9d810" />

Der Screenshot illustriert den normalen einsatzbereiten Zustand für klickbare Aktionen.

#### <u>Disabled</u>

Die folgende Abbildung zeigt die deaktivierte Variante des Buttons.

---

<img width="1169" height="88" alt="Bildschirmfoto 2026-03-23 um 01 06 46" src="https://github.com/user-attachments/assets/8ef675d1-9175-4542-8080-2add73b1994c" />

Hier ist zu sehen, wie eine aktuell nicht verfügbare Aktion visuell gekennzeichnet wird.

#### <u>Icon Only</u>

Die folgende Abbildung zeigt die Variante ohne Textlabel, die sich etwa für Zurück- oder Menüaktionen eignet.

---

<img width="87" height="78" alt="Bildschirmfoto 2026-03-23 um 01 06 52" src="https://github.com/user-attachments/assets/f99ec34a-3372-4d81-a99c-ef399273e457" />

Der Screenshot zeigt die kompakte Darstellung eines reinen Icon-Buttons.

### <u>Checkbox</u>

Die `CheckboxComponent` wird für Zustimmungen, Einverständnisse und optionale Auswahlen verwendet. Sie unterstützt Pflichtfelder ebenso wie optionale Eingaben.

#### <u>Required</u>

Die folgende Abbildung zeigt eine verpflichtende Checkbox im regulären Zustand.

---

<img width="323" height="74" alt="Bildschirmfoto 2026-03-23 um 01 07 28" src="https://github.com/user-attachments/assets/97b7feca-3729-46ba-83f3-c72767bc09fa" />

Der Screenshot verdeutlicht die Standardanzeige eines erforderlichen Auswahlfelds.

#### <u>Required Error</u>

Die folgende Abbildung zeigt die Checkbox mit Validierungsfehler bei fehlender Auswahl.

---

<img width="346" height="100" alt="Bildschirmfoto 2026-03-23 um 01 07 18" src="https://github.com/user-attachments/assets/2ddd4c30-0a57-4744-9893-723993d6e38a" />

Hier ist die Fehlermeldung für eine nicht erfüllte Pflichtbedingung zu sehen.

#### <u>Optional</u>

Die folgende Abbildung zeigt die optionale Variante ohne Pflichtvalidierung.

---

<img width="492" height="73" alt="Bildschirmfoto 2026-03-23 um 01 07 40" src="https://github.com/user-attachments/assets/5d3882e3-9056-407d-b0df-9b51b77e3235" />

Der Screenshot zeigt eine Checkbox für freiwillige Angaben.

### <u>Dropdown</u>

Die `DropdownComponent` stellt auswählbare Optionen in kompakter Form bereit. Sie ist für strukturierte Eingaben geeignet, bei denen Nutzerinnen und Nutzer aus vordefinierten Werten wählen.

#### <u>Required</u>

Die folgende Abbildung zeigt ein verpflichtendes Dropdown im normalen Zustand.

---

<img width="1167" height="140" alt="Bildschirmfoto 2026-03-23 um 01 08 11" src="https://github.com/user-attachments/assets/10c6aeaf-b00b-4200-b3c7-1a24a195051c" />

Der Screenshot illustriert die Standarddarstellung eines obligatorischen Auswahlfelds.

#### <u>Required Error</u>

Die folgende Abbildung zeigt das Dropdown mit Validierungsfehler bei fehlender Auswahl.

---

<img width="1167" height="133" alt="Bildschirmfoto 2026-03-23 um 01 08 02" src="https://github.com/user-attachments/assets/cffc6ba3-6d01-4c8a-b1a5-80762f0f4a7f" />

Hier wird die Rückmeldung angezeigt, wenn ein erforderlicher Wert nicht gesetzt wurde.

#### <u>Optional</u>

Die folgende Abbildung zeigt die optionale Variante des Dropdowns.

---

<img width="1168" height="115" alt="Bildschirmfoto 2026-03-23 um 01 08 30" src="https://github.com/user-attachments/assets/40948fa7-cdb7-4f25-854b-74189e4e1f98" />

Das Beispiel zeigt ein Dropdown für zusätzliche, nicht verpflichtende Angaben.

### <u>Email Input</u>

Die `EmailInputComponent` ist ein spezialisiertes Eingabefeld für E-Mail-Adressen. Neben Pflichtfeldern unterstützt sie typische Formularvalidierung für Kontaktangaben.

#### <u>Required</u>

Die folgende Abbildung zeigt das Pflichtfeld im regulären Eingabezustand.

---

<img width="1167" height="118" alt="Bildschirmfoto 2026-03-23 um 01 09 04" src="https://github.com/user-attachments/assets/6d2561f9-43f0-4c9e-947b-1cf3d243efb7" />

Der Screenshot veranschaulicht die Darstellung einer erforderlichen E-Mail-Eingabe.

#### <u>Required Error</u>

Die folgende Abbildung zeigt die Fehleransicht bei fehlender oder ungültiger Eingabe.

---

<img width="1165" height="128" alt="Bildschirmfoto 2026-03-23 um 01 08 44" src="https://github.com/user-attachments/assets/47a375b0-5acd-4a4f-af8a-63ba5b6d423d" />

Hier wird sichtbar, wie Benutzerinnen und Benutzer auf fehlerhafte Eingaben hingewiesen werden.

#### <u>Optional</u>

Die folgende Abbildung zeigt die optionale Variante des E-Mail-Felds.

---

<img width="1165" height="122" alt="Bildschirmfoto 2026-03-23 um 01 09 11" src="https://github.com/user-attachments/assets/4d5d82ba-4b74-4dd6-9140-edf3964e03b5" />

Der Screenshot zeigt das gleiche Feld ohne verpflichtende Markierung.

### <u>Heading</u>

Die `HeadingComponent` dient zur konsistenten Ausgabe von Überschriften in unterschiedlichen Ebenen. Sie sorgt für ein einheitliches typografisches Erscheinungsbild.

Die folgende Abbildung zeigt eine Beispielansicht der Komponente.

---

<img width="478" height="76" alt="Bildschirmfoto 2026-03-23 um 01 02 03" src="https://github.com/user-attachments/assets/75e78ef3-30a1-4925-8931-44739737dfb7" />

Das Beispiel zeigt eine prägnante Überschrift als strukturelles Leitelement.

### <u>Lang</u>

Die `LangComponent` ermöglicht den Wechsel zwischen verfügbaren Sprachvarianten. Sie ist besonders für mehrsprachige Navigationen und Bedienoberflächen gedacht.

Die folgende Abbildung zeigt eine Beispielansicht der Komponente.

---

<img width="523" height="88" alt="Bildschirmfoto 2026-03-23 um 01 02 13" src="https://github.com/user-attachments/assets/ae9d6878-f5fc-488a-8d64-3485bf3955c1" />

Der Screenshot zeigt die Umschaltung zwischen den angebotenen Sprachkürzeln.

### <u>Logo</u>

Die `LogoComponent` bindet Logos oder Markenkennzeichen in definierter Größe und mit Alternativtext ein. Sie eignet sich für Header, Formulareinstiege oder institutionelle Kennzeichnung.

Die folgende Abbildung zeigt eine Beispielansicht der Komponente.

---

<img width="335" height="112" alt="Bildschirmfoto 2026-03-23 um 01 12 01" src="https://github.com/user-attachments/assets/28a20e39-1ab6-48ee-a2f4-bd0bb4f36753" />

Das Beispiel zeigt die Einbindung des HTW-Logos als visuelles Erkennungselement.

### <u>Name Input</u>

Die `NameInputComponent` ist für personenbezogene Texteingaben wie Vorname oder Nachname vorgesehen. Sie unterstützt Pflicht- und optionale Felder innerhalb größerer Formulare.

#### <u>Required</u>

Die folgende Abbildung zeigt die verpflichtende Variante im Standardzustand.

---

<img width="1168" height="117" alt="Bildschirmfoto 2026-03-23 um 01 10 08" src="https://github.com/user-attachments/assets/4a89f0db-8dfd-406e-8c20-4cfd1523fefb" />

Der Screenshot zeigt das Feld ohne Fehlermeldung vor der Validierung.

#### <u>Required Error</u>

Die folgende Abbildung zeigt die Fehleransicht für ein nicht ausgefülltes Pflichtfeld.

---

<img width="1162" height="135" alt="Bildschirmfoto 2026-03-23 um 01 10 44" src="https://github.com/user-attachments/assets/85ad9c50-39f2-4784-a42e-f88b60e73e8e" />

Hier ist die Validierungsdarstellung mit Fehlermeldung zu sehen.

#### <u>Optional</u>

Die folgende Abbildung zeigt ein nicht verpflichtendes Namensfeld.

---

<img width="1167" height="126" alt="Bildschirmfoto 2026-03-23 um 01 10 54" src="https://github.com/user-attachments/assets/f541d2b1-e404-4cb1-9bb5-618d35996c2e" />

Das Beispiel zeigt eine Variante für ergänzende Angaben.

### <u>Nav Text</u>

Die `NavTextComponent` stellt textbasierte Navigationslinks bereit. Sie wird vor allem in Leisten, Fußnavigationen oder Menüeinträgen eingesetzt.

#### <u>Aktiv</u>

Die folgende Abbildung zeigt einen aktiven Navigationslink.

---

<img width="310" height="32" alt="Bildschirmfoto 2026-03-23 um 01 02 53" src="https://github.com/user-attachments/assets/0e3e852d-3736-4745-b112-07aff62c268f" />

Der Screenshot zeigt die visuelle Hervorhebung des aktuell gewählten Zustands.

#### <u>Hover</u>

Die folgende Abbildung zeigt das Verhalten des Links bei Interaktion mit Maus oder Trackpad.

---

<img width="302" height="37" alt="Bildschirmfoto 2026-03-23 um 01 03 01" src="https://github.com/user-attachments/assets/2d05459e-9e19-4468-8a65-96fde5137fef" />

Hier ist die Zustandsänderung beim Darüberfahren dargestellt.

#### <u>Default</u>

Die folgende Abbildung zeigt den ruhenden, nicht aktiven Zustand des Navigationslinks.

---

<img width="298" height="50" alt="Bildschirmfoto 2026-03-23 um 01 03 09" src="https://github.com/user-attachments/assets/2a298010-7f89-4215-9ffc-124bc40f0493" />

Der Screenshot zeigt die normale Darstellung außerhalb eines aktiven Fokus- oder Hover-Zustands.

### <u>Text Link</u>

Die `TextLinkComponent` erweitert einfache Textlinks um zusätzliche Darstellungsoptionen wie Inline-Verwendung oder Suffix-Icons. Sie eignet sich für Hinweise auf externe Inhalte, Dokumente oder weiterführende Informationen.

#### <u>Default</u>

Die folgende Abbildung zeigt einen einfachen Textlink ohne zusätzliche Symbole.

---

<img width="459" height="60" alt="Bildschirmfoto 2026-03-23 um 01 03 20" src="https://github.com/user-attachments/assets/fe2194f6-a364-4da6-811c-d2f440d799ec" />

Das Beispiel veranschaulicht die reduzierte Linkdarstellung im Fließtext.

#### <u>Mit PDF-Icon</u>

Die folgende Abbildung zeigt die Variante mit PDF-Icon für Dokumentverweise.

---

<img width="424" height="60" alt="Bildschirmfoto 2026-03-23 um 01 03 27" src="https://github.com/user-attachments/assets/13c56bbe-35f0-4af4-b156-6c97e58a47d1" />

Hier wird deutlich, wie zusätzliche Kontextinformationen direkt an der Verlinkung sichtbar gemacht werden.

#### <u>Mit Pfeil</u>

Die folgende Abbildung zeigt die Variante für externe Ziele oder das Öffnen in einem neuen Tab.

---

<img width="591" height="63" alt="Bildschirmfoto 2026-03-23 um 01 03 34" src="https://github.com/user-attachments/assets/172766db-72a0-4e4e-8e64-6563eb2fc2c0" />

Der Screenshot zeigt die erweiterte Linkdarstellung mit zusätzlichem Symbol.

### <u>Text Paragraph</u>

Die `TextParagraphComponent` dient zur einheitlichen Ausgabe von Fließtextabsätzen. Sie unterstützt konsistente Abstände und Typografie innerhalb der Anwendung.

Die folgende Abbildung zeigt eine Beispielansicht der Komponente.

---

<img width="356" height="72" alt="Bildschirmfoto 2026-03-23 um 01 03 42" src="https://github.com/user-attachments/assets/4b83ca60-fe19-4089-ae27-22366cc8984a" />

Das Beispiel zeigt einen typischen Absatz für erläuternde oder beschreibende Inhalte.

### <u>Textarea</u>

Die `TextareaComponent` ist für längere Freitexte gedacht, etwa Beschreibungen, Begründungen oder Vorfallschilderungen. Sie unterstützt Pflichtangaben sowie Längenvalidierung.

#### <u>Required</u>

Die folgende Abbildung zeigt das verpflichtende Mehrzeilenfeld im regulären Zustand.

---

<img width="1169" height="189" alt="Bildschirmfoto 2026-03-23 um 01 11 02" src="https://github.com/user-attachments/assets/76226571-217b-4df4-9003-110fd8210741" />

Der Screenshot verdeutlicht die Standarddarstellung einer längeren Texteingabe.

#### <u>Required Error</u>

Die folgende Abbildung zeigt die Fehleransicht bei nicht erfüllten Pflicht- oder Mindestlängenregeln.

---

<img width="1169" height="193" alt="Bildschirmfoto 2026-03-23 um 01 11 34" src="https://github.com/user-attachments/assets/deba2f14-9a4c-45e5-b074-5e4ff327ba60" />

Hier ist die Validierungsrückmeldung für unvollständige Eingaben zu sehen.

#### <u>Optional</u>

Die folgende Abbildung zeigt ein Freitextfeld ohne verpflichtende Kennzeichnung.

---

<img width="1166" height="194" alt="Bildschirmfoto 2026-03-23 um 01 11 40" src="https://github.com/user-attachments/assets/b6fa2d9d-7edf-43f1-8e90-1e76d67e1d16" />

Der Screenshot zeigt eine Variante für ergänzende Hinweise oder freiwillige Angaben.

## <u>Showcases</u>

### <u>Formular Showcase</u>

Das Formular-Showcase kombiniert mehrere Eingabe- und Strukturkomponenten zu einer vollständigen Formularansicht.

Verwendete Komponenten:

- `LogoComponent`
- `ButtonComponent`
- `HeadingComponent`
- `DropdownComponent`
- `TextareaComponent`
- `CheckboxComponent`
- `NameInputComponent`
- `EmailInputComponent`
- `TextLinkComponent`

Die folgende Abbildung zeigt das Zusammenspiel der Komponenten in einer vollständigen Formularansicht.

---

<img width="780" height="421" alt="Bildschirmfoto 2026-03-23 um 01 12 20" src="https://github.com/user-attachments/assets/3a6cf7dd-0c2a-422c-b647-431d45815838" />

Das Showcase demonstriert insbesondere Validierung, Strukturierung und die Kombination mehrerer Formularbausteine auf einer Seite.

### <u>Navigations Showcase</u>

Das Navigations-Showcase bildet eine responsive Navigation mit Desktop- und Mobile-Variante ab.

Verwendete Komponenten:

- `BurgerMenuComponent`
- `LangComponent`
- `NavTextComponent`
- `ShowcaseComponent`

#### <u>Desktop</u>

Die folgende Abbildung zeigt die Desktop-Ansicht mit horizontal angeordneten Navigationspunkten und Sprachumschaltung.

---

<img width="1146" height="95" alt="Bildschirmfoto 2026-03-23 um 13 30 05" src="https://github.com/user-attachments/assets/ecd0ed20-df24-4a20-b61f-816c42444ff4" />

Der Screenshot zeigt die klassische horizontale Navigationsleiste für größere Viewports.

#### <u>Mobile</u>

Die folgende Abbildung zeigt die mobile Ansicht mit Burger-Menü und Sprachumschaltung.

---

<img width="410" height="383" alt="Bildschirmfoto 2026-03-23 um 13 30 36" src="https://github.com/user-attachments/assets/7e7e61a4-951e-481c-a111-acdcacaf6ce7" />

Der Screenshot zeigt die kompakte Navigation für kleinere Bildschirme mit geöffnetem Menü.

## <u>Voraussetzungen</u>

- Node.js (empfohlen: aktuelle LTS-Version)
- npm

## <u>Installation</u>

```bash
npm install
```

## <u>Lokale Entwicklung</u>

App lokal starten:

```bash
npm start
```

Danach ist die App unter `http://localhost:4200` erreichbar.

## <u>Storybook</u>

Storybook lokal starten:

```bash
npm run storybook
```

Danach ist Storybook unter `http://localhost:6007` erreichbar.

Storybook-Build erzeugen:

```bash
npm run build-storybook
```

## <u>Build</u>

Produktions-Build:

```bash
npm run build
```

Die Ausgabe liegt im Ordner `dist/`.
