let list_img1 = ["img/Group_1365.png", "img/Content_image.png", "img/Thumbnail.png", "img/Thumbnail-1.png"];
let list_img2 = ["img/atom_quickicon_deals.png", "img/atom_quickicon_ozen.png", "img/Tracé_39.png", "img/Tracé_25416.png"];
let list_img3 = ["img/SOS.png", "img/content.png", "img/atom_quickicon_paybill.png", "img/Tracé_39.png"]
let list_img4 = ["img/atom_secondaryicon_myservices.png", "img/atom_secondaryicon_mytickets.png"]
let list_img5 = ["img/atom_secondaryicon_faq.png", "img/atom_secondaryicon_bookspot.png", "img/atom_quickicon_parainnage.png"]

let list_balance1 = ["img/Balancei_Viewer.png", "img/My_recharge_balance.png"];
let list_balance2 = ["img/Illustration.png"];

let list_icon = ["img/container.png", "img/icon-button-1.png", "img/-button-2.png", "img/icon-button-3.png"];

let count = 0;

let h3l1 = ["Recharger", "Acheter un pass", "Transfert d'argent", "Paiement marchand"];
let h3l2 = ["Promotion", "O'zen", "Ma sim", "Live streaming"];
let h3l3 = ["SOS", "Transfert", "Facture Orange", "Gerer ma sim"];
let h3l4 = ["Mes services", "Tickets"];
let h3l5 = ["Assistance en ligne", "Trouver une agence", "Parrainage"];
function createSection1(list_img = [], h3l = [], list_balance = []){

  let section1 = document.createElement("section");
  let div = document.createElement("div");
  let div1 = document.createElement("div");

  section1.id = count+"section";
  div.className = count+"div";
  count++;
  div1.className = count+"div";

  let taille = list_img.length;
  let taille2 = list_balance.length;

  for (let i = 0; i < taille; i++) {

    let img = document.createElement("img");
    let img1 = document.createElement("img");
    let h3 = document.createElement("h3");
    let span = document.createElement("span")
    if (i < taille2){

      let p = document.createElement("p");

      img1.src = list_balance[i];
      p.appendChild(img1);
      div.appendChild(p);

    }

    let button = document.createElement("button");
    h3.innerHTML = h3l[i];
    img.src = list_img[i];
    button.appendChild(img);
    span.appendChild(button);
    span.appendChild(h3);
    div1.appendChild(span);
    // div1.appendChild(h3);

  }

  if(list_balance.length > 0){
    section1.appendChild(div);
  }
  section1.appendChild(div1);
  document.body.appendChild(section1);

}

createSection1(list_img1, h3l1, list_balance1);
createSection1(list_img2, h3l2, list_balance2);
createSection1(list_img3, h3l3);
createSection1(list_img4, h3l4);
createSection1(list_img5, h3l5);

