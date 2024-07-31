"use client";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
const CookieComponent = () => {
  const [showCookieComponent, setShowCookieComponent] = useState(false);
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  useEffect(() => {
    const hasLocalConsent = Cookies.get("strop_cookie");
    setShowCookieComponent(!hasLocalConsent);
  }, []);

  const handleSetCookie = () => {
    const fiveMonthsFromNow = new Date();
    fiveMonthsFromNow.setMonth(fiveMonthsFromNow.getMonth() + 5);

    Cookies.set("strop_cookie", new Date().toString(), {
      secure: true,
      expires: fiveMonthsFromNow,
    });

    setShowCookieComponent(false);
  };
  const handleCustomize = () => {
    setShowCookieComponent(false);
    setShowCookieSettings(true);
  };
  const cancelCustomize = () => {
    setShowCookieComponent(true);
    setShowCookieSettings(false);
  };
  const acceptCustomize = () => {
    const fiveMonthsFromNow = new Date();
    fiveMonthsFromNow.setMonth(fiveMonthsFromNow.getMonth() + 5);

    Cookies.set("strop_cookie", new Date().toString(), {
      secure: true,
      expires: fiveMonthsFromNow,
    });

    setShowCookieComponent(false);
    setShowCookieSettings(false);
  };

  /* Cookie prisposobit */

  const [showNecessaryText, setNecessaryText] = useState(true);
  const [showFunctionalText, setFunctionalText] = useState(false);
  const [showAnalyticalText, setAnalyticalText] = useState(false);
  const [showPerformanceText, setPerformanceText] = useState(false);
  const [showAdvertisementText, setAdvertisementText] = useState(false);

  const toggleNecessaryText = () => {
    setNecessaryText(!showNecessaryText);
  };

  const toggleFunctionalText = () => {
    setFunctionalText(!showFunctionalText);
  };
  const toggleAnalyticalText = () => {
    setAnalyticalText(!showAnalyticalText);
  };
  const togglePerformanceText = () => {
    setPerformanceText(!showPerformanceText);
  };
  const toggleAdvertisementText = () => {
    setAdvertisementText(!showAdvertisementText);
  };

  return (
    <>
      {showCookieComponent && (
        <div className="cookies_container">
          <p>
            Súbory cookie používame na zlepšenie Vášho zážitku z prehliadania,
            poskytovanie prispôsobených reklám alebo obsahu a analýzu našej
            návštevnosti. Kliknutím na „Prijať“ súhlasíte s naším používaním
            súborov cookie.
          </p>
          <div className="cookies_button_container">
            <button
              className="btn btn--primary !max-w-none "
              onClick={handleCustomize}
            >
              Prispôsobiť
            </button>
            <button
              className="btn btn--primary !max-w-none "
              onClick={handleSetCookie}
            >
              Prijať
            </button>
          </div>
        </div>
      )}
      {showCookieSettings && (
        <>
          <div className="behind_card_background"></div>

          <div className="cookie_settings_all">
            <div className="cookie_settings_modal">
              <div>
                <h2 className="text-black">Prispôsobte si cookies</h2>
                <p className="cookie_setting_text">
                  Používame aj cookies tretích strán, ktoré nám pomáhajú
                  analyzovať, ako používate túto webovú stránku, ukladať vaše
                  preferencie a poskytovať obsah a reklamy, ktoré sú pre vás
                  relevantné. Tieto cookies budú uložené vo vašom prehliadači
                  iba s vaším predchádzajúcim súhlasom. Môžete sa rozhodnúť
                  povoliť alebo zakázať niektoré alebo všetky tieto súbory
                  cookie, ale zakázanie niektorých z nich môže ovplyvniť váš
                  zážitok z prehliadania.
                </p>
                <div style={{ marginTop: "2rem" }}></div>
                <div className="cookie_all">
                  <div className="cookie_left">
                    <label
                      htmlFor="toggle_cookie"
                      className="switch_label"
                      onClick={toggleNecessaryText}
                    >
                      Nevyhnutné
                    </label>
                    {showNecessaryText && (
                      <p className="description_cookies_text">
                        Nevyhnutné súbory cookie sú potrebné na umožnenie
                        základných funkcie tejto stránky, ako je napríklad
                        zabezpečenie prihlásenia alebo nastavenie vašich
                        preferencií súhlasu. Tieto súbory cookie neukladajú
                        žiadne osobné údaje.
                      </p>
                    )}
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="1"
                    className={`toggle_switcher_cookies ${
                      !showNecessaryText ? "" : "white_bg"
                    }`}
                    value={showNecessaryText ? 1 : 0}
                    onChange={toggleNecessaryText}
                    disabled={true}
                  />
                </div>

                <div className="cookie_all">
                  <div className="cookie_left">
                    <label
                      htmlFor="toggle_cookie"
                      className="switch_label"
                      onClick={toggleFunctionalText}
                    >
                      Funkčné
                    </label>
                    {showFunctionalText && (
                      <p className="description_cookies_text">
                        Funkčné súbory cookie zlepšujú použiteľnosť a výkon
                        tejto webovej stránky tým, že umožňujú pokročilé funkcie
                        a personalizáciu. Môžu si zapamätať vaše preferencie,
                        ako napr. výber jazyka, veľkosť písma alebo región, a
                        poskytujú prispôsobenejšie a pohodlnejšie prehliadanie.
                        Tieto stránky cookies nezhromažďujú žiadne osobné údaje
                        a informácie.
                      </p>
                    )}
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="1"
                    className={`toggle_switcher_cookies ${
                      !showFunctionalText ? "" : "white_bg"
                    }`}
                    value={showFunctionalText ? 1 : 0}
                    onChange={toggleFunctionalText}
                  />
                </div>

                <div className="cookie_all">
                  <div className="cookie_left">
                    <label
                      htmlFor="toggle_cookie"
                      className="switch_label"
                      onClick={toggleAnalyticalText}
                    >
                      Analytické
                    </label>
                    {showAnalyticalText && (
                      <p className="description_cookies_text">
                        Analytické súbory cookie nám pomáhajú pochopiť, ako
                        návštevníci interagujú s našou webovou stránkou
                        prostredníctvom zhromažďovania a vykazovania anonymných
                        informácií. Tieto súbory cookie poskytujú cenné
                        informácie o návštevnosť webovej stránky, správanie
                        používateľov a demografické údaje, čo umožňuje zlepšovať
                        výkon a obsah našich webových stránok. Stránka
                        zhromaždené informácie sú súhrnné a nie sú osobne
                        neidentifikujú jednotlivých návštevníkov.
                      </p>
                    )}
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="1"
                    className={`toggle_switcher_cookies ${
                      !showAnalyticalText ? "" : "white_bg"
                    }`}
                    value={showAnalyticalText ? 1 : 0}
                    onChange={toggleAnalyticalText}
                  />
                </div>

                <div className="cookie_all">
                  <div className="cookie_left">
                    <label
                      htmlFor="toggle_cookie"
                      className="switch_label"
                      onClick={togglePerformanceText}
                    >
                      Výkonnostné
                    </label>
                    {showPerformanceText && (
                      <p className="description_cookies_text">
                        Na zvýšenie rýchlosti sa používajú výkonné súbory
                        cookie, výkon a celkový používateľský zážitok z našich
                        webových stránok. Tieto súbory cookie zhromažďujú
                        anonymné informácie o tom, ako návštevníci používajú a
                        pohybujú sa na stránke, napríklad načítanie stránky časy
                        načítania, časy odozvy servera a chybové hlásenia. Podľa
                        analýzy týchto údajov môžeme identifikovať a riešiť
                        výkonnostné prekážky, optimalizovať naše webové stránky
                        a zabezpečiť plynulé a efektívne prehliadanie.
                      </p>
                    )}
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="1"
                    className={`toggle_switcher_cookies ${
                      !showPerformanceText ? "" : "white_bg"
                    }`}
                    value={showPerformanceText ? 1 : 0}
                    onChange={togglePerformanceText}
                  />
                </div>

                <div className="cookie_all">
                  <div className="cookie_left">
                    <label
                      htmlFor="toggle"
                      className="switch_label"
                      onClick={toggleAdvertisementText}
                    >
                      Reklamné
                    </label>
                    {showAdvertisementText && (
                      <p className="description_cookies_text">
                        Reklamné súbory cookie sa používajú na poskytovanie
                        cielených a prispôsobené reklamy na zlepšenie vášho
                        zážitku z prehliadania. Tieto súbory cookie zhromažďujú
                        informácie o vašich záujmoch, preferenciách a správaní
                        pri prehliadaní s cieľom zobrazovať relevantné reklamy
                        na našich webových stránkach a na iných webových
                        stránkach. ktoré navštevujete. Prispôsobením reklám
                        vašim záujmom sa snažíme poskytovať vám pútavejší a
                        zmysluplnejší obsah. Upozorňujeme, že tieto súbory
                        cookie neukladajú osobné identifikovateľné informácie.
                      </p>
                    )}
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="1"
                    className={`toggle_switcher_cookies ${
                      !showAdvertisementText ? "" : "white_bg"
                    }`}
                    value={showAdvertisementText ? 1 : 0}
                    onChange={toggleAdvertisementText}
                  />
                </div>
              </div>

              <div className="cookies_button_container">
                <button
                  className="btn btn--primary !max-w-none  w-full md:w-[150px]"
                  onClick={cancelCustomize}
                >
                  Zrušiť
                </button>
                <button
                  className="btn btn--primary !max-w-none  w-full md:w-[150px]"
                  onClick={acceptCustomize}
                >
                  Prijať
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CookieComponent;
