import type { Metadata } from 'next';
import styles from './polityka-prywatnosci.module.scss';
import { GDPR_EMAIL, BASE_URL, SITE_NAME } from '../../lib/constants';

export const metadata: Metadata = {
  title: 'Polityka Prywatności',
  description:
    'Polityka prywatności i ochrony danych osobowych serwisu Tu Jest House. Dowiedz się, jak przetwarzamy i chronimy Twoje dane osobowe.',
  openGraph: {
    title: `Polityka Prywatności | ${SITE_NAME}`,
    description: 'Polityka prywatności i ochrony danych osobowych serwisu Tu Jest House',
    url: `${BASE_URL}/polityka-prywatnosci`,
    type: 'website',
  },
  alternates: {
    canonical: `${BASE_URL}/polityka-prywatnosci`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PolitykaPrywatnosciPage() {
  return (
    <main className={styles.legal}>
      <div className="container">
        <h1>Polityka Prywatności</h1>

        <section>
          <h2>§ 1. Postanowienia ogólne</h2>
          <ol>
            <li>
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych
              Użytkowników serwisu tujesthouse.pl (dalej: &ldquo;Serwis&rdquo;).
            </li>
            <li>
              Administratorem danych osobowych jest:
              <br />
              <strong>Tomasz Bursztyński Software Development</strong>
              <br />
              Polna 10/14 m.23
              <br />
              00-625 Warszawa
              <br />
              NIP: 7011072260
              <br />
              Email: {GDPR_EMAIL}
              <br />
              (dalej: &ldquo;Administrator&rdquo;)
            </li>
            <li>
              Ochrona danych osobowych odbywa się zgodnie z Rozporządzeniem Parlamentu Europejskiego
              i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w
              związku z przetwarzaniem danych osobowych (RODO) oraz przepisami prawa polskiego.
            </li>
            <li>
              Administrator zapewnia ochronę danych osobowych oraz prawa Użytkowników wynikające z
              RODO.
            </li>
          </ol>
        </section>

        <section>
          <h2>§ 2. Zakres przetwarzanych danych</h2>
          <p>
            <strong>
              W ramach Formularza zgłoszeniowego dla artystów Administrator przetwarza następujące
              dane:
            </strong>
          </p>
          <ul>
            <li>Imię i nazwisko</li>
            <li>Adres e-mail</li>
            <li>Numer telefonu</li>
            <li>Pseudonim artystyczny</li>
            <li>Preferowane miasta</li>
            <li>Link do profilu SoundCloud/Mixcloud</li>
            <li>Opis doświadczenia i stylu muzycznego</li>
          </ul>

          <p>
            <strong>
              W ramach Formularza rejestracji na warsztaty Administrator przetwarza następujące
              dane:
            </strong>
          </p>
          <ul>
            <li>Imię i nazwisko</li>
            <li>Adres e-mail</li>
            <li>Numer telefonu</li>
            <li>Preferowane miasto</li>
            <li>Rola w branży</li>
            <li>Opis doświadczenia i motywacji</li>
          </ul>

          <p>
            <strong>Dane techniczne zbierane automatycznie:</strong>
          </p>
          <ul>
            <li>Adres IP</li>
            <li>Typ przeglądarki</li>
            <li>System operacyjny</li>
            <li>Czas wizyty na stronie</li>
            <li>Źródło wejścia na stronę</li>
          </ul>
        </section>

        <section>
          <h2>§ 3. Cele przetwarzania danych</h2>
          <ol>
            <li>
              <strong>Dane z formularza artystów:</strong>
              <ul>
                <li>Umożliwienie udziału w open call projektu &ldquo;Tu Jest House&rdquo;</li>
                <li>Kontakt w sprawie wyboru do występu</li>
                <li>Organizacja wydarzeń w ramach projektu</li>
                <li>Dokumentacja realizacji projektu</li>
              </ul>
            </li>
            <li>
              <strong>Dane z Formularza warsztatów:</strong>
              <ul>
                <li>Rejestracja na warsztaty edukacyjne</li>
                <li>Kontakt w sprawie potwierdzenia uczestnictwa</li>
                <li>Przekazywanie informacji o szczegółach wydarzenia</li>
                <li>Organizacja i dokumentacja warsztatów</li>
              </ul>
            </li>
            <li>
              <strong>Dane techniczne:</strong>
              <ul>
                <li>Zapewnienie prawidłowego funkcjonowania Serwisu</li>
                <li>Analiza ruchu na stronie i optymalizacja UX</li>
                <li>Zapewnienie bezpieczeństwa Serwisu</li>
              </ul>
            </li>
          </ol>
        </section>

        <section>
          <h2>§ 4. Podstawa prawna przetwarzania danych</h2>
          <ol>
            <li>
              Zgoda osoby, której dane dotyczą (art. 6 ust. 1 lit. a RODO) – w przypadku wypełnienia
              formularzy kontaktowych.
            </li>
            <li>
              Niezbędność przetwarzania danych do wykonania umowy (art. 6 ust. 1 lit. b RODO) – w
              przypadku realizacji zgłoszenia na wydarzenie.
            </li>
            <li>
              Prawnie uzasadniony interes Administratora (art. 6 ust. 1 lit. f RODO) – w przypadku
              danych technicznych służących bezpieczeństwu i optymalizacji Serwisu.
            </li>
          </ol>
        </section>

        <section>
          <h2>§ 5. Okres przechowywania danych</h2>
          <ol>
            <li>
              Dane osobowe zbierane poprzez formularze będą przechowywane przez okres niezbędny do
              realizacji projektu &ldquo;Tu Jest House&rdquo;.
            </li>
            <li>
              Maksymalny okres przechowywania danych: do 31 grudnia 2027 roku lub do czasu wycofania
              zgody przez Użytkownika.
            </li>
            <li>
              Dane techniczne są przechowywane przez okres niezbędny do realizacji celów, dla
              których zostały zebrane, nie dłużej niż przez 12 miesięcy.
            </li>
            <li>
              Po upływie okresu przechowywania dane zostaną trwale usunięte lub zanonimizowane.
            </li>
          </ol>
        </section>

        <section>
          <h2>§ 6. Udostępnianie danych osobowych</h2>
          <ol>
            <li>
              Dane osobowe mogą być przekazywane następującym podmiotom:
              <ul>
                <li>
                  <strong>Formspree Inc.</strong> – dostawca usługi obsługi formularzy kontaktowych
                  (USA, podlega klauzulom umownym zatwierdzonym przez Komisję Europejską)
                </li>
                <li>
                  <strong>GitHub Inc.</strong> – dostawca hostingu statycznego serwisu (USA, podlega
                  klauzulom umownym zatwierdzonym przez Komisję Europejską)
                </li>
                <li>
                  <strong>Podmioty realizujące projekt</strong> – partnerzy merytoryczni, kluby, w
                  których odbywają się wydarzenia
                </li>
              </ul>
            </li>
            <li>Administrator nie sprzedaje danych osobowych podmiotom trzecim.</li>
            <li>
              Dane osobowe mogą być udostępnione organom państwowym lub innym podmiotom uprawnionym
              na podstawie przepisów prawa.
            </li>
          </ol>
        </section>

        <section>
          <h2>§ 7. Transfer danych poza Europejski Obszar Gospodarczy (EOG)</h2>
          <ol>
            <li>
              Dane osobowe mogą być przekazywane do krajów poza EOG (Stany Zjednoczone) w związku z
              korzystaniem z usług Formspree Inc. oraz GitHub Inc.
            </li>
            <li>
              Transfer danych odbywa się na podstawie:
              <ul>
                <li>Standardowych klauzul umownych zatwierdzonych przez Komisję Europejską</li>
                <li>Odpowiednich zabezpieczeń technicznych i organizacyjnych zgodnie z RODO</li>
              </ul>
            </li>
            <li>
              Więcej informacji na temat zabezpieczeń transferu danych:
              <ul>
                <li>
                  Formspree:{' '}
                  <a
                    href="https://formspree.io/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://formspree.io/legal/privacy-policy
                  </a>
                </li>
                <li>
                  GitHub:{' '}
                  <a
                    href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://docs.github.com/privacy
                  </a>
                </li>
              </ul>
            </li>
          </ol>
        </section>

        <section>
          <h2>§ 8. Prawa Użytkowników</h2>
          <p>Każda osoba, której dane są przetwarzane przez Administratora, ma prawo do:</p>
          <ol>
            <li>
              <strong>Dostępu do swoich danych</strong> – prawo do uzyskania informacji, jakie dane
              są przetwarzane oraz otrzymania ich kopii.
            </li>
            <li>
              <strong>Sprostowania danych</strong> – prawo do poprawienia nieprawidłowych lub
              uzupełnienia niekompletnych danych.
            </li>
            <li>
              <strong>Usunięcia danych</strong> (&ldquo;prawo do bycia zapomnianym&rdquo;) – w
              przypadku, gdy:
              <ul>
                <li>dane nie są już niezbędne do celów, dla których zostały zebrane;</li>
                <li>osoba wycofała zgodę, a nie ma innej podstawy prawnej przetwarzania;</li>
                <li>dane są przetwarzane niezgodnie z prawem.</li>
              </ul>
            </li>
            <li>
              <strong>Ograniczenia przetwarzania</strong> – prawo do żądania ograniczenia
              przetwarzania danych w określonych sytuacjach.
            </li>
            <li>
              <strong>Przenoszenia danych</strong> – prawo do otrzymania danych w ustrukturyzowanym,
              powszechnie używanym formacie.
            </li>
            <li>
              <strong>Sprzeciwu</strong> – prawo do wniesienia sprzeciwu wobec przetwarzania danych,
              gdy podstawą jest prawnie uzasadniony interes Administratora.
            </li>
            <li>
              <strong>Cofnięcia zgody</strong> – prawo do wycofania zgody w dowolnym momencie bez
              wpływu na zgodność z prawem przetwarzania, które miało miejsce przed jej wycofaniem.
            </li>
            <li>
              <strong>Wniesienia skargi</strong> – prawo do wniesienia skargi do Prezesa Urzędu
              Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).
            </li>
          </ol>
        </section>

        <section>
          <h2>§ 9. Sposób wykonania praw</h2>
          <ol>
            <li>
              W celu realizacji swoich praw Użytkownik może skontaktować się z Administratorem:
              <ul>
                <li>
                  Email: <a href={`mailto:${GDPR_EMAIL}`}>{GDPR_EMAIL}</a>
                </li>
                <li>
                  Adres korespondencyjny:
                  <br />
                  Tomasz Bursztyński Software Development
                  <br />
                  Polna 10/14 m.23
                  <br />
                  00-625 Warszawa
                </li>
              </ul>
            </li>
            <li>
              Administrator odpowiada na żądania związane z realizacją praw Użytkownika w ciągu 30
              dni od otrzymania wniosku.
            </li>
            <li>
              W przypadku wątpliwości co do tożsamości osoby składającej wniosek Administrator może
              poprosić o dodatkowe informacje umożliwiające weryfikację tożsamości.
            </li>
          </ol>
        </section>

        <section>
          <h2>§ 10. Pliki cookies</h2>
          <ol>
            <li>
              Serwis nie wykorzystuje plików cookies do śledzenia użytkowników ani do celów
              marketingowych.
            </li>
            <li>
              Serwis może wykorzystywać podstawowe pliki cookies techniczne niezbędne do
              prawidłowego funkcjonowania strony (np. preferencje językowe, sesje).
            </li>
            <li>
              Użytkownik może w dowolnym momencie zmienić ustawienia dotyczące plików cookies w
              swojej przeglądarce internetowej.
            </li>
          </ol>
        </section>

        <section>
          <h2>§ 11. Bezpieczeństwo danych</h2>
          <ol>
            <li>
              Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające
              ochronę danych osobowych, w szczególności:
              <ul>
                <li>Szyfrowanie połączenia HTTPS</li>
                <li>Wysyłanie formularzy za pośrednictwem bezpiecznych kanałów (Formspree)</li>
                <li>Ograniczenie dostępu do danych osobowych tylko dla osób upoważnionych</li>
                <li>Regularne aktualizacje systemów zabezpieczeń</li>
              </ul>
            </li>
            <li>
              Administrator regularnie przegląda i aktualizuje stosowane środki bezpieczeństwa w
              celu zapewnienia ochrony przed nieuprawnionym dostępem, ujawnieniem, zmianą lub
              zniszczeniem danych.
            </li>
          </ol>
        </section>

        <section>
          <h2>§ 12. Zmiany w Polityce Prywatności</h2>
          <ol>
            <li>
              Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności.
            </li>
            <li>
              O wszelkich zmianach Użytkownicy zostaną poinformowani poprzez publikację
              zaktualizowanej wersji Polityki Prywatności na stronie Serwisu.
            </li>
            <li>
              Zmiany wchodzą w życie z datą ich publikacji, chyba że w treści nowej Polityki
              Prywatności określono inaczej.
            </li>
            <li>
              W przypadku istotnych zmian Administrator może dodatkowo poinformować Użytkowników
              drogą mailową (jeśli podali swoje dane kontaktowe).
            </li>
          </ol>
        </section>

        <section>
          <h2>§ 13. Kontakt w sprawie ochrony danych</h2>
          <p>
            W sprawach dotyczących przetwarzania danych osobowych oraz realizacji praw wynikających
            z RODO prosimy o kontakt:
          </p>
          <ul>
            <li>
              Email: <a href={`mailto:${GDPR_EMAIL}`}>{GDPR_EMAIL}</a>
            </li>
            <li>
              Adres korespondencyjny:
              <br />
              Tomasz Bursztyński Software Development
              <br />
              Polna 10/14 m.23
              <br />
              00-625 Warszawa
            </li>
          </ul>
        </section>

        <section>
          <h2>§ 14. Informacja o projekcie</h2>
          <p>
            Projekt „Tu Jest House” aplikuje o dofinansowanie w ramach programu „Kultura –
            Interwencje 2026” Narodowego Centrum Kultury. Jest to cykl wydarzeń kulturalnych
            łączących edukację, muzykę elektroniczną i rozwój sceny klubowej w Polsce.
          </p>
        </section>

        <div className={styles.updated}>
          <p>
            <em>Ostatnia aktualizacja: 5 marca 2026</em>
          </p>
        </div>
      </div>
    </main>
  );
}
