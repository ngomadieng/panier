const product =[

    {
        id:0,
        image:"https://image.made-in-china.com/202f0j00CbrkyRDBlKqe/The-New-Folding-Mobilephone-Z-Flip4-Original-Mobilephone-Manufacturers-Direct-Sales.webp" ,
        titre: "Telephone portable pliable",
        prix: "250k",
    },

    {
        id:1,
        image:"https://www.eas.ci/wp-content/uploads/2023/10/AirPod_Pro.webp" ,
        titre: "Air Pods Pro",
        prix: "10k",
    },

    {
        id:2,
        image:"https://images-cdn.ubuy.co.in/650c663e79ea046fbf202358-canon-eos-250d-rebel-sl3-digital-slr.jpg" ,
        titre: "250D DSLR Camera",
        prix: "300k",
    },

    {
        id:3,
        image:"https://sn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/75/202811/1.jpg?3543" ,
        titre: "Casque",
        prix: "8k",
    },
];
const categorie=[...new Set(product.map(function(article){return article;}))]
     let i=0;

document.getElementById('root').innerHTML= categorie.map(function (article){
    var {image, titre, prix}= article;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='image' src=${image}></img>
            </div>
        <div class="bottom">
            <p>${titre}</p>
            <h2>FCFA ${prix}</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Ajouter au panier</button>"+
            `</div>    

        </div>`

    )
}).join('')     

var cart=[];

function addtocart(a){
    cart.push({...categorie[a]});
    displaycart();
}


function displaycart(a){
    let j=0;
    if(cart.length==0){
        document.getElementById('cartitem').innertHTML='Votre panier est vide';

    }
    else{
        document.getElementById('cartitem').innerHTML=cart.map(function (article){
            var {image,titre, prix}=article;
            return(
                `<div class='cartitem'>
                    <div class ='row-img'>
                        <img class='rimage' src=${image}>
                    </div>
                    <p style 'font-size:12px;'>${titre}</p>
                    <h2 style='font-size:15px;'>FCFA ${prix}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('')
    }
}