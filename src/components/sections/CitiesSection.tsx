import styles from './CitiesSection.module.scss';
import { CITIES } from '../../lib/constants';

export default function CitiesSection() {
  return (
    <section id="miasta" className={styles.cities}>
      <div className="container">
        <h2 className={styles.title}>Trasa po Polsce</h2>
        <p className={styles.subtitle}>Pięć miast, pięć wydarzeń, jedna społeczność</p>

        <div className={styles.timeline}>
          {CITIES.map((city, index) => (
            <div key={city.name} className={styles.cityCard}>
              <div className={styles.number}>{index + 1}</div>
              <div className={styles.cityContent}>
                <h3 className={styles.cityName}>{city.name}</h3>
                <p className={styles.month}>{city.month}</p>
                <p className={styles.venue}>{city.venue}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.info}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>📍</div>
            <h4>Dostępność</h4>
            <p>
              Wszystkie wydarzenia odbywają się w centralnych lokalizacjach łatwo dostępnych
              komunikacją publiczną
            </p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>🎟️</div>
            <h4>Wstęp bezpłatny</h4>
            <p>
              Udział na podstawie rejestracji, limit miejsc zależny od pojemności obiektu w danym
              mieście
            </p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>♿</div>
            <h4>Dostępność dla wszystkich</h4>
            <p>
              Dbamy o bezpieczeństwo i dostępność wydarzeń zgodnie z kodeksem bezpieczeństwa
              uczestników
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
