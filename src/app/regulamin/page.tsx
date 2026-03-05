import type { Metadata } from 'next';
import styles from './regulamin.module.scss';
import { GDPR_EMAIL } from '../../lib/constants';

export const metadata: Metadata = {
  title: 'Regulamin | Tu Jest House',
  description: 'Regulamin serwisu internetowego Tu Jest House',
};

export default function RegulaminPage() {
  return (
    <main className={styles.legal}>
      <div className="container">
        <h1>Regulamin serwisu internetowego</h1>
        
        <section>
          <h2>§ 1. Postanowienia ogólne</h2>
          <ol>
            <li>Niniejszy regulamin określa zasady korzystania z serwisu internetowego dostępnego pod adresem tujesthouse.pl (dalej: „Serwis").</li>
            <li>Właścicielem i administratorem Serwisu jest:
              <br /><strong>Tomasz Bursztyński Software Development</strong>
              <br />Polna 10/14 m.23
              <br />00-625 Warszawa
              <br />NIP: 7011072260
              <br />Email: {GDPR_EMAIL}
            </li>
            <li>Korzystanie z Serwisu oznacza akceptację postanowień niniejszego Regulaminu.</li>
            <li>Serwis jest przeznaczony do prezentacji informacji o projekcie kulturalnym „Tu Jest House" oraz umożliwienia rejestracji na wydarzenia i zgłaszania się DJ-ów do open call.</li>
          </ol>
        </section>

        <section>
          <h2>§ 2. Definicje</h2>
          <ol>
            <li><strong>Użytkownik</strong> – osoba fizyczna lub prawna korzystająca z Serwisu.</li>
            <li><strong>Projekt</strong> – cykl wydarzeń kulturalnych „Tu Jest House” planowany do realizacji w okresie maj-wrzesień 2026. Projekt aplikuje o dofinansowanie w ramach programu „Kultura – Interwencje 2026” Narodowego Centrum Kultury.</li>
            <li><strong>Formularz DJ</strong> – formularz zgłoszeniowy dla DJ-ów chcących wziąć udział w open call.</li>
            <li><strong>Formularz warsztatów</strong> – formularz rejestracyjny na warsztaty edukacyjne w ramach Projektu.</li>
            <li><strong>Wydarzenie</strong> – jedno z pięciu spotkań odbywających się w ramach Projektu w okresie maj-wrzesień 2026.</li>
          </ol>
        </section>

        <section>
          <h2>§ 3. Zasady korzystania z Serwisu</h2>
          <ol>
            <li>Serwis jest dostępny bezpłatnie 24 godziny na dobę, 7 dni w tygodniu.</li>
            <li>Administrator zastrzega sobie prawo do przerw w dostępności Serwisu związanych z konserwacją, aktualizacją lub innymi przyczynami technicznymi.</li>
            <li>Użytkownik zobowiązuje się do korzystania z Serwisu w sposób zgodny z prawem, niniejszym Regulaminem oraz dobrymi obyczajami.</li>
            <li>Zabrania się:
              <ul>
                <li>dostarczania treści o charakterze bezprawnym;</li>
                <li>wykorzystywania Serwisu w sposób naruszający prawa osób trzecich;</li>
                <li>podejmowania działań mogących zakłócić funkcjonowanie Serwisu;</li>
                <li>podawania nieprawdziwych lub wprowadzających w błąd informacji w formularzach.</li>
              </ul>
            </li>
          </ol>
        </section>

        <section>
          <h2>§ 4. Formularz zgłoszeniowy dla DJ-ów</h2>
          <ol>
            <li>Formularz DJ służy do zgłaszania kandydatur do występów w ramach Projektu w wybranym mieście.</li>
            <li>Wypełnienie formularza wymaga podania następujących danych:
              <ul>
                <li>imienia i nazwiska;</li>
                <li>adresu e-mail;</li>
                <li>numeru telefonu;</li>
                <li>pseudonimu artystycznego;</li>
                <li>preferowanych miast (1 i 2 wybór);</li>
                <li>linku do profilu SoundCloud lub Mixcloud;</li>
                <li>opisu doświadczenia i stylu muzycznego.</li>
              </ul>
            </li>
            <li>Wysłanie formularza wymaga wyrażenia zgody na przetwarzanie danych osobowych zgodnie z Polityką Prywatności.</li>
            <li>Wysłanie formularza nie gwarantuje udziału w Projekcie. Wybór DJ-ów następuje na podstawie merytorycznej oceny zgłoszeń.</li>
            <li>Organizator skontaktuje się z wybranymi osobami drogą mailową lub telefoniczną.</li>
          </ol>
        </section>

        <section>
          <h2>§ 5. Formularz rejestracji na warsztaty</h2>
          <ol>
            <li>Formularz warsztatów służy do zapisywania się na część edukacyjną Wydarzeń.</li>
            <li>Wypełnienie formularza wymaga podania następujących danych:
              <ul>
                <li>imienia i nazwiska;</li>
                <li>adresu e-mail;</li>
                <li>numeru telefonu;</li>
                <li>preferowanego miasta;</li>
                <li>roli w branży;</li>
                <li>opisu doświadczenia i motywacji.</li>
              </ul>
            </li>
            <li>Wysłanie formularza wymaga wyrażenia zgody na przetwarzanie danych osobowych zgodnie z Polityką Prywatności.</li>
            <li>Warsztaty są bezpłatne i dostępne dla wszystkich zainteresowanych osób.</li>
            <li>Liczba miejsc na warsztatach może być ograniczona. W przypadku dużego zainteresowania priorytet będą miały osoby najwcześniej zgłoszone.</li>
            <li>Organizator skontaktuje się z uczestnikami drogą mailową w celu potwierdzenia uczestnictwa i przekazania szczegółowych informacji.</li>
          </ol>
        </section>

        <section>
          <h2>§ 6. Prawa autorskie i własność intelektualna</h2>
          <ol>
            <li>Wszystkie materiały zamieszczone w Serwisie, w tym teksty, grafiki, logotypy, zdjęcia i inne elementy, są chronione prawem autorskim i stanowią własność Administratora lub podmiotów trzecich, które udzieliły Administratorowi licencji.</li>
            <li>Kopiowanie, rozpowszechnianie lub inne wykorzystywanie materiałów z Serwisu wymaga pisemnej zgody Administratora, z wyjątkiem przypadków dozwolonych przez przepisy prawa.</li>
            <li>DJ-e wysyłający formularz zgłoszeniowy udzielają Administratorowi prawa do publikacji ich pseudonimu artystycznego, opisu stylu oraz fragmentów nadesłanych nagrań wyłącznie w celach promocyjnych Projektu.</li>
          </ol>
        </section>

        <section>
          <h2>§ 7. Odpowiedzialność</h2>
          <ol>
            <li>Administrator dokłada wszelkich starań, aby informacje zamieszczone w Serwisie były aktualne i prawdziwe, jednak nie ponosi odpowiedzialności za szkody wynikłe z ich wykorzystania.</li>
            <li>Administrator nie ponosi odpowiedzialności za:
              <ul>
                <li>przerwy w dostępności Serwisu;</li>
                <li>zmiany w harmonogramie lub lokalizacjach Wydarzeń;</li>
                <li>działania osób trzecich wpływające na funkcjonowanie Serwisu;</li>
                <li>treści udostępniane przez Użytkowników w formularzach.</li>
              </ul>
            </li>
            <li>Linki do serwisów zewnętrznych (np. SoundCloud, Mixcloud) zamieszczone w Serwisie mają charakter wyłącznie informacyjny. Administrator nie ponosi odpowiedzialności za treści serwisów zewnętrznych.</li>
          </ol>
        </section>

        <section>
          <h2>§ 8. Ochrona danych osobowych</h2>
          <ol>
            <li>Zasady przetwarzania danych osobowych Użytkowników określa Polityka Prywatności dostępna pod adresem: <a href="/polityka-prywatnosci">tujesthouse.pl/polityka-prywatnosci</a></li>
            <li>Administratorem danych osobowych jest Tomasz Bursztyński Software Development.</li>
            <li>Dane osobowe są przetwarzane zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO).</li>
          </ol>
        </section>

        <section>
          <h2>§ 9. Zmiany w Regulaminie</h2>
          <ol>
            <li>Administrator zastrzega sobie prawo do wprowadzania zmian w Regulaminie.</li>
            <li>Aktualna wersja Regulaminu jest zawsze dostępna w Serwisie.</li>
            <li>Zmiany w Regulaminie wchodzą w życie z dniem ich publikacji w Serwisie.</li>
            <li>Korzystanie z Serwisu po wprowadzeniu zmian oznacza akceptację nowego Regulaminu.</li>
          </ol>
        </section>

        <section>
          <h2>§ 10. Postanowienia końcowe</h2>
          <ol>
            <li>W sprawach nieuregulowanych w niniejszym Regulaminie mają zastosowanie przepisy prawa polskiego.</li>
            <li>Wszelkie spory wynikłe z korzystania z Serwisu będą rozstrzygane przez właściwe sądy polskie.</li>
            <li>Regulamin wchodzi w życie z dniem 5 marca 2026 roku.</li>
          </ol>
        </section>

        <section>
          <h2>§ 11. Kontakt</h2>
          <p>W przypadku pytań dotyczących Regulaminu lub Serwisu prosimy o kontakt:</p>
          <ul>
            <li>Email: <a href={`mailto:${GDPR_EMAIL}`}>{GDPR_EMAIL}</a></li>
            <li>
              Adres korespondencyjny:
              <br />Tomasz Bursztyński Software Development
              <br />Polna 10/14 m.23
              <br />00-625 Warszawa
            </li>
          </ul>
        </section>

        <div className={styles.updated}>
          <p><em>Ostatnia aktualizacja: 5 marca 2026</em></p>
        </div>
      </div>
    </main>
  );
}
