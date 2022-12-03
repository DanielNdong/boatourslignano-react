import './styles/css/styles.css';
import './styles/css/hamburgers.css';
import OptionSelect from './components/OptionSelect';
import FilterReservation from './components/FilterReservation';
import PrincipalCards from './components/PrincipalCards';
import { languages } from './fetch/data';
import { v4 as uuidv4 } from 'uuid';
import Hamburger from 'hamburger-react';
import { useState } from 'react';

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <section className="header_contacts_wrapper">
          <nav className="header_socialmedia">
            <ul>
              <li>facebook</li>
              <li>whatsapp</li>
              <li>telegram</li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>Whatsapp</li>
              <li>
                <a href="tel:+34111223344">+34 111 22 33 44</a>
              </li>
              <li>
                <a href="mailto:example@gmail.com">mymail@gmail.com</a>
              </li>
            </ul>
          </nav>
        </section>
        <section className="header_navigation_wrapper">
          <div className="logo_wrapper">
            <a href="index.html">
              <img
                src="https://www.boattourslignano.it/wp-content/uploads/2021/03/cropped-logo-square.png"
                srcSet="assets/images/logo/cropped-logo-square.png"
                alt="logo"
              />
            </a>
          </div>
          <nav>
            <ul>
              <li>
                Tours en barca
                <i className="fa-solid fa-caret-down"></i>
                <ul>
                  <li>
                    <a href="/">tour</a>
                  </li>
                  oncontextmenu
                  <li>
                    <a href="/">tour</a>
                  </li>
                  <li>
                    <a href="/">tour</a>
                  </li>
                  <li>
                    <a href="/">tour</a>
                  </li>
                  <li>
                    <a href="/">tour</a>
                  </li>
                  <li>
                    <a href="/">tour</a>
                  </li>
                  <li>
                    <a href="/">tour</a>
                  </li>
                  <li>
                    <a href="/">tour</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/">Moto de acuática</a>
              </li>
              <li>
                <a href="/">Personalizar</a>
              </li>
              <li>
                <select name="idioma" id="idioma">
                  {languages.map((data) => (
                    <OptionSelect
                      values={{
                        key: uuidv4(),
                        value: data.name,
                        src: data.src,
                        width: data.width,
                        alt: data.alt,
                      }}
                    >
                      {data.name}
                    </OptionSelect>
                  ))}
                </select>
              </li>
            </ul>
          </nav>
          {/* <!-- Menubar --> */}
          <div className="respons_menuButton">
            <Hamburger
              id="buttonHeader"
              className={`${(isOpen ??= 'isActive')}`}
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
        </section>
        {/* <!-- Background layout of carousel--> */}
        <section className="header_background_layout">
          <div className="caroussel">
            <div>
              <img src="/" alt="img" />
            </div>
            <div>
              <img src="/" alt="img" />
            </div>
            <div>
              <img src="/" alt="img" />
            </div>
            <div>
              <img src="/" alt="img" />
            </div>
            <div>
              <img src="/" alt="img" />
            </div>
          </div>
        </section>
        {/* <!-- Aside wrapper --> */}
        <section className="aside" id="asidemain">
          <div className="aside_inner" id="asideinner">
            <header>{/* <!-- Vacio --> */}</header>
            <ul>
              <li>
                Language:
                <select name="idioma" id="idioma">
                  {languages.map((data) => (
                    <OptionSelect
                      values={{
                        key: uuidv4(),
                        value: data.name,
                        src: data.src,
                        width: data.width,
                        alt: data.alt,
                      }}
                    >
                      {data.name}
                    </OptionSelect>
                  ))}
                </select>
              </li>
              <li>
                Tours en barca<i className="fa-solid fa-caret-down"></i>
              </li>
              <li>
                Crea tu plan<i className="fa-solid fa-caret-down"></i>
              </li>
              <li>
                Contacto<i className="fa-solid fa-caret-down"></i>
              </li>
              <li>
                Acerca de nosotros<i className="fa-solid fa-caret-down"></i>
              </li>
            </ul>
          </div>
        </section>
        {/* <!-- Reservation form --> */}
        <section className="reservation">
          <h3>Reserva de excursión</h3>
          <form>
            <FilterReservation
              values={{
                name: 'excursion',
                optionValue: 'site',
              }}
            />
            <FilterReservation
              values={{
                name: 'adultos',
                optionValue: 0,
              }}
            />
            <FilterReservation
              values={{
                name: 'niño',
                optionValue: 0,
              }}
            />
            <FilterReservation
              values={{
                name: 'bebe',
                optionValue: 0,
              }}
            />
            <label htmlFor="fecha">
              <input type="date" name="fecha" id="fecha" />
            </label>
            <input type="submit" value="Hacer reserva" />
          </form>
        </section>
      </header>
      <main>
        <article>
          <h2>Encontrarán la ruta en barco idónea para tus vaciones</h2>
          <img src="" alt="img" />
          <p>
            El sol, la brisa marina y la inmensidad del brillante mar
            Mediterráneo, ¡relájese completamente! Durante unas vacaciones en la
            costa.
          </p>
          <a href="/" role="button">
            Nuestras rutas
          </a>
        </article>
        <section className="cards_wrapper">
          <header>
            <p>
              <span>Tours</span>
              <br />
              en barco
            </p>
          </header>
          <PrincipalCards
            values={{
              id: 'card1',
              src: '',
              place: 'Lugar costa',
              title: 'Tour en barco',
            }}
          >
            Lorem ipsum dolor sit amet consectetur ipsum beatae debitis harum,
            illo maiores earum illo maiores earum ipsa quidem inci ipsa quidem
            incidunt optio!
          </PrincipalCards>
          <PrincipalCards
            values={{
              id: 'card2',
              src: '',
              place: 'Lugar costa',
              title: 'Tour en barco',
            }}
          >
            Lorem ipsum dolor sit amet consectetur ipsum beatae debitis harum,
            illo maiores earum illo maiores earum ipsa quidem inci ipsa quidem
            incidunt optio!
          </PrincipalCards>
          <PrincipalCards
            values={{
              id: 'card3',
              src: '',
              place: 'Lugar costa',
              title: 'Tour en barco',
            }}
          >
            Lorem ipsum dolor sit amet consectetur ipsum beatae debitis harum,
            illo maiores earum illo maiores earum ipsa quidem inci ipsa quidem
            incidunt optio!
          </PrincipalCards>
        </section>
        {/* <!-- Information section --> */}
        <section className="information">
          <div className="information_inner">
            <article>
              <img src="" alt="img" />
              <h2>Ruta en barco</h2>
            </article>
            <article>
              <img src="" alt="img" />
              <h2>Nuestros Horarios</h2>
            </article>
            <article>
              <img src="" alt="img" />
              <h2>Tarifas</h2>
            </article>
          </div>
        </section>
        {/* <!-- Squads --> */}
        <section className="squads" id="squads">
          <img src="" alt="img" />
          <h2>Date una vuelta con nuestras motos de agua!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            debitis illo sunt et sint molestiae at ad consequuntur magni
            possimus.
          </p>
          <a href="#squads">Mas información</a>
        </section>
        {/* <!-- Brunch --> */}
        <article className="restZone" id="restZone">
          <section>
            <div>
              <h2>PRUEBA NUEVOS PLATOS</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                repudiandae quas dolorum, odio sit ullam reprehenderit mollitia
                in minima consequuntur deleniti vel cumque.
              </p>
              <a href="#restZone">¡Descubrelos!</a>
            </div>
            <div>
              <img src="" alt="img" />
            </div>
          </section>
        </article>
        {/* <!-- "Excursiones" --> */}
        <section className="excursiones">
          <header>
            <p>
              <span>Excursiones</span>
              <br />
              personalizadas
            </p>
          </header>
          {/*  <!-- Activities slider --> */}
          <section className="excursiones_caroussel_wrapper">
            <div className="caroussel_inner">
              <div>
                <img src="" alt="img" />
              </div>
              <div>
                <img src="" alt="img" />
              </div>
              <div>
                <img src="" alt="img" />
              </div>
              <div>
                <img src="" alt="img" />
              </div>
            </div>
          </section>
        </section>
        {/*   <!-- NEWS LETTER --> */}
        <section className="newletter" id="newsletter">
          <div>
            <h2>
              Sucribete <br /> a nuestra newsletter
            </h2>
            <p>
              Recibe novedades sobre nuevos precios, excursiones, promociones y
              mucho más!
            </p>
            <a href="#newsletter" role="button">
              Suscribete!
            </a>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
