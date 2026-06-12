import FacebookBanner from './FacebookBanner'

import {

  LOGO,

  PHONE,

  PHONE_DISPLAY,

  ADDRESS,

  schedule,

} from '../data/site'



export default function Footer() {

  return (

    <footer className="footer">

      <div className="container footer-facebook-wrap">

        <FacebookBanner />

      </div>



      <div className="container footer-grid">

        <div className="footer-brand">

          <img
            src={LOGO}
            alt=""
            className="footer-logo"
            width={56}
            height={56}
            loading="lazy"
            decoding="async"
          />

          <div>

            <strong>KinetoMobility Dej</strong>

            <span>Kinetoterapie & recuperare medicală</span>

            <span className="footer-est">Est. 2007</span>

            <div className="footer-schedule">

              {schedule.map((s) => (

                <div

                  key={s.days}

                  className={`footer-schedule-line ${s.open ? '' : 'muted'}`}

                >

                  <span>{s.days}</span>

                  <span>{s.hours}</span>

                </div>

              ))}

            </div>

          </div>

        </div>



        <div className="footer-col">

          <h4>Contact rapid</h4>

          <ul>

            <li>

              <a href={`tel:+4${PHONE}`}>{PHONE_DISPLAY}</a>

            </li>

            <li>{ADDRESS}</li>

          </ul>

        </div>

      </div>



      <div className="container footer-bottom">

        <p>© {new Date().getFullYear()} KinetoMobility. Toate drepturile rezervate.</p>

      </div>

    </footer>

  )

}


