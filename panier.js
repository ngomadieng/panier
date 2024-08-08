document.addEventListener('DOMContentLoaded', function(){
    const cartItems= document.querySelectorAll('.cart-item');
    const totalElement= document.querySelector('.total');
    let total= 0;
    //fonction pour mettre a jour le total

    function updateTotal(){
        let total=0;
        cartItems.forEach(item=>{
            const prix= parseInt(item.dataset.prix);
            const quantite= parseInt(item.querySelector('.quantite').textContent);
            total+=prix*quantite;
        });
        totalElement.textContent="Total:"+total+"FCFA";
    }
    //ajouter des elements pour chaque element du panier

    cartItems.forEach(item=>{
        const augbouton= item.querySelector('.augmenter');
        const dimbouton= item.querySelector('.diminuer');
        const quantiteElement= item.querySelector('.quantite');
        const supbouton= item.querySelector('.supprimer');
        const coeurElement= item.querySelector('.coeur');

        //evenement pour augmenter la quantite

        augbouton.addEventListener('click',()=>{
            let quantite= parseInt(quantiteElement.textContent);
            quantiteElement.textContent= ++quantite;
            updateTotal();
        });

        dimbouton.addEventListener('click',()=>{
            let quantite= parseInt(quantiteElement.textContent);
            if(quantite>1){ 
            quantiteElement.textContent= --quantite;
            updateTotal();
            }
        });
        //evenement pour supprimer l'article du panier

        supbouton.addEventListener('click',()=>{
            item.remove();
            updateTotal();
        });
        //evenement pour aimer l'article

        coeurElement.addEventListener('click', ()=>{
            coeurElement.classList.toggle('liked');
        });
} );
//mettre a jour le total initialement

updateTotal();
});