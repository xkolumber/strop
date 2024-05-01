import React from "react";
import ButtonElement from "../ButtonElement";

const CeilingPanelCalculate = () => {
  return (
    <div className="main_section ">
      <h2>Predbežný výpočet konštrukčnej hrúbky a výstuže</h2>
      <p>
        Pre predbežný návrh hrúbky a vystuženia sa dajú panely posúdiť podľa
        Qn(kN m-2), čo je dovolené celkové prevozné zaťaženie bez váhy dielca
        s obmedzením celkového pretvorenia na Lo/300 v závislosti na dĺžke
        Lo (m)(teoretické rozpätie). Vypočítané plošné zaťaženie sa porovná
        s hodnotami deklarovanými od výrobcu a navrhne sa odpovedajúci typ
        panelu. Je nutné si dať pozor na jednotky, pretože hodnota spojitého
        zaťaženia je na 1m².
      </p>

      <h2 className="mt-16">Podrobný výpočet konštrukčnej hrúbky a výstuže</h2>
      <p>
        Pri podrobnom výpočte dielcov sa musí spraviť výpočet momentu M (moment
        od extrémneho zaťaženia) a šmyku O (šmyková sila od extrémneho
        zaťaženia) od bodového , líniového, plošného zaťaženia alebo jeho
        kombinácií. Po výpočte vnútorných síl sa tieto hodnoty porovnávajú
        s hodnotami uvádzanými výrobcom M (kNm) (moment vzniku trhlín
        z extrémneho zaťaženia, konštrukcie 1. kategórie), O (kN) (maximálna
        posúvajúca sila pri uložení100mm z extrémneho zaťaženia) v závislosti na
        dĺžke L (m) (teoretické rozpätie). Je nutné dbať na zvýšenú pozornosť na
        šírku panelu, pretože hodnoty M a O sú počítané na šírku celého panelu,
        takže1200mm.
      </p>

      <h2 className="mt-16">Požiarna odolnosť FF200</h2>
      <p>
        Predpäté stropné panely majú minimálnu požiarnu odolnosť 60 minút bez
        obmedzenia únosnosti dielca. Vyššie hodnoty požiarnej odolnosti je možné
        deklarovať na základe statického posúdenia dielcov. Výrobca stanovuje
        hodnoty požiarnej odolnosti v závislosti na momente M (kNm) (celkový
        moment prevozného zaťaženia vrátane vlastnej hmotnosti na šírke dielca)
        a šmyku Q (kN) (celková šmyková sila od prevozného zaťaženia vrátane
        vlastnej hmotnosti dielca na šírku dielca).
      </p>

      <div className="mt-16">
        <ButtonElement text="Kontaktujte nás" />
      </div>
    </div>
  );
};

export default CeilingPanelCalculate;
