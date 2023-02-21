//Nombre caché
let NbrCache = Math.ceil(Math.random() * 100); //le nombre à deviner
let CptEssai = 0;
let message =
    [
        'Trop bas!',
        'Trop haut!',
        'Nope!',
        "Ah non :'( meilleure chance la prochaine fois!",
        'Bravo tu as réussi!'
    ];

$(document).ready(function () {

    ////////////////////////////////
    //fonction
    ///////////////////////////////

//fonction qui supprime les nbr plus petit
    function EnleverNombrePlusPetit() {
        for (let i = 0; i < Nombre; i++) {
            $("#" + i).hide(); //unexpected tokken à revoir
        }
    }

    //fonction qui supprime les nbr plus grand
    function EnleverNombrePlusGrand() {
        for (let i = Nombre; i < 100; i++) {
            $("#" + i).hide(); //unexpected tokken à revoir
        }
    }

    //Fonction qui affiche les messages selon si réussi à trouver nombre
    function AfficherMessage(reussi) {
        if (false) {
            $("#BarreMessage").css("background-color", "red");
            $("#BarreMessage").text(message[2]);


        }
        if (true) {
            $("#BarreMessage").css("background-color", "green");
            $("#BarreMessage").text(message[4]);
            $("#" + NbrCaché).css("background-color", "green");
        }
    }

    function AfficherEssai(){
        $("#EssaiPrecedent").append(" " + Nombre);
    }

    //////////////////////////////////////////
    //boucle code
    ////////////////////////////////////

//boucle pour les 10 essai



$("#submit").click(function (){

    //Lire le nombre
    //todo: Vérifier avec le prof sur pk erreur nan
    let Nombre = 56;
    //Nombre = parseInt($("#essai").val);

    //Afficher le nombre dans la liste des essai
    AfficherEssai();

    //Comparer le nbr ak le NbrCaché
    if (Nombre < NbrCache) {
        EnleverNombrePlusPetit();
        AfficherMessage(false);
        $("#Message").text(message[0]);

    } else if (Nombre > NbrCache) {
        EnleverNombrePlusGrand();
        AfficherMessage(false);
        $("#Message").text(message[1]);

    } else if
        (Nombre === NbrCache)
    {
        AfficherMessage(true);
    }
    ;

    //augmenter le cpt des essais
    CptEssai++;

    if(CptEssai > 10) {
        $("#BarreMessage").css("background-color", "red");
        $("#BarreMessage").text(message[3]);
    }
})






})//fin du ready




