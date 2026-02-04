import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-freitext',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="container py-4" *ngIf="variant === 'impressum'" aria-label="Seite Impressum">
      <article aria-labelledby="impressum-title" aria-label="Inhalt Impressum">
        <h1 id="impressum-title" class="h3 mb-4">Impressum</h1>

        <section class="mb-4" aria-labelledby="institution-title">
          <h2 id="institution-title" class="h5 mb-2 text-decoration-underline">Institution</h2>
          <p class="mb-0">Hochschule für Technik und Wirtschaft Berlin</p>
          <p class="mb-0">— vertreten durch die Präsidentin Prof. Dr. Annabella Rauscher-Scheibe —</p>
        </section>

        <section class="mb-4" aria-labelledby="address-title">
          <h2 id="address-title" class="h5 mb-2 text-decoration-underline">Postanschrift</h2>
          <address class="mb-0">HTW Berlin, 10313 Berlin (Postfach)</address>
          <p class="mb-0">
            <a
              href="https://www.htw-berlin.de/campus/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-success-emphasis text-decoration-underline"
              aria-label="Standorte der HTW Berlin, öffnet in neuem Tab"
            >
              Standorte
            </a>
          </p>
        </section>

        <section aria-labelledby="mail-title">
          <h2 id="mail-title" class="h5 mb-2 text-decoration-underline">E-Mail</h2>

          <ul class="mb-0 ps-3">
            <li class="mb-2">
              Studium &amp; Bewerbung:
              <a
                href="https://antidis.f4.htw-berlin.de/imprint#:~:text=E%2DMail%20an%20das%20Studierenden%2DService%2DCenter"
                target="_blank"
                rel="noopener noreferrer"
                class="link-dark text-decoration-underline"
                aria-label="E-Mail an das Studierenden-Service-Center, öffnet in neuem Tab"
              >
                E-Mail an das Studierenden-Service-Center
              </a>
            </li>

            <li class="mb-2">
              Öffentlichkeitsarbeit:
              <a
                href="https://antidis.f4.htw-berlin.de/imprint#:~:text=E%2DMail%20an%20das%20Team%20Kommunikation"
                target="_blank"
                rel="noopener noreferrer"
                class="link-dark text-decoration-underline"
                aria-label="E-Mail an das Team Kommunikation, öffnet in neuem Tab"
              >
                E-Mail an das Team Kommunikation
              </a>
            </li>

            <li class="mb-0">
              IT:
              <a
                href="https://antidis.f4.htw-berlin.de/imprint#:~:text=E%2DMail%20an%20den%20Webmaster"
                target="_blank"
                rel="noopener noreferrer"
                class="link-dark text-decoration-underline"
                aria-label="E-Mail an den Webmaster, öffnet in neuem Tab"
              >
                E-Mail an den Webmaster
              </a>
            </li>
          </ul>
        </section>
      </article>
    </main>

    <main
      class="container py-4"
      *ngIf="variant === 'datenschutz'"
      aria-label="Seite Datenschutzhinweise"
    >
      <article aria-labelledby="datenschutz-title" aria-label="Inhalt Datenschutzhinweise">
        <h1 id="datenschutz-title" class="h3 mb-4">Datenschutzhinweise</h1>

        <p class="mb-4">
          Vielen Dank für Ihr Interesse an unserer Hochschule. Der Schutz Ihrer Daten ist uns ein
          wichtiges Anliegen. Deshalb verarbeiten wir die Daten, die Sie beim Besuch auf unseren
          Webseiten hinterlassen, nur nach den Vorgaben der relevanten datenschutzrechtlichen
          Bestimmungen, insbesondere der Datenschutzgrundverordnung und des Bundesdatenschutzgesetzes.
          An dieser Stelle möchten wir Sie über Art, Umfang und Zweck der Verarbeitung Ihrer
          personenbezogenen Daten informieren.
        </p>

        <section class="mb-4" aria-labelledby="verantwortliche-title">
          <h2 id="verantwortliche-title" class="h5 mb-2 text-decoration-underline">
            Verantwortliche*r
          </h2>
          <p class="mb-0">
            Die Website www.htw-berlin.de einschließlich aller Unterseiten ist ein Angebot der
            Hochschule für Technik und Wirtschaft Berlin, vertreten durch den
            <a
              href="https://www.htw-berlin.de/einrichtungen/hochschulleitung/praesidentin/"
              target="_blank"
              rel="noopener noreferrer"
              class="link-dark text-decoration-underline"
              aria-label="Präsidentin der HTW Berlin, öffnet in neuem Tab"
            >
              Präsidenten
            </a>
            (praesident@htw-berlin.de), Treskowallee 8, 10318 Berlin (
            <a
              href="https://antidis.f4.htw-berlin.de/imprint"
              target="_blank"
              rel="noopener noreferrer"
              class="link-dark text-decoration-underline"
              aria-label="Impressum der HTW Berlin, öffnet in neuem Tab"
            >
              Impressum
            </a>
            ) soweit diese nicht von anderen Rechtskörperschaften (z.B. Studierendenwerk Berlin)
            betrieben werden. Die Hochschule ist Verantwortliche im Sinne des Art. 5 II DSGVO.
          </p>
        </section>

        <section aria-labelledby="dsb-title">
          <h2 id="dsb-title" class="h5 mb-2 text-decoration-underline">
            Behördliche*r Datenschutzbeauftragte*r
          </h2>

          <p class="mb-2">
            <a
              href="https://www.htw-berlin.de/einrichtungen/vertretungen-beauftragte/datenschutzbeauftragter/"
              target="_blank"
              rel="noopener noreferrer"
              class="link-dark text-decoration-underline"
              aria-label="Datenschutzbeauftragte der HTW Berlin, öffnet in neuem Tab"
            >
              Datenschutzbeauftragte*r der HTW Berlin
            </a>
          </p>

          <p class="mb-0">Telefon: 5019-2950</p>
          <p class="mb-3">
            Email:
            <a
              href="mailto:datenschutz@htw-berlin.de"
              class="link-dark text-decoration-underline"
              aria-label="E-Mail an den Datenschutzbeauftragten schreiben"
            >
              datenschutz@htw-berlin.de
            </a>
          </p>

          <p class="mb-0">
            Sie können sich jederzeit bei allen Fragen und Anregungen zum Datenschutz direkt an
            unseren Datenschutzbeauftragten wenden.
          </p>
        </section>
      </article>
    </main>
  `,
})
export class FreitextComponent {
  @Input() variant: 'impressum' | 'datenschutz' = 'impressum';
}
