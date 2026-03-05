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
                  <h4>Warsztat 1 - Współpraca w sektorze kultury</h4>
                  <p>
                    Standardy komunikacji, umowy i budowanie relacji bez pośredników. 
                    Praktyczne narzędzia: lista kontrolna kontaktu z miejscem/organizatorem 
                    oraz podstawowy zestaw dokumentów współpracy.
                  </p>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.itemIcon}>📜</div>
                <div>
                  <h4>Warsztat 2 - Prawa autorskie i publikacja</h4>
                  <p>
                    Legalne upowszechnianie nagrań setów i materiałów edukacyjnych. 
                    Lista kontrolna zgód (wykonawca, wizerunek, publikacja) oraz 
                    podstawowy model licencji do publikacji.
                  </p>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.itemIcon}>💬</div>
                <div>
                  <h4>Panel dyskusyjny</h4>
                  <p>
                    Równość szans i przejrzyste zasady doboru programu. Dobre praktyki 
                    selekcji i współpracy. Panel moderowany przez Sebastiana Swenta i 
                    Tomasza Bursztyńskiego, z udziałem ekspertów z branży.
                  </p>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.itemIcon}>🤝</div>
                <div>
                  <h4>Spotkanie sieciujące</h4>
                  <p>
                    Ustrukturyzowana wymiana doświadczeń i kontaktów zawodowych między 
                    uczestnikami. Budowanie sieci współpracy między miastami.
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
                  <h4>Showcase DJ-ów</h4>
                  <p>
                    Publiczna prezentacja dorobku artystycznego 4–6 wykonawców wyłonionych 
                    w otwartym naborze. Każdy DJ prezentuje swój autorski set w profesjonalnych 
                    warunkach technicznych.
                  </p>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.itemIcon}>📹</div>
                <div>
                  <h4>Dokumentacja audio-wideo</h4>
                  <p>
                    Pełna rejestracja wydarzeń w celach dokumentacyjnych i edukacyjnych. 
                    Materiały udostępniane bezpłatnie na licencji Creative Commons 
                    (CC BY-NC-SA 4.0).
                  </p>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.itemIcon}>🎪</div>
                <div>
                  <h4>Wstęp bezpłatny</h4>
                  <p>
                    Udział w wydarzeniu na podstawie rejestracji. Limit miejsc zależny 
                    od pojemności obiektu. Priorytet dla grup docelowych projektu.
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
              <p>DJ i producenci na etapie rozwoju, osoby debiutujące na scenie</p>
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
