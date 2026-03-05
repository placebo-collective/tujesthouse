import styles from './AboutSection.module.scss';

export default function AboutSection() {
  return (
    <section id="o-projekcie" className={styles.about}>
      <div className="container">
        <h2 className={styles.title}>O projekcie</h2>

        <div className={styles.intro}>
          <p>
            <strong>Tu Jest House</strong> to cykl pięciu wydarzeń kulturowych łączących edukację,
            muzykę elektroniczną i rozwój kompetencji w obszarze kultury klubowej. Projekt
            realizowany jest w pięciu miastach Polski w okresie maj–wrzesień 2026.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}>🎯</div>
            <h3>Cel projektu</h3>
            <p>
              Zwiększenie uczestnictwa w kulturze oraz podniesienie kompetencji osób tworzących i
              realizujących wydarzenia kulturalne. Wsparcie młodych twórców sceny muzycznej i
              budowanie współpracy między miastami.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>📚</div>
            <h3>Edukacja</h3>
            <p>
              Warsztaty dla organizatorów wydarzeń, twórców i menedżerów kultury. Nauczysz się jak
              organizować koncerty i eventy, współpracować z klubami i artystami oraz zadbać o
              bezpieczeństwo i jakość wydarzeń. Spotkania sieciujące i wymiana doświadczeń.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>🎵</div>
            <h3>Muzyka</h3>
            <p>
              Publiczna prezentacja dorobku artystycznego młodych artystów wyłonionych w otwartym
              naborze. Showcase 4–6 wykonawców w każdym mieście z pełną dokumentacją audio-wideo.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>🤝</div>
            <h3>Współpraca</h3>
            <p>
              Budowanie sieci kontaktów między organizatorami, twórcami i uczestnikami kultury w
              różnych miastach. Wymiana doświadczeń i tworzenie standardów dobrej praktyki.
            </p>
          </div>
        </div>

        <div className={styles.highlights}>
          <div className={styles.highlight}>
            <span className={styles.number}>5</span>
            <span className={styles.label}>Miast</span>
          </div>
          <div className={styles.highlight}>
            <span className={styles.number}>10</span>
            <span className={styles.label}>Warsztatów</span>
          </div>
          <div className={styles.highlight}>
            <span className={styles.number}>5</span>
            <span className={styles.label}>Paneli</span>
          </div>
          <div className={styles.highlight}>
            <span className={styles.number}>25+</span>
            <span className={styles.label}>artystów</span>
          </div>
        </div>

        <div className={styles.funding}>
          <p>
            Projekt aplikuje o dofinansowanie w ramach programu{' '}
            <strong>„Kultura – Interwencje 2026"</strong>{' '}
            <strong>Narodowego Centrum Kultury</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
