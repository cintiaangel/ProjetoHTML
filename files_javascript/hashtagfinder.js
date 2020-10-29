var imagens = [
    "https://static.poder360.com.br/2020/04/GATO-CORONAVIRUS.jpg",
    "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg",
    "https://pfarma.com.br/images/noticias/gato-coronavirus.jpg",
    "https://super.abril.com.br/wp-content/uploads/2019/04/gato_site.png",
    "https://exame.com/wp-content/uploads/2019/09/gettyimages-908714708.gif",
    "https://static1.patasdacasa.com.br/articles/3/95/3/@/4546-o-bigode-de-gato-proporciona-equilibrio-articles_media_mobile-2.jpg",
    "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/01-guina-nationalgeographic_2750749.jpg?w=1600&h=900",
    "https://static.natgeo.pt/files/styles/image_3200/public/01-cat-tail.jpg?w=1600&h=900",
    "https://catracalivre.com.br/wp-content/uploads/2019/07/gato-beber-agua.jpg",
    "https://www.rbsdirect.com.br/imagesrc/25265801.jpg?w=700",
]


var page =0;

function carregarImagens(page) {
    page = page*5
    var html = ""

    for (i= page-5; i<page; i++) {
        console.log(imagens[i])
        var img = document.querySelector('.exp1').cloneNode(true)
        img.style["background-image"]= "url("+imagens[i]+")";
        img.style.display="block"; 
        html += img.outerHTML
    }

    console.log(html)
    document.querySelector('.container_images').innerHTML = html;
    
        carregarModal() 
}


var a = document.querySelector('.button_click')
a.addEventListener('click', clicar)

function clicar(){
    a.style.background ='#4566f9'
     
} 

function carregarModal(){

let imagens_modal = document.querySelectorAll('.imagem');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('#bt_close');

for(let i =0; i<imagens_modal.length;i++){

    imagens_modal[i].addEventListener('click',function(){
        console.log(imagens[i])
        modalImg.src = imagens[i];
        modal.classList.toggle('modal_active');
    });
    
}


btClose.addEventListener('click', function(){
    modal.classList.toggle('modal_active');
});
}

