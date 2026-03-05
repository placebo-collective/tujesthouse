import styles from './ProgramSection.module.scss';

export default function ProgramSection() {
  return (
    <section id="program" className={styles.program}>
      <div className="container">
        <h2 className={styles.title}>Program wydarzenia</h2>
        <p className={styles.subtitle}>
          Każde wydarzenie składa się z części dziennej (edukacyjnej) i nocnej (artystycznej)
        </p>

        <div className={styles.parts}>
          <div className={styles.part}>
            <div className={styles.partHeader}>
              <span className={styles.badge}>Część dzienna</span>
              <h3>Edukacja i networking</h3>
            </div>
            <div className={styles.partContent}>
              <div className={styles.item}>
                <div className={styles.itemIcon}>🎓</div>
                <div>
                  <h4>Warsztaty kompetencyjne</h4>
                  <p>
                    Dwa warsztaty w każdym mieście prowadzone przez ekspertów branżowych. Poruszamy
                    tematy współpracy w sektorze kultury, standardów jakości, praw autorskich i budowania
                    programów kulturalnych. Każdy uczestnik otrzymuje konkretne narzędzia do wykorzystania:
                    listy kontrolne, wzory dokumentów, standardy współpracy.
                  </p>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.itemIcon}>💬</div>
                <div>
                  <h4>Panel dyskusyjny</h4>
                  <p>
                    Moderowana dyskusja z udziałem ekspertów branżowych i przedstawicieli lokalnej sceny.
                    Rozmawiamy o równości szans, przejrzystych zasadach doboru programu oraz dobrych
                    praktykach w selekcji i współpracy. Każdy panel moderowany przez Sebastianę Swenta i
                    Tomasza Bursztyńskiego.
                  </p>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.itemIcon}>🤝</div>
                <div>
                  <h4>Spotkanie sieciujące</h4>
                  <p>
                    Ustrukturyzowana wymiana doświadczeń i kontaktów zawodowych między uczestnikami z
                    różnych miast. Budowanie trwałej sieci współpracy międzymiastowej i lokalnej.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.part}>
            <div className={styles.partHeader}>
              <span className={styles.badge}>Część nocna</span>
              <h3>Prezentacja artystyczna</h3>
            </div>
            <div className={styles.partContent}>
              <div className={styles.item}>
                <div className={styles.itemIcon}>🎧</div>
                <div>
                  <h4>Showcase artystów</h4>
                  <p>
                    Występy 4–6 wykonawców wyłonionych w otwartym, transparentnym naborze. Każdy
                    artysta prezentuje swój autorski set w profesjonalnych warunkach technicznych.
                    Okazja do odkrywania nowych talentów lokalnej sceny muzyki elektronicznej.
                  </p>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.itemIcon}>📹</div>
                <div>
                  <h4>Dokumentacja audio-wideo</h4>
                  <p>
                    Wszystkie występy są profesjonalnie rejestrowane. Materiały udostępniane
                    bezpłatnie na licencji Creative Commons (CC BY-NC-SA 4.0) w celach
                    dokumentacyjnych i edukacyjnych.
                  </p>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.itemIcon}>🎪</div>
                <div>
                  <h4>Wstęp wolny</h4>
                  <p>
                    Bezpłatny wstęp dla wszystkich zainteresowanych muzyki elektronicznej. Udział na
                    podstawie rejestracji, limit miejsc zależny od pojemności obiektu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.target}>
          <h3>Dla kogo?</h3>
          <div className={styles.targetGrid}>
            <div className={styles.targetItem}>
              <strong>Młodzi twórcy</strong>
              <p>artyści muzyczni na etapie rozwoju, osoby debiutujące na scenie</p>
            </div>
            <div className={styles.targetItem}>
              <strong>Organizatorzy</strong>
              <p>Osoby współtworzące wydarzenia kulturalne (produkcja, technika, komunikacja)</p>
            </div>
            <div className={styles.targetItem}>
              <strong>Miłośnicy kultury</strong>
              <p>Uczestnicy zainteresowani świadomym odbiorem kultury klubowej</p>
            </div>
            <div className={styles.targetItem}>
              <strong>Lokalne środowiska</strong>
              <p>Osoby aktywne w lokalnych scenach kulturalnych</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
