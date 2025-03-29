import React from "react";

const GdprTable = () => {
  return (
    <div className="w-full">
      <table id="customers" className="w-full mt-8">
        <tr>
          <th>Účel spracúvania</th>
          <th>Právny základ spracovateľskej činnosti </th>
          <th>Kategória osobných údajov</th>
        </tr>
        <tr>
          <td>
            Uzavretie zmluvy, možnosť spracovania objednávky a riadneho dodania
            objednaného plnenia, vystavenie faktúry, ako aj možnosť realizovania
            úhrady ceny za plnenie a jej spárovanie s objednávkou{" "}
          </td>
          <td>
            <span className="font-bold">Článok 6 ods. 1 písm. b) GDPR: </span>{" "}
            <br />
            spracúvanie je nevyhnutné na plnenie zmluvy, ktorej zmluvnou stranou
            je dotknutá osoba, alebo aby sa na základe žiadosti dotknutej osoby
            vykonali opatrenia pred uzatvorením zmluvy{" "}
          </td>
          <td>
            Bežné osobné údaje, najmä meno, priezvisko, titul, adresa trvalého
            pobytu, adresa prechodného pobytu, bydlisko, dátum narodenia,
            pracovné zaradenie (funkcia, kategória), druh a číslo dokladu
            totožnosti, číslo bankového účtu, telefónne číslo, e mailová adresa,
            podpis{" "}
          </td>
        </tr>
        <tr>
          <td>
            Vedenie účtovníctva, vrátane pokladne, stavu majetku a záväzkov a
            pod.{" "}
          </td>
          <td>
            <span className="font-bold">Článok 6 ods. 1 písm. c) GDPR: </span>{" "}
            <br />
            spracúvanie je nevyhnutné na splnenie zákonnej povinnosti
            prevádzkovateľa
          </td>

          <td>
            Bežné osobné údaje, najmä Meno, priezvisko, Adresa, Telefónne číslo,
            E mailový kontakt, Vaše bankové údaje (banka, číslo účtu, IBAN),
            IČO, DIČ, IČ DPH{" "}
          </td>
        </tr>
        <tr>
          <td>
            Vedenie prijatej a odoslanej pošty - plnenie povinností podľa zákona
            č. 395/2002 Z.z.
          </td>
          <td>
            <span className="font-bold">Článok 6 ods. 1 písm. c) GDPR: </span>{" "}
            <br />
            spracúvanie je nevyhnutné na splnenie zákonnej povinnosti
            prevádzkovateľa{" "}
          </td>
          <td>
            Bežné osobné údaje, najmä meno, priezvisko, titul, adresa trvalého
            pobytu, adresa prechodného pobytu, bydlisko, pracovné zaradenie
            (funkcia, kategória), osobné číslo zamestnanca alebo splnomocnenca,
            e-mailová adresa, podpis{" "}
          </td>
        </tr>
        <tr>
          <td>
            Sledovanie dodržiavanie právnych predpisov prevádzkovateľa,
            obstarávanie právnych záležitostí, poskytovanie právnych rád,
            uplatňovanie a vymáhanie nárokov{" "}
          </td>
          <td>
            <span className="font-bold">
              V prípade bežných osobných údajov článok 6 ods. 1 písm. f) GDPR:{" "}
            </span>{" "}
            <br />
            spracúvanie je nevyhnutné na účely oprávnených záujmov, ktoré
            sleduje prevádzkovateľ alebo tretia strana, s výnimkou prípadov, keď
            nad takýmito záujmami prevažujú záujmy alebo základné práva a
            slobody dotknutej osoby, ktoré si vyžadujú ochranu osobných údajov,
            najmä ak je dotknutou osobu dieťa (oprávneným záujmom
            prevádzkovateľa je právna ochrana jeho nárokov, resp. právna obrana
            voči nárokom tretích subjektov, ako aj záujem na plnení práv a
            povinností v súlade s právom) <br />
            <span className="font-bold pt-4">
              {" "}
              V prípade osobitnej kategórie osobných údajov článok 9 ods. 2
              písm. f) GDPR:{" "}
            </span>{" "}
            <br />
            Uplatňovanie a obhajovanie právnych nárokov{" "}
          </td>
          <td>
            Bežné osobné údaje a osobitná kategória osobných údajov, najmämeno,
            priezvisko, titul, adresa trvalého pobytu, adresa prechodného
            pobytu, bydlisko, dátum narodenia, rodinný stav, číslo bankového
            účtu, iné údaje spracovávané v agende súdnych sporov
          </td>
        </tr>
        <tr>
          <td>
            Ponuka vlastných podobných tovarov a služieb prostredníctvom
            elektronickej pošty osobám, ktorých osobné údaje prevádzkovateľ
            získal v súvislosti s predajom tovaru alebo služieb{" "}
          </td>
          <td>
            <span className="font-bold">Článok 6 ods. 1 písm. f) GDPR: </span>{" "}
            <br />
            spracúvanie je nevyhnutné na účely oprávnených záujmov, ktoré
            sleduje prevádzkovateľ alebo tretia strana, s výnimkou prípadov, keď
            nad takýmito záujmami prevažujú záujmy alebo základné práva a
            slobody dotknutej osoby, ktoré si vyžadujú ochranu osobných údajov,
            najmä ak je dotknutou osobu dieťa (v zmysle Recitálu 47 GDPR sa
            spracúvanie osobných údajov na účely priameho marketingu môže
            považovať za oprávnený záujem prevádzkovateľa){" "}
          </td>
          <td>
            Bežné osobné údaje, najmä meno, priezvisko, titul, adresa trvalého
            pobytu, adresa prechodného pobytu, bydlisko, e-mailová adresa,
            telefónne číslo
          </td>
        </tr>
        <tr>
          <td>
            Ochrana majetku prevádzkovateľa, prevencia kriminality, zvyšovanie
            bezpečnosti objektu prevádzkovateľa prostredníctvom kamerového
            systému{" "}
          </td>
          <td>
            <span className="font-bold">Článok 6 ods. 1 písm. f) GDPR: </span>{" "}
            <br />
            spracúvanie je nevyhnutné na účely oprávnených záujmov, ktoré
            sleduje prevádzkovateľ alebo tretia strana, s výnimkou prípadov, keď
            nad takýmito záujmami prevažujú záujmy alebo základné práva a
            slobody dotknutej osoby, ktoré si vyžadujú ochranu osobných údajov,
            najmä ak je dotknutou osobu dieťa (oprávnený záujem prevádzkovateľa
            spočívajúci v ochrane majetku prevádzkovateľa, ako aj života a
            zdravia osôb vstupujúcich do objektu prevádzkovateľa)
          </td>
          <td>Bežné osobné údaje, najmä obrazový záznam</td>
        </tr>
        <tr>
          <td>Poskytnutie cenovej ponuky záujemcom, ktorí o to požiadajú</td>
          <td>
            <span className="font-bold">Článok 6 ods. 1 písm. b) GDPR: </span>{" "}
            <br />
            spracúvanie je nevyhnutné na plnenie zmluvy, ktorej zmluvnou stranou
            je dotknutá osoba, alebo aby sa na základe žiadosti dotknutej osoby
            vykonali opatrenia pred uzatvorením zmluvy{" "}
          </td>
          <td>
            Bežné osobné údaje, najmä meno, priezvisko, e-mail, telefónne číslo,
            miesto stavby, kontaktné údaje kontaktnej osoby, obrázky popisujúce
            stavbu{" "}
          </td>
        </tr>
        <tr>
          <td>
            Optimalizácia internetovej stránky www.strop.sk pre potreby osôb,
            ktorú ju používajú{" "}
          </td>
          <td>
            <span className="font-bold">Článok 6 ods. 1 písm. a) GDPR: </span>{" "}
            <br />
            Súhlas dotknutej osoby s používaním cookies, ktorý sa dá vypnúť a
            zapnúť prostredníctvom webového prehliadača{" "}
          </td>
          <td>IP adresa </td>
        </tr>
      </table>
    </div>
  );
};

export default GdprTable;
