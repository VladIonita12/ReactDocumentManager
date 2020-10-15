
import React, {Component} from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font, PDFDownloadLink,PDFViewer } from '@react-pdf/renderer';

class GDPR extends Component{


    constructor(props){
        super(props)
    
        this.state = {
          paragraphs: [],
          annexes:[],
          addenums:[],
          clientData:null,
          providerData: null,
          isOk :false,
          cancel:false,
          selectedContract: null,
          goHome: false,
          createAddenum: false,
          createAnnex: false,
          goBack: false,
          addAnnexCancel: false,
          isLoading: false,
          load: false ,
          numberAnnexes:0,
          numberAddenums:0,
          update: false
        };
    }    

    render(){
Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
  });
  
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'Oswald'
    },
    author: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 40,
    },
    subtitle: {
      fontSize: 18,
      margin: 12,
      fontFamily: 'Oswald'
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: 'justify',
      fontFamily: 'Times-Roman'
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: 'center',
      color: 'grey',
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey',
    },
  });
return(
<div class="container">
<h3>POLITICA PRIVIND PRELUCRAREA DATELOR CU CARACTER PERSONAL SI CONFIDENTIALITATEA DATELOR </h3>
    <p>

Fișierele cookies – informație prescurtată
Ce sunt fișierele „cookies”?
Fișierele ”cookies" sunt date IT, în special fișiere text, stocate în dispozitivele utilizatorilor finali
(computere, telefoane, etc.) destinate utilizării site-urilor Web. Aceste fișiere permit recunoașterea
dispozitivului utilizatorului și afișarea corectă a site-ului adaptat preferințelor sale individuale. "Cookieurile" conțin, de obicei, numele site-ului web de la care provin, timpul de stocarea lor pe dispozitivul
final și un număr unic.
Pentru ce folosim fișierele „cookies”?
Cookie-urile sunt conținute în protocolul HTTP, care este aplicat pentru comunicarea între serverul de
internet și browser. Se compune din: o cheie care specifică denumirea valorii, valoarea și durata de
viață, după care browser-ul ar trebui să șteargă fișierul cookie. Funcțiile lor sunt în mare parte standard
pentru setările prevăzute de browser. Cookie-urile sunt folosite pentru a facilita utilizarea site-ului web
și pentru a potrivi conținutul site-ului, inclusiv ofertele noastre, la preferințele utilizatorilor și pentru a
spori gradul de utilizare și personalizare a conținutului site-urilor de Internet.
Prin cookie urmărim comportamentul vizitorului pe site-ul nostru. Cookie ne ajuta sa îmbunătățim
experienta Clientului atunci când acesta vizitează site-ul nostru. Acceptând Cookies, Clientul nu trebuie
sa introducă de fiecare datele atunci când se loghează în cont sau când descarcă un produs.
Dacă un Client alege sa nu accepte cookie-urile noastre, este posibil sa aibă o experienta mai puțin
plăcută pe site decât atunci când le accepta. Dacă un Client alege sa accepte cookie, accepta ca siteul (serverul nostru) sa transmită către hardisk-ul sau mici fragmente de informații. Aceste informații vor
fi folosite în scopurile afișării unui site adaptat preferințelor clientului. Fișierele cookies nu pot fi utilizate
pentru transmiterea virușilor sau pentru a rula programe.
Ce fel de ”cookie-uri” sunt folosite de noi?
Se utilizează două tipuri de fișiere "cookies" - "sesiune" și "permanente". Primele sunt fișiere
temporare care rămân pe dispozitivul utilizatorului până la delogare de pe site sau dezactivarea
software-ului (a browser-ului web) - apoi sunt eliminate automat de pe dispozitivul utilizatorului.
Fișierele "permanente" rămân pe dispozitivul utilizatorului pentru timpul specificat în parametrii
fișierelor "cookie" sau până când sunt eliminați manual de către utilizator. Fișierele "cookies"
utilizate de partenerii operatorului site-ului web sunt supuse propriilor politici de confidențialitate.
Cookie-urile pe care le folosim trebuie în primul rând să faciliteze utilizarea site-ului nostru, de
exemplu prin "memorarea" informațiilor furnizate o singură dată, astfel încât utilizatorul nu
trebuie să le indice de fiecare dată. De asemenea, folosim cookie-uri care permit adaptarea
conținutului prezentat pe Internet la preferințele dvs. (cum ar fi anunțurile și fotografiile).
Politică de confidențialitate și fișierele "cookies"
Atunci când utilizatorul navighează pe site-ul nostru, folosim cookie-urile pentru a identifica
browserul sau dispozitivul utilizatorului - fișierele "cookies" colectează diferite tipuri de informații,
care în principiu nu prezintă date personale (nu permit identificarea utilizatorului). Cu toate
acestea, anumite informații, în funcție de conținutul și de modul de utilizare a acestora, pot fi
asociate cu o anumită persoană și astfel pot fi considerate date cu caracter personal. În legătură
cu politica site-ului Kontract, datele sunt criptate, ceea ce împiedică accesul persoanelor
neautorizate la acestea.
Profilare
Cu ajutorul tehnologiei cookie folosită pe site-ul nostru, este posibil să se afle preferințele
utilizatorilor - de exemplu, analizând cât de des vizitează site-ul nostru sau la ce produse se uită
cel mai mult. Analiza comportamentului online ne ajută să înțelegem mai bine obiceiurile și
așteptările utilizatorilor și să ne adaptăm nevoilor și intereselor lor. Datorită acestei tehnologii, nu
numai că putem prezenta utilizatorului o reclamă adaptată acestuia (de exemplu, publicitatea
care rezultă din recenta vizualizare a încălțămintei numai în categoria "pantofi"), iar din ofertele
disponibile să prezentăm în primul rând cele care se potrivesc cel mai bine nevoilor utilizatorului,
dar putem, de asemenea, să creăm și să prezentăm ofertele pentru utilizatorul respectiv sau
reduceri care nu sunt disponibile altor persoane.
Renunțarea utilizatorului la cookie-uri care permit afișarea unor anunțuri potrivite intereselor sale,
nu înseamnă că acesta nu va mai primi nicio reclamă atunci când utilizează site-urile noastre sau
alte site-uri web - în acest caz, utilizatorul va primi în continuare același număr de anunțuri, dar
care nu vor avea legătură cu activitatea sa de până acum.
Accesul la informații privind activitatea utilizatorilor pe Internet prin folosirea cookie-urilor ne va
permite, de asemenea, să efectuăm analizele pieții și cele statistice.
Informațiile colectate și conținute în fișierele cookies pot fi stocate după terminarea sesiunii de
browser, ceea ce permite, de exemplu, folosirea acestora în timpul vizitelor ulterioare ale
utilizatorului.
Retargeting
Bazându-ne pe cookie-uri, folosim tehnologia care ne permite să ajungem cu un mesaj publicitar
la utilizatorii care au vizitat anterior site-ul nostru, pe alte site-uri vizitate, inclusiv pe cele care
aparțin entităților care cooperează cu partenerii noștri.
Lipsa legăturii dintre anunțul afișat utilizatorului și interesele și nevoile acestuia, poate fi
deranjant pentru el. Considerăm că este mai atractiv și mai practic ca utilizatorul să primească
mesajul care să corespundă intereselor și nevoilor sale identificate ca rezultat al analizei
comportamentului său anterior, bazat pe tehnologia cookie-urilor. Prin urmare, suntem interesați
ca materialele publicitare să-l urmărească pe utilizatorul care navighează pe site-urile web
diferite pentru a-i furniza reclamele adaptate activității sale anterioare pe internet.
Fișiere cookie terță parte (third party cookies)
Cookie-urile pe care le folosim sunt destinate în primul rând optimizării deservirii utilizatorului
atunci când acesta folosește site-ul nostru. Cu toate acestea, colaborăm cu alte companii în
domeniul activității lor de marketing (publicitate). În scopul acestei cooperări, browser-ul sau alt
software instalat pe dispozitivul utilizatorului, salvează și cookie-urile provenite de la entitățile
care desfășoară astfel de activitate de marketing. În politica noastră de confidențialitate puteți
lua cunoștință de lista partenerilor noștri de încredere.
Fișierele cookies trimise de aceste entități sunt menite să îmbunătățească eficiența prezentării
către utilizator a anunțurilor publicitare care corespund activității sale online - terțe părți
furnizează conținut publicitar utilizatorilor.
Prin urmare, în timpul vizitei pe site-ul nostru, cookie-urile partenerilor noștri sunt, de asemenea,
stocate pe computer sau pe alt dispozitiv al utilizatorului. În acest fel, de exemplu, sunt colectate
informațiile despre produsele urmărite sau achiziționate.
 
Ștergerea / blocarea fișierelor „cookies”
Rețineți că puteți gestiona acordurile dvs. pentru utilizarea cookie-urilor prin intermediul setărilor
de confidențialitate pe pagina noastră sau în browser-ului dvs. Dacă nu sunteți de acord cu
utilizarea cookie-urilor bifați aceasta opțiune si nu vom mai utiliza Cookies pentru analiza
comportamentului d-voastră pe site-ul nostru.
În mod standard, browser-ele de Internet sau alte programe software instalate pe un computer
sau pe un alt dispozitiv al utilizatorului, conectat la rețea, permit plasarea anumitor tipuri de
"cookie-uri" pe un astfel de dispozitiv. Aceste setări pot fi modificate astfel încât să se blocheze
utilizarea fișierelor "cookies" în setările browser-ului web sau să se informeze despre fiecare
transfer pe dispozitivul utilizatorului. La fel, și consimțământul exprimat cu privire la utilizarea
acestei tehnologii poate fi modificat sau anulat în orice moment (blocând salvarea cookie-urilor
în viitor).
De asemenea, este posibilă blocarea cookie-urilor de la terțe părți, cu acceptarea simultană a
"cookie-urilor" provenite direct de la administratorul site-ul eobuwie.pl S.A
Informații detaliate despre posibilitățile și modalitățile de manipulare a "cookie-urilor" sunt
disponibile în setările software (ale browser-ului web).
Limitarea utilizării "cookie-urilor" poate afecta unele dintre funcționalitățile disponibile pe site.
Rețineți că renunțarea la cookie-uri se va aplica numai unui anumit browser. Aceasta înseamnă
că aceleași acțiuni vor fi întreprinse pentru orice alt browser utilizat pe același sau pe alt
dispozitiv.
POLITICA DE CONFIDENȚIALITATE ȘI FIȘIERELE COOKIE ALE MAGAZINULUI ONLINE
Kontract
1. Cu ce document aveți de-a face?
Prezenta politică de confidențialitate a Magazinului Online și a Aplicației (denumită în
continuare "Politică") are caracter informativ, ceea ce înseamnă că nu reprezintă o sursă de
obligații pentru Clienții Magazinului Online și a Aplicației (nu este un contract sau regulament).
Informațiile conținute în Politică au un caracter general. Informații detaliate privind prelucrarea
datelor personale concrete sunt puse la dispoziție de fiecare dată în timpul procurării lor în
conținutul clauzei informative, plasate într-un loc vizibil și ușor accesibil. Aceasta se aplică în
special informațiilor privind scopul și temeiul juridic al procesării datelor cu caracter personal,
perioada de stocare a acestora și destinatarii cărora li se transferă.
Toate cuvintele, expresiile și abrevierile care apar pe această pagina și care încep cu o
majusculă (de ex. Vânzător, Magazin Online, Serviciu Electronic) trebuie înțelese în
conformitate cu definiția lor din Regulamentul Magazinului Online, disponibil în Magazinul
Online Kontract, inclusiv în Aplicație.
În cazul îndoielilor sau contradicțiilor dintre Politică și consimțământul acordat de o anumită
persoană, indiferent de prevederile Politicii, întotdeauna baza pentru a întreprinde și a
determina de către Administrator un domeniu de activitate, sunt acordurile voluntare sau
prevederile legii. În cazul unui astfel de conflict între Politică și conținutul clauzelor informative
furnizate de Administrator în cursul colectării datelor personale (de obicei sub formă de
formulare în Magazinul Online), informația pe care Clientul trebuie să o respecte, este cea
furnizată în cadrul clauzelor informative menționate mai sus.
2. Cine este Administratorul (Operatorul) datelor dvs?
Administratorul datelor personale colectate:
● prin intermediul Magazinului Online și al Aplicației (inclusiv folosind fișierele cookies sau
o tehnologie asemănătoare) sau al altor canale de comunicare cu Client;
● obținute pe baza activității Clientului în Internet, în Aplicație sau în magazine staționare
aparținând adresa de e-mail: ionitavlad17@stud.ase.ro - denumită în continuare ”Administrator”
și fiind în același timp și Vânzătorul. De asemenea puteți lua legătura și cu inspectorul
nostru pentru protecția datelor cu caracter personal: ionitavlad17@stud.ase.ro.
Inspectorul responsabil cu Protecția Datelor Personale în cadrul firmei eobuwie.pl S.A
este Natalia Batorska.
De asemenea puteți lua legătura și cu inspectorul nostru pentru protecția datelor cu
caracter personal: ionitavlad17@stud.ase.ro.
La datele de contact de mai sus, puteți lua legătură, de asemenea, cu inspectorul pentru
protecția datelor.
În cazul acordului dvs. suplimentar, administratorii datelor obținute pe baza activității dvs. pe
Internet utilizând tehnologii precum cookie-uri pot fi, de asemenea, partenerii noștri (menționați
mai jos la punctul 15).
3. Cum avem grijă de protejarea datelor dvs?
Datele personale ale Clientului sunt prelucrate în conformitate cu Regulamentul Parlamentului
European și al Consiliului (UE) 2016/679 din 27 aprilie 2016. despre protecția persoanelor fizice privind
prelucrarea datelor cu caracter personal și libera circulație a acestor date, precum și abrogarea
Directivei 95/46/CE (Jurn.Oficial UE.L Nr. 119, pag. 1) (denumit în continuare "GDPR") și alte
prevederile ale legii privind protecția datelor cu caracter personal, aplicabile în prezent adică pe întreaga
perioadă de prelucrare a datelor specificate. Datele personale înseamnă informații cu ajutorul cărora o
persoană fizică poate fi identificată sau identificabilă (denumite în continuare "Datele Personale").
O persoană fizică identificabilă este o persoană care poate fi identificată în mod direct sau indirect, în
special pe baza unui identificator, cum ar fi numele și prenumele, numărul de identificare, datele de
localizare, ID-ul de Internet sau unul sau mai mulți factori specifici.
Administratorul acordă o atenție specială pentru a proteja interesele persoanelor la care se referă
datele, și, în special, asigură că datele colectate de acesta sunt:
- prelucrate în conformitate cu legea, în mod echitabil și transparent pentru persoana vizată;
- colectate în scopuri concrete, explicite și legitime și nu sunt prelucrate în continuare într-un mod
incompatibil cu aceste scopuri;
- adecvate, relevante și limitate la ceea ce este necesar pentru scopurile pentru care sunt procesate;
- corecte și actualizate, dacă necesar;
- păstrate într-o formă care să permită identificarea persoanei vizate nu mai mult decât este necesar
pentru scopurile pentru care datele sunt prelucrate;
- prelucrate într-un mod care să asigure o securitate adecvată a Datelor Personale, inclusiv protecția
împotriva prelucrării neautorizate sau ilegale și a pierderii accidentale, a distrugerii sau deteriorării, cu
ajutorul măsurilor tehnice sau organizatorice corespunzătoare.
Informațiile pe care le prelucram: Datele dvs. nume, prenume și adresa de email ajung în posesia
noastră când un Client se înregistrează pentru un cont de utilizator. Nu colectăm date personale despre
vizitatorii și utilizatorii site-ului dacă aceștia nu înregistrează un cont. De asemenea datele stocate nu
sunt puse la dispoziția altor destinatari. Este posibil să colectăm date care nu au caracter personal
referitoare la teritoriul din care s-a făcut vizita pe site, durata vizitei și paginile accesate. Aceste date
fără caracter personal sunt utilizate în scopuri interne de marketing. Pentru detalii vă rugăm să
consultați Politica Cookie existenta la art. 6.
Identificarea si autentificarea clientului: Prin client se înțelege orice persoană care și-a creat un
cont. Pentru a crea un cont, clientul trebuie să introducă într-un formular numele, prenumele și adresa
de e-mail. După crearea contului identificarea se face prin introducerea parolei (un șir de caractere) de
la tastatură. Doi utilizatori nu pot avea aceeași parolă. Conturile neutilizate o perioada îndelungată pot
fi dezactivate. După dezactivarea contului este posibil ca datele personale să fie stocate un timp
rezonabil în scopuri de audit. Dacă un client observă dezactivarea și transmite un email pentru
ștergerea datelor personale acestea vor fi șterse. Parolele vor fi schimbate în mod periodic de către
client dacă politica de securitate o impune. Clientul care refuză schimbarea parolei nu va putea accesa
contul.
Scopul prelucrării datelor personale: Vom folosi datele personale pentru a oferi Clientului produsele
descrise pe site, pentru a vă facilita și procesa plățile, pentru a facilita o comandă viitoare, pentru a
răspunde la reclamațiile Clientului și pentru a informa Clientului despre modificările de securitate.
Scopul colectării va varia în funcție de nevoile fiecărui client și de marketing. Clienții care și-au exprimat
consimțământul vor putea primi newsletter cu privire la promoții sau reduceri de preț sau știri
operaționale. Deci, scopul prelucrării datelor personale va fi stabilit în mod cert de către client. Clientul
care a optat inițial pentru transmiterea de newslettere și ulterior nu mai dorește să primească mesaje
poate dezactiva sau modifica preferințele inițiale accesând setările contului.
Stocarea Datelor Personale. Inițial datele personale sunt prelucrate automat și stocate într-un fișier
general la care accesul se realizează pe bază de parolă doar de administratorul companiei. Parolele
sunt cunoscute doar de administratorul societății. Datele menționate în fișierul de acces sunt păstrate
2 ani pentru a fi folosite ca probe în cazul unor investigații și vor fi șterse la solicitarea clientului. Când
volumul datelor stocate va impune executarea copiilor de siguranță clientul va fi informat imediat.
Clientul este responsabil pentru păstrarea secretului parolei de acces în contul unic. Clientul înțelege
că dacă încredințează cuiva parola contului său, acea persoană are acces și la datele sale personale.
După cum s-a arătat la început, realizând cât de importantă este viața privată a Clienților,
Administratorul protejează nu numai persoanele care vizitează Magazinul Online sau folosesc Aplicații,
dar, de asemenea, Clienții care au pus la dispoziția Administratorului Datele sale Personale cu utilizarea
altor canale de comunicare, și anume.:
a. site-ul https://www.facebook.com și orice alte site-uri marcate sau co-marcate cu firma Facebook
(inclusiv subdomeniile, versiuni internaționale, widget-uri, și versiuni pentru telefoane mobile) ale căror
principii de funcționare se bazează pe reglementările disponibile, în special, la adresa
https://www.facebook.com/legal/terms, furnizate de Facebook Inc., sau, respectiv, de Facebook Ireland
Limited (în continuare "Service Facebook"), inclusiv prin intermediul funcției Facebook Lead Ads, care
vizează marketingul direct al produselor sau serviciilor proprii ale Administratorului. Regulile pentru
protecția și utilizarea Datelor Personale de către Serviciul Facebook sunt disponibile, de exemplu, pe
site-ul: https://www.facebook.com/policy.php. Administratorul nu are nicio influență asupra conținutului
reglementărilor legale ale site-ului Facebook, inclusiv celor care se referă la Datele Personale.
b. aplicații care permit Administratorului să realizeze campanii publicitare, inclusiv concursuri, în cadrul
site-ul Facebook.
4. În ce scopuri sunt utilizate informațiile despre dvs?
De fiecare dată, scopul și domeniul datelor prelucrate de Administrator rezultă din consimțământul
Clientului, din contract sau din lege, iar datele sunt precizate suplimentar ca urmare a acțiunilor
întreprinse de Client în Magazinul Online sau pe alte canale de comunicare cu Clientul. De exemplu:
(I) Datele Personale ale Clientului pot fi procesate pentru a-i acorda, prezenta sau oferi oferte și promoții
dedicate pentru el, pe cât posibil adaptate preferințelor sale (care ar putea produce un impact esențial
asupra lui), numai dacă Clientul și-a dat consimțământul (datele nu sunt disponibile persoanelor care
nu și-au dat acest consimțământ); (II) dacă Clientul nu decide să cumpere prin intermediul Magazinului
Online, ci va efectua prin intermediul acestuia numai o Rezervare a Produselor selectate, Datele sale 
Personale nu vor fi puse la dispoziția transportatorului care efectuează expedieri la comanda
Administratorului.
Scopurile preluării Datelor Personale ale Clienților de către Administrator, sunt:
a. încheierea și realizarea Contractului de Prestare a Serviciilor (Cont) sau luarea de măsuri la cererea
viitorului Client înainte de încheierea Contractului (datele dvs. sunt procesate în scopul de a vă
administra Contul pentru a vă putea bucura de avantajele pe care acest Cont le oferă, de exemplu,
plasarea comenzilor fără a fi nevoie să completați de fiecare dată formulare, acces la istoricul
cumpărăturilor, gestionarea consimțământurilor dvs. pe site etc., permițându-vă să beneficiați de alte
servicii disponibile pe site-ul nostru);
b. încheierea și realizarea Contractului de Vânzare sau a Rezervării sau luarea de măsuri la cererea
viitorului Client înainte de încheierea Contractului (Datele dvs. Personale ne sunt necesare pentru
realizarea comenzii dvs. și pentru îndeplinirea contractului încheiat - în special confirmarea depunerii
comenzii și rezervarea sau trimiterea produsului selectat către dvs., precum și dacă este necesar,
contactarea dvs. în această chestiune);
c. acceptarea și examinarea reclamațiilor;
d. desfășurarea concursului, în special selectarea câștigătorilor concursului și acordarea premiilor;
e. prezentarea de reclame, oferte sau promoții (reduceri) privind produsele sau serviciile
Administratorului și ale partenerilor ( lista actuală este disponibilă în cadrul pagina magazinului) săi
destinate tuturor consumatorilor, în special pentru realizarea acordului de furnizare a Newsletter-ului;
f. evaluarea și analiza activității și a informației despre Client, inclusiv în cadrul prelucrării automate a
Datelor cu Caracter Personal (profilare), în scopul de a prezenta reclame generale, oferte sau
promoții (reduceri), privind produsele sau serviciile Administratorul și ale partenerilor săi, într-un mod
adaptat intereselor Clientului respectiv (dar care nu afectează în mod semnificativ deciziile sale), în
special, în vederea realizării acordului de furnizare a Newsletter-ului și a analizelor de piață și a celor
statistice;
g. urmărirea reclamațiilor și apărarea împotriva revendicărilor, inclusiv din partea terților - dacă utilizați
majoritatea funcționalităților Magazinului Online și a Aplicației;
h. îndeplinirea obligațiilor legale care decurg din reglementări, de exemplu, fiscale și contabile, în
special în cazul contractelor plătibile;
i. corespondenta cu Clienții, inclusiv acordarea răspunsurilor la mesajele Clienților.
În cazul unui Client major, cu acordul său suplimentar, Datele Personale pot fi, de asemenea, prelucrate
pentru a prezenta, a crea, a acorda și a realiza reclamele, ofertele sau promoțiile (reducerile) care se
referă la produsele sau serviciile Administratorului și partenerilor săi, dedicate
Clientului respectiv, adaptate la preferințele sale (profilare), ca rezultat al luării deciziilor automate, care
pot produce efecte juridice sau pot avea un impact esențial asupra acestuia, de exemplu printr-o
reducere pe termen scurt pentru un anumit produs recent vizualizat, acordată exclusiv unei asemenea
persoane (opțiunea nu este disponibilă pentru persoanele care nu sunt majore sau care sunt majore,
dar care nu au acceptat acest lucru).
5. Ce informații despre dvs. folosim?
Administratorul poate prelucra, în special, următoarele Date Personale ale Clienților:
a. privind cei care utilizează Magazinul Online sau Aplicație:
● Datele Personale indicate în formularul completat la înregistrarea Contului, plasarea
Comenzilor sau efectuarea Rezervării în Magazinul Online (în special, numele și prenumele;
adresa poștei electronice, numărul telefonului de contact, adresa (stradă, numărul străzii, cod
poștal, localitate, țară), adresa de domiciliu/desfășurarea activității/sediul (dacă este altă decât
adresa de livrare), nr.contului bancar, iar în cazul Clienților neconsumatori, în plus, denumirea
companiei și codul de identificare fiscală (CIF) și alte date colectate în cursul utilizării
Magazinului Onlinew sau a Aplicației.
● Datele Personale furnizate pentru a utiliza Newsletter-ul, furnizate în timpul utilizării formularului
de contact sau cele transmise la depunerea reclamației;
● Datele Personale indicate pentru a participa la concursuri;
● alte date, în special cele obținute pe baza activității Clientului pe Internet, în aplicațiile mobile
sau în magazinele staționare aparținând companiei eobuwie.pl S.A., inclusiv cele obținute prin
intermediul Magazinului Online, al Aplicației sau al altor canale de comunicare cu Clientul,
utilizând cookie-uri și tehnologii similare,
b. completând datele conținute în formularul Facebook Lead Ads, Utilizatorul transmite
Administratorului, de fiecare dată, Datele Personale indicate în formular, care pot include în special:
numele, prenumele, adresa de e-mail, numărul de telefon;
c. completând datele conținute în formularele de înscriere care permit Administratorului să efectueze
campanii publicitare/concursuri în cadrul site-ului Facebook, Utilizatorul transmite Administratorului, de
fiecare dată, Datele Personale indicate în formular, care pot include în special: numele, prenumele,
adresa de corespondență, adresa de e-mail, numărul de telefon, numărul la pantofi.
6. Dacă sunteți obligat să ne furnizați datele dvs. și care sunt posibilele consecințe ale
nefurnizării de date?
Comunicarea Datelor Personale de către Client în Magazinul Online este voluntară, însă este
necesară pentru a beneficia de anumite funcționalități ale magazinului nostru, de exemplu, pentru
plasarea de către Client a unei Comenzi și decontarea ei (încheierea și realizarea Contractului de
Vânzare), înregistrarea unui Cont sau efectuarea unei Rezervări (încheierea și realizarea
Contractului de Prestare a Serviciilor), abonarea la newsletter sau utilizarea formularelor noastre.
De fiecare dată, domeniul de date necesare pentru a încheia un contract corespunzător, este indicat
anterior în Magazinul Online (marcăm datele, a căror furnizare este necesară pentru a încheia un
contract/a utiliza anumite funcționalități), în cadrul altor canale de comunicare cu Clientul sau în
Regulament. Consecința nefurnizării Datelor Personale poate fi incapacitatea de a efectua în mod
eficient operațiile menționate mai sus.
.
7. Care este temeiul legal pe baza căruia folosim informațiile despre dvs?
Motivul procesării Datelor Personale ale Clientului este în primul rând necesitatea de a îndeplini
contractul la care este parte sau necesitatea de a lua măsuri la cererea acestuia înainte de
încheierea Contractului (art.6 alin.1 litera b) a GDPR). Aceasta se aplică în principal Datelor cu
Caracter Personal indicate în formular completat la înregistrarea unui Cont, plasarea Comenzilor și
încheierea unui Contract de Vânzare sau efectuarea unei Rezervării în Magazinul Online, precum
și când vă abonați la newsletter. De asemenea, în cazul Datelor Personale furnizate în legătură cu
reclamația Clientului, baza legală pentru prelucrarea acestora este necesitatea de a executa/asista
contractul de vânzare a bunurilor reclamate.
În cazul operațiunilor de prelucrare a datelor pentru scopurile de marketing menționate, cu excepția
celor care sunt realizate în cadrul newsletter-ului, care funcționează conform unui regulament, baza
pentru o astfel de prelucrare este îndeplinirea obiectivelor care decurg din interesele justificate legal,
realizate de Administrator sau de partenerii săi (art.6 alin.1 lit.f) din GDPR). Pe de alta parte,
prezentarea, crearea, atribuirea și realizarea anunțurilor, ofertelor sau promoțiilor (reduceri) dedicate
unui anumit Client, care se bazează exclusiv pe prelucrarea automată, inclusiv profilarea, adaptată,
în măsura posibilului, preferințelor acestuia, se bazează pe un consimțământ voluntar al Clientului
(art.6 alin.1 lit.a) din GDPR). Totuși, acest lucru se aplică numai Clienților majori.
În celelalte (alte) scopuri, Datele Personale ale Clientului pot fi procesate pe baza:
a. consimțământului exprimat voluntar - de exemplu, din partea persoanelor care participă
la concursuri (art.6 alin.1 lit.a) din GDPR);
b. legislației aplicabile - atunci când prelucrarea este necesară pentru îndeplinirea obligației
legale a Administratorului, de exemplu atunci când, pe baza reglementărilor fiscale sau
contabile, Administratorul decontează contractele de vânzare încheiate (art.6 alin.1 lit.c) din
GDPR);
c. scopurilor indispensabile, altor decât cele menționate mai sus, care rezultă din interesele
legitime urmărite de Administrator sau de o terță parte, în special pentru a determina,
pretinde sau apăra revendicări, să efectueze corespondența cu Clienții, inclusiv prin
intermediul formularelor de contact (inclusiv acordarea răspunsurilor la mesajele Clienților),
a analizelor de piață și a celor statistice (art.6 alin.1 lit.f) din GDPR);
8. Dacă datele dvs. sunt supuse profilării și ce înseamnă acest lucru pentru dvs.?
Administratorul, în scopul prezentării reclamelor generale, a ofertelor sau promoțiilor (reduceri),
destinate tuturor Clienților, într-un mod adaptat intereselor unui Client dat, își poate citi preferințele
acestuia, de exemplu, analizând cât de des vizitează Magazinul Online și dacă și ce produse
cumpără sau rezervă în magazinele staționare deținute de compania eobuwie.pl S.A. Acest lucru
permite o mai bună înțelegere a așteptărilor Clientului și adaptarea la nevoile acestuia, dar nu
influențează în mod semnificativ deciziile acestuia. Datorită utilizării tehnologiilor avansate de către
Administrator, activitățile de mai sus vor fi deseori efectuate de sistem într-un mod automat, datorită
căruia conținutul trimis va fi cel mai recent și Clientul va putea să se familiarizeze rapid cu acesta.
În cazul clienților majori, analiza intereselor sau preferințelor, menționată, va fi utilizată, de
asemenea, pentru a crea, a acorda, a realiza, în cel mai bun mod posibil, reclame, oferte sau
promoții (reduceri) dedicate, într-un mod automat care poate avea efecte juridice sau să-l afecteze
într-un mod asemănător, putând limita accesul la ele pentru alți Clienți (această opțiune nu este
disponibilă pentru Clienții care nu sunt majori sau nu au acceptat astfel de acțiuni ale
Administratorului). Cu cât mai des Clientul respectiv folosește serviciile Administratorului și
achiziționează produsele sale, cu atât mai bune pot fi pregătite promoții și surprize pentru el.
De asemenea, Administratorul poate procesa informații despre preferințele Clientului, care pot avea
uneori natura Datelor Personale și care au fost acordate în mod voluntar Administratorului de către
Client prin funcționalitatea Aplicației, inclusiv pentru a limita Produsele sau Promoțiile prezentate la
o anumită dimensiune (de exemplu mărimea încălțămintei) sau la anumite categorii (de exemplu,
Produse pentru bărbați/femei/copii).
9. Dacă folosind aplicația noastră permiteți accesul în spațiul de ex. al telefonului dvs?
Pentru a activa funcționalitățile Aplicației care constau în scanarea și salvarea codurilor de bare
ale Produselor, în prezentarea Produselor pe baza imaginilor încărcate de Client, salvarea
informațiilor care permit funcționarea Aplicației în regimul off-line, căutarea prin localizarea
geografică a unui magazin staționar al Vânzătorului sau a unui punct anumit de preluare a
coletului expediat, Administratorul poate obține, inclusiv cu acordul Clientului, accesul la
următoarele funcții ale dispozitivului mobil al Clientului:
a. camera foto;
b. memoria dispozitivului;
c. localizarea geografică.
10. La cine putem transmite datele dvs?
De fiecare dată catalogul destinatarilor Datelor cu Caracter Personal prelucrate de Administrator
rezultă în primul rând din domeniul serviciilor utilizate de Client.
Catalogul destinatarilor de Date este, de asemenea, rezultatul consimțământului Clientului sau
rezultă din lege și este precizat suplimentar ca urmare a acțiunilor întreprinse de către acesta în
Magazinul Online sau în Aplicație.
În procesul de prelucrare a Datelor Personale, partenerii Administratorului pot participa într-o
măsură limitată, în special cei care ajută tehnic să conducă eficient Magazinul Online sau Aplicația,
inclusiv comunicarea cu Clienții noștri (de exemplu, ne sprijină în trimiterea de e-mailuri, iar în cazul
acțiunilor publicitare - de asemena, în campanii de marketing), furnizori de servicii de hosting sau
servicii teleinformatice, transportatori sau agenți care realizează expedieri de Comenzi, entități care
deservesc plăți electronice sau prin carduri de plată în Magazinul Online, companii care furnizează
servicii software, susțin Administratorul în campanii de marketing, precum și furnizori de servicii
juridice și de consultanță .
Pe baza principiilor de mai sus, Datele Personale ale Clientului pot fi transmise, de asemenea, către
companii din Grupul eobuwie.pl, indicate la punctul 20 de mai jos.
În cadrul activității de marketing (publicitate), Administratorul beneficiază de serviciile unor terțe părți
care utilizează fișierele cookie în Magazinul Online/Aplicație. Catalogul acestor entități este indicat
în detaliu în punctele următoare ale prezentei Politici.
11. Dacă datele dvs. sunt transmise, de asemenea, în țări terțe (în afară Spațiului Economic
European)?
În cadrul utilizării de către Administratorul a instrumentelor care sprijină activitățile sale curente,
furnizate de ex. de compania Google, Datele Personale ale Clientului pot fi transmise către una din
țări din afara Spațiului Economic European, în special în Statele Unite ale Americii (SUA) sau orice
altă țară în care entitatea colaboratoare cu Administrator ține instrumentele pentru prelucrarea
Datelor Personale.
Securitatea adecvată a Datelor cu Caracter Personal furnizate a fost asigurată de Administrator prin
utilizarea clauzelor standard de protecție a datelor adoptate în temeiul deciziei Comisiei Europene
și a acordurilor de încredințare a datelor pentru procesare care îndeplinesc cerințele GDPR. În cazul
transferului de date din Europa în SUA, anumite entități situate acolo pot oferi în plus un nivel
corespunzător de protecție a datelor în cadrul așa-numitului program Privacy Shield (mai multe
informații sunt disponibile la: https://www.privacyshield.gov/).
Contactându-ne, Clientul are dreptul să obțină o copie a Datelor Personale transmise într-o țără
terță.
12. Ce drepturi aveți?
În orice moment, fiecare client are dreptul la:
● depunerea unei plângeri la Președintele Oficiului pentru Protecția Datelor cu Caracter
Personal;
● transferul de Date cu Caracter Personal, furnizate Administratorului și care sunt prelucrate întrun mod automat, iar prelucrarea se desfășoară pe baza consimțământului sau a unui contract,
de exemplu, către un alt administrator.
● accesul la Datele Personale (inclusiv, de exemplu, primirea informației care din Datele
Personale sunt prelucrate);
● cerere de rectificare și limitare a prelucrării (de exemplu, dacă Datele Personale sunt incorecte)
sau ștergerea Datelor Personale (de exemplu, dacă au fost procesate ilegal);
● retragerea oricărui consimțământ acordat Administratorului în orice moment, însă retragerea
consimțământului nu afectează procesarea efectuată de Administrator în conformitate cu legea
înainte de retragerea acestuia.
● ridicarea obiecțiunilor față de prelucrarea Datelor cu Caracter Personal care îl privesc,
efectuată în scopul realizării intereselor legitime ale Administratorului sau a unui terț, în special
față de prelucrarea în scopuri de marketing, inclusiv profilare (în cazul în care nu există niciun
motiv important și justificat legal pentru procesare, superior intereselor Clientului).
13. Pe ce perioada vom stoca datele dvs?
Datele Personale pot fi stocate pe perioada de utilizare a Magazinului Online (dar pot fi șterse la trei
ani de la ultima activitate a Clientului în cadrul Magazinului Online), în cazul acțiunilor de marketing
- până când Clientul ridică obiecții, iar în cazul în care datele sunt legate de cookie și tehnologii
asemănătoare, în funcție de problemele tehnice, până la ștergerea acestor fișiere folosind setările
browser-ului/dispozitivului (totuși, ștergerea fișierelor nu echivalează întotdeauna cu ștergerea
Datelor Personale obținute prin aceste fișiere, de aceea, posibilitatea de contestare).
Dacă prelucrarea Datelor Personale depinde de consimțământul Clientului, Datele Personale pot fi
procesate până la retragerea acordului.
În fiecare caz:
a. De asemenea, Datele cu Caracter Personal vor fi stocate și atunci când legea (de ex.
reglementările contabile sau fiscale) va obliga pe Administratorul să le proceseze;
b. Vom păstra Datele cu Caracter Personal mai mult timp în cazul în care Clientul ar avea
vreo reclamație împotriva Administratorului, pentru a revendica pretenții din partea
Administratorului, sau pentru a revendica sau a se apăra împotriva pretențiilor unor terți, în
timpul perioadei de prescripție a acestora, definite de lege, în special de Codul Civil.
Așadar, în funcție de domeniul Datelor Personale și de scopurile prelucrării acestora, acestea pot fi
stocate pentru o perioadă diferită.
În fiecare caz, perioadă mai lungă de stocare a Datelor Personale este decisivă.
14. Veți primi informațiile comerciale (de ex. la adresa dvs. de e-mail)?
Administratorul are capacitatea tehnică de a comunica cu Clientul de la distanță (de exemplu, prin email).
Informațiile comerciale legate cu activitatea comercială a Administratorului sau a entităților care
colaborează cu acesta (inclusiv entitățile din Grupul eobuwie.pl), pot fi trimise numai pe baza
consimțământului exprimat de Client, inclusiv după acceptarea regulamentului serviciului de newsletter.
15. Fișierele ”cookie”
a) La cine se referă fișierele ”cookies”?
Datorită faptului că tehnologia cookie utilizată de Administrator (sau alta tehnologie cu funcția apropiată
cookie-urilor) colectează informații despre fiecare persoană care vizitează Magazinul Online, inclusiv
în cadrul Aplicației, următoarele prevederi ale Politicii se aplică persoanelor care utilizează Magazinul
Online și Aplicația, indiferent dacă aceștia rămân Clienții săi (plasează Comenzi, rezervă Produse sau
au un Cont) (denumiți în continuare "Vizitator").
b) Ce tehnologie utilizăm?
Magazinul Online utilizează tehnologia care stochează și obține accesul la informații pe un computer
sau pe alt dispozitiv conectat la rețea (în special prin utilizarea cookie-urilor sau a soluțiilor conexe),
pentru a asigura maximum de confort atunci când utilizează Magazinul Online, inclusiv în scopuri
statistice și pentru adaptarea interesului Vizitatorului a conținutului publicitar prezentat de Administrator,
partenerii săi și agenții de publicitate. În timpul vizitei la Magazinul Online, inclusiv în cadrul Aplicației,
datele privind activitatea în Internet a Vizitatorului pot fi colectate în mod automat.
Datorită faptului că Administratorul poate utiliza soluții cu funcționalitate apropiată cookie-urilor,
următoarele prevederi ale Politicii pot fi aplicate în mod corespunzător și pentru aceste tehnologii.
c) Ce sunt fișierele ”cookies”?
Un fișier cookie reprezintă mici informații de text, trimise de către server și salvate pe partea
dispozitivului Vizitatorului (de obicei, pe hard disk-ul computerului sau pe dispozitivul mobil). Sunt
stocate acolo informațiile de care Magazinul Online ar putea să aibă nevoie pentru a se adapta la
modalitățile de utilizare a Magazinului de către un Vizitator, și pentru a colecta date statistice privind
Magazinul Online, inclusiv Aplicație (de exemplu, ce pagini au fost vizitate, ce elemente sunt
descărcate) și date despre numele domeniului furnizorului de servicii de internet sau despre țara de
origine a Vizitatorului. Tehnologia de stocare și accesare la identificatorul Vizitatorului permite
funcționarea Aplicației în regimul off-line și salvarea preferințelor unui Vizitator care nu s-a logat.
Aplicația păstrează ID-ul curent al Vizitatorului până când acesta se va loga la Aplicație, sau până la
modificarea site-ului Aplicației pe un Magazin Online care operează într-o altă țară sau până la
dezinstalarea (ștergerea) Aplicației de pe dispozitivul mobil.
d) Dacă fișierele ”cookies” colectează datele dvs. personale?
Când Vizitatorul folosește Magazinul Online sau Aplicația, cookie-urile sunt utilizate pentru a identifica
browser-ul sau dispozitivul acestuia - cookie-urile colectează tot felul de informații care, în principiu, nu
constituie date personale (nu permit identificarea Vizitatorului). Unele informații, în funcție de conținutul
și modul de utilizare a acestora, pot totuși să fie asociate cu o anumită persoană - atribuirea anumitor
comportamente unui anumit Vizitator, de exemplu prin asocierea acestora cu datele furnizate în timpul
înregistrării unui Cont în Magazinul Online - și, prin urmare, pot fi considerate drept date personale.
În ceea ce privește informațiile colectate prin fișierele cookie care pot fi asociate cu o anumită persoană,
se aplică dispozițiile din Politica referitoare la Datele cu Caracter Personal, în special în ceea ce privește
drepturile persoanei la care se referă datele respective. Informațiile despre informațiile colectate prin
cookie-uri sunt, de asemenea, disponibile, printre altele în conținutul clauzei informative plasate într-un
loc vizibil și ușor accesibil în timpul primei vizite la Magazinul Online.
e) Care este baza legală pentru folosirea fișierelor ”cookies”
Obținerea și stocarea informațiilor folosind cookie-urile este posibilă pe baza consimțământului
Vizitatorului. Ca standard, browser-ele sau un alt software instalat pe computer sau alt dispozitiv
conectat la rețea, în mod implicit permit plasarea de cookie-uri pe un asemenea dispozitiv, și, astfel,
colectarea informațiilor despre Vizitatori. În setările browser-ului web, consimțământul exprimat cu
privire la utilizarea tehnologiei cookie poate fi modificat sau retras în orice moment. Retragerea
consimțământului nu afectează conformitatea cu legalitatea prelucrării, care a fost realizată pe baza
consimțământului acordat înainte de retragerea sa (detalii cu privire la modul de a retrage
consimțământul, sunt prezentate în următoarele punctele ale prezentei Politici). Baza de prelucrare a
datelor astfel obținute este un interes legitim al Administratorului, care constă în necesitatea de a
asigura cel mai calitativ conținut prezentat de Administrator prin adaptarea acestuia la preferințele
Vizitatorilor, precum și marketing - inclusiv direct - al produselor si serviciilor ale Administratorului.
f) Pentru ce folosim fișierele ”cookies”?
Cookie-urile utilizate, în primul rând, sunt menite pentru a facilita Vizitatorului utilizarea Magazinului
Online și a Aplicației, de exemplu prin "memorarea" informațiilor oferite o singură dată, astfel încât
acesta nu trebuie să le furnizeze de fiecare dată, precum și pentru a adapta conținutul lor, inclusiv
reclamele prezentate, la preferințele Vizitatorului. Cookie-urile sunt, de asemenea, utilizate pentru a
spori gradul de utilizare și personalizare a conținutului Magazinului Online și a Aplicației, inclusiv
prezentarea, crearea, atribuirea și realizarea reclamelor, ofertelor sau promoțiilor (reduceri) dedicate
unui anumit Vizitator în conformitate cu interesele acestuia (se aplică numai atunci când persoana este
majoră și a exprimat consimțământul pentru asemenea acțiune).
Folosind tehnologia cookie-urilor aplicată în Magazinul Online, există posibilitatea ca Administratorul să
cunoască preferințele Vizitatorului - de exemplu, analizând cât de des vizitează Magazinul Online și
dacă și ce produse cumpără în magazinele staționare care aparțin companiei eobuwie.pl. Analiza
comportamentului online ajută la înțelegerea mai bună a obiceiurilor și așteptărilor Vizitatorilor și la
adaptarea la nevoile și interesele acestora. Datorită acestei tehnologii, este posibilă prezentarea
Vizitatorilor a anunțurilor publicitare potrivite nevoilor și intereselor lor (de exemplu, reclama rezultată 
din vizualizarea recentă numai a categoriei "pantofi") și pregătirea pentru Vizitatorii majori care și-au
exprimat consimțământul, a unor promoții mai bune și a unor surprize.
Pe baza cookie-urilor, Administratorul folosește, de asemenea, tehnologia care permite transmiterea
mesajelor publicitare Vizitatorilor care mai înainte au vizitat Magazinul Online sau Aplicația și care
utilizează alte site-uri web.
g) Vă puteți opune folosirii informațiilor provenite din fișierele "cookies"?
Vizitatorul se poate opune acțiunilor Administratorului întreprinse în scopul descris mai sus. În cazul în
care Vizitatorul acceptă prezentarea, crearea, atribuirea și realizarea reclamelor, ofertelor sau
promoțiilor (reduceri) adaptate preferințelor sale, consimțământul acestuia poate fi retras în orice
moment - dar acest lucru nu va afecta legalitatea prelucrării care a fost efectuată pe baza
consimțământului înainte de retragerea acestuia.
h) Ce fel de fișiere "cookies" sunt folosite de noi și dacă sunt dăunătoare?
Cookie-urile utilizate în Magazinul Online nu sunt dăunătoare pentru Vizitator sau
computerul/dispozitivul terminal folosit de acesta, prin urmare recomandăm să nu le deconectați în
browsere. Magazinul Online utilizează două tipuri de fișiere cookie: cookie-urile de sesiune care rămân
stocate pe computerul sau pe dispozitivul mobil al Vizitatorului până când părăsiți site-ul sau dezactivați
software-ul (browserul web), și cookie-urile permanente, care rămân pe dispozitivul Vizitatorului pentru
timpul specificat în parametrii fișierelor cookie sau până când acestea vor fi eliminate manual într-un
browser web.
i) Cât timp vor fi stocate informațiile colectate de fișierele "cookies"?
Depinzând în principal de scopurile și temeiurile legale de prelucrarea Datelor cu Caracter Personal
colectate prin cookie-uri, acestea pot fi stocate pentru perioada indicată la punctul 13 al Politici.
Datele Personale colectate de fișierele cookie care se referă la un Vizitator care nu este un Client, vor
fi păstrate până la depunerea opoziției. Administratorul poate șterge Datele Personale dacă acestea nu
sunt utilizate în scopuri de marketing timp de 3 ani, cu excepția cazului în care legea îl va obliga pe
Administrator să proceseze Datele Personale mai mult timp.
O parte din Datele Personale poate fi stocată mai mult timp în cazul în care Vizitatorul ar avea vreo
reclamație împotriva Administratorului, pentru a revendica pretenții din partea Administratorului, sau
pentru a revendica sau a se apăra împotriva pretențiilor unor terți, în timpul perioadei de prescripție a
acestora, definite de lege, în special de Codul Civil.
În orice caz, perioada mai lungă de stocare a datelor cu caracter personal este decisivă.
j) Fișierele cookies utilizate în Magazinul Online.
Tip Descriere Timpul de
expirare
PAGECACHE_ENV Necesar pentru a afișa Vizitatorului versiunea corectă a
paginii.
1 zi
frontend Stochează ID-ul sesiunii Vizitatorului în Magazinul Online. 1 zi
snowmessage Necesar pentru a afișa mesaje în magazin.
Cookie-ul conține data la care mesajul pentru Utilizator a
apărut în sistem. După setarea cookie-ului, browser-ul
Utilizatorului interoghează magazinul pentru conținutul
mesajelor și le afișează Utilizatorului.
Cookie-ul este șters după descărcarea mesajelor.
până la
închiderea
browser-ului
snow_cache_timestamp_[idmagazin]
Folosit pentru a verifica dacă datele din browser-ul
Vizitatorului trebuie să fie actualizate. Acest fișier cookie
stochează data de generare a detaliilor paginii, stocate de
browser-ul Vizitatorului (cum ar fi, de exemplu, Coșul de
cumpărături, link-uri referitoare la asistența Contului).
până la
închiderea
browser-ului
store Permite activarea versiunii corespunzătoare a Magazinului
Online.
până la
închiderea
browser-ului
cookies_accepted Creat atunci când citiți mesajul despre utilizarea cookie-urilor
de către site. Necesar pentru a ascunde mesajul pentru
Vizitatorii care au citit deja mesajul.
365 zile
userCountry Stochează informația despre țara Vizitatorului, obținută pe
baza locației adresei IP.
365 zile
geo_store_switch_popup[codțară]
Unde [cod-țară] este codul de țară care a fost preluat de la
adresa IP a utilizatorului. Cookie-ul determină dacă un popup a fost afișat cu sugestia de a schimba magazinul cu altul
corespunzător cu locația adresei IP a utilizatorului. Legat de
cookie-ul userCountry.
365 zile
ygc Conține un cod care identifică Vizitatorul în scopuri de
marketing.
365 zile
k) Fișiere cookie terță parte (third party cookies)
Cookie-urile folosite de Administrator sunt destinate în primul rând optimizării deservirii
Vizitatorului atunci când acesta folosește Magazinul Online sau Aplicația. Administratorul
colaborează, totuși, cu alte companii în domeniul activității lor de marketing (publicitate). Pentru
nevoile acestei cooperări, browser-ul sau un alt software instalat pe dispozitivul Vizitatorului,
salvează și cookie-urile provenite de la entitățile care desfășoară astfel de activitate de marketing.
Fișierele cookie trimise de aceste entități sunt menite să prezinte Vizitatorului numai aceste
anunțuri publicitare care corespund intereselor și nevoilor sale personale. În opinia
Administratorului, afișarea unei publicități personalizate pentru Vizitator este mai atractivă decât o
reclamă care nu are nicio legătură cu nevoile sale. Fără aceste fișiere, acest lucru nu ar fi posibil
deoarece tocmai companiile care colaborează cu Administratorul furnizează materiale publicitare
pentru Vizitatori.
În cadrul activității de marketing, Administratorul beneficiază de serviciile următoarelor entități care
utilizează fișiere cookie în Magazinul Online:
1.Criteo (Clientul poate afla mai multe despre cum să renunțe la publicitatea bazată pe
interese, de exemplu vizitând site-uri web:http://www.networkadvertising.org/choices/ sau
http://www.youronlinechoices.com/ )
2.Google AdWords
3.Google Analytics
4.Google TagManager
5.Google Dynamic Remarketing
6.DoubleClick
7.Awin
8.Convertiser
9.HotJar
10.Synerise
11.Tradedoubler
12.Facebook
13.Pingdom
14.RTB House
15.Opineo
16.Trustedshop
18.Heureka
19.Zopim
Mai multe informații despre fișierele cookie ale entităților menționate pot fi găsite în politicile lor
de confidențialitate.
l) Cum pot fi șterse/blocate fișierele „cookies”
Vizitatorul poate schimba modul în care fișierele cookie sunt utilizate de browser sau de Aplicație,
inclusiv să blocheze sau să șteargă acele care provin din Magazinul Online (și din alte site-uri
web). Pentru aceasta, trebuie modificate setările browserul-ului sau ale Aplicației. Metoda de
ștergere diferă în funcție de browser-ul utilizat. Informațiile despre modul de ștergere a fișierelor
cookie ar trebui să se afle în fila "Ajutor" a browser-ului selectat. Eliminarea cookie-urilor nu
echivalează cu ștergerea Datelor Personale de către Administratorul de Date Personale, obținute
prin intermediul fișierelor cookie.
De exemplu, în browser-ul Internet Explorer, fișierele cookie pot fi modificate de la nivelul:
Instrumente  Opțiuni Internet  Confidențialitate; în browser-ul Mozilla Firefox: Instrumente 
Opțiuni Confidențialitate; în timp ce în browser-ul Google Chrome: Setări  Afișați setări
avansate  Confidențialitate  Setări de conținut  Cookie-uri. Căile de acces pot varia în funcție
de versiunea de browser utilizată.
Informații detaliate privind gestionarea fișierelor cookie pe un telefon mobil sau pe alt dispozitiv
mobil pot fi găsite în manualul utilizatorului/instrucțiuni de utilizare pentru telefonul respectiv sau
dispozitivul mobil.
De asemenea, este posibilă blocarea fișierelor cookie ale unor terțe părți, cu acceptarea simultană
a cookie-urilor utilizate direct de către Administrator (opțiunea "blocați cookie-urile site-urilor
terțe").
m) Ce consecințe va avea ștergerea sau blocarea fișierelor ”cookies”?
Restricționarea utilizării cookie-urilor pe un anumit dispozitiv face imposibilă sau împiedică în mod
esențial utilizarea corectă a Magazinului Online, de exemplu, poate avea legătură cu incapacitatea
de a menține sesiunea de logare.
16. Cum ne puteți contacta?
În orice moment, puteți contacta Administratorul trimițând un mesaj prin poșta tradițională sau prin
poșta electronică la adresa Administratorului indicată în introducerea Politicii sau prin telefon la
numărul de telefon indicat în introducerea Politicii, precum și în cadrul site-ului Facebook.
Administratorul păstrează corespondența în scopuri statistice și pentru a reacționa cât mai bine și cât
mai rapid la solicitările care apar, precum și pentru a soluționa reclamațiile și deciziile luate pe baza
eventualelor semnalări privind intervențiile administrative în Contul indicat. Adresele și datele 
colectate în acest mod, nu vor fi utilizate pentru comunicare în alte scopuri decât soluționarea
solicitării.
În cazul contactului cu Administrator pentru a efectua acțiuni concrete (de exemplu, depunerea unei
plângeri utilizând formularul), Administratorul poate să se adreseze din nou persoanei respective să
furnizeze date, inclusiv Date Personale, de exemplu sub formă de nume, prenume, adresă de e-mail
etc., să își confirme identitatea și să faciliteze feedback-ul în problema anunțată pentru a efectua
intervenția solicitată. Furnizarea acestor date nu este obligatorie, însă poate fi necesară pentru
desfășurarea acțiunii sau obținerea informației care prezintă interes pentru persoana respectivă.
17. Cum protejăm datele dvs?
Administratorul, luând în considerare stadiul cunoștințelor tehnice, costul implementării și natura,
domeniul, contextul și scopurile prelucrării precum și riscul de a încălca drepturile sau libertățile
persoanelor fizice cu diferită probabilitate de apariție și gravitate a amenințării, aplică măsurile tehnice
și organizatorice adecvate pentru a asigura protecția Datelor cu Caracter Personal prelucrate,
corespunzătoare pentru riscuri și categorii de date protejate, în special, protejează datele împotriva
partajării lor persoanelor neautorizate, a preluării lor de o persoană neautorizată, a prelucrării lor cu
încălcarea legilor aplicabile precum și a schimbării, pierderii, deteriorării sau distrugerii. Dezvăluirea în
exterior a informațiilor cu privire la măsurile tehnice și organizatorice aplicate pentru protecția
prelucrării, poate submina eficacitatea acestora, ceea ce pune în pericol protecția adecvată a Datelor
cu Caracter Personal.
Administratorul pune la dispoziție, corespunzător, de exemplu, următoarele măsuri tehnice pentru a
preveni procurarea și modificarea de către persoane neautorizate a Datelor Personale trimise pe
calea electronică:
a. Securizarea setului de date împotriva accesului neautorizat.
b. Certificat SSL pe paginile Magazinului Online în care sunt furnizate Date Personale.
c. Criptarea datelor utilizate pentru a autoriza persoana care beneficiază de funcționalitatea
Magazinului Online.
d. Accesul la Cont doar după indicarea login-ului și parolei individuale.
18. Link-uri la alte site-uri de Internet
Magazinul Online poate conține link-uri către alte site-uri web. Administratorul vă recomandă să citiți
regulamentele și politicile de confidențialitate utilizate de alte site-uri web. Această politică se aplică
numai activităților indicate ale Administratorului.
19. Dacă această politica poate fi schimbată și cum veți afla acest lucru?
Administratorul poate modifica Politica în viitor pentru următoarele motive importante:
a. modificări ale dispozițiilor legale obligatorii, în special în ceea ce privește protecția Datelor
cu Caracter Personal, legea telecomunicațiilor, serviciile oferite pe cale electronică și
reglementarea drepturilor consumatorilor, care influențează drepturile și obligațiile
Administratorului sau drepturile și obligațiile persoanei la care se referă date;
b. dezvoltarea funcționalității sau Serviciilor Electronice, impusă de evoluția tehnologiei de
Internet, inclusiv aplicarea/implementarea de noi soluții tehnologice sau tehnice care
afectează domeniul de aplicare al Politicii.
De fiecare dată, Administratorul va insera pe site-ul Magazinului Online și în Aplicație
informații despre modificările în Politică. Odată cu fiecare schimbare, noua versiune a
Politicii va apărea cu o nouă dată.

21. De când este valabilă prezenta versiune a Politicii?
Prezenta versiune a Politicii este valabilă de la data de 27.06.2019.</p>

</div>
)

}
}
export default GDPR