document.addEventListener('DOMContentLoaded', function () {

    var analogie, valeurAnalogie, imageAnalogie, texteExplicatif; //je déclare les variables utiles en dehors de l'évènement keyup pour pouvoir les utiliser

    document.addEventListener('keyup', function (event) {
        analogie = document.querySelector('#analogie').value;
        valeurAnalogie = document.querySelector('#valeurAnalogie').value;
        imageAnalogie = document.querySelector('#imageAnalogie').value;
        texteExplicatif = document.querySelector('#texteExplicatif').value;
    });

    document.querySelector('input[type="button"]').addEventListener('click', function () {
        var formulaire = document.querySelector('form');
        if (formulaire.reportValidity() == true) { //J'effectue ce code seulement si le formulaire est valide
            const htmlBlock = "<h2>Si j’étais " + analogie + ", je serais " + valeurAnalogie + "." + "</h2 >" + "<figure><div class='img-container'>" + "<img src='" + imageAnalogie + "'/></div></figure>" + "<p>" + texteExplicatif + "</section > "; //Je crée une constante de ma page temporaire avec le contenu du formulaire
            var pageAnalogie = document.querySelector(".page-analogie");
            pageAnalogie.innerHTML = ""; //J'efface le contenu déjà présent
            pageAnalogie.innerHTML += htmlBlock; //pour ajouter le contenu de mon formulaire à ma page index

            var url = 'https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=assia.ali-abdallah&courriel=assia.ali-abdallah@edu.univ-eiffel.fr&message=';
            url += encodeURIComponent("Si j'étais " + analogie + ", je serais " + valeurAnalogie + "." + texteExplicatif); //Je crée une variable qui contient le format de l'url envoyée à l'API et encodé

            console.log(url);

            fetch(url).then(function (response) {
                response.json().then(function (data) {
                    console.log("Réponse reçue : ");
                    console.log(data);
                });
            });

        }
    });
});
