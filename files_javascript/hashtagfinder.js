   // lista de imagens
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

    // lista com os usernemes esperado pelo twitter
    var username = [
        "@twitterusername1",
        "@twitterusername2",
        "@twitterusername3",
        "@twitterusername4",
        "@twitterusername5",
        "@twitterusername6",
        "@twitterusername7",
        "@twitterusername8",
        "@twitterusername9",
        "@twitterusername10",
    ]
    var page =0;

    // função para usar os botões e carregar as imagens da lista
    
    function uploadImages(pageParam) {
                
        if (pageParam === 1) {
            document.querySelector('#button2').style['background-color'] = 'gray';
            document.querySelector('#button3').style['background-color'] = 'gray';
            document.querySelector('#button1').style['background-color'] = '#5469f9';
            page=1
            pageParam = 1
        } else if (pageParam === 2) {
            page=2
            pageParam = 2
            document.querySelector('#button2').style['background-color'] = '#5469f9';
            document.querySelector('#button1').style['background-color'] = 'gray';
            document.querySelector('#button3').style['background-color'] = 'gray';
        } else if (pageParam === 3) {
            page=3  
            pageParam = 3
            document.querySelector('#button3').style['background-color'] = '#5469f9';
            document.querySelector('#button2').style['background-color'] = 'gray';
            document.querySelector('#button1').style['background-color'] = 'gray';
        }

        page = pageParam;
        pageEnd = pageParam*5
        var html = ""

        for (i= pageEnd-5; i<pageEnd; i++) {

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

    // função para executar a modal e os textos que irão sobre a imagem

    function carregarModal(){
 
        let imagens_modal = document.querySelectorAll('.photo');
        let modal = document.querySelector('.modal');

        let modalImg = document.querySelector('#modal_img');
        let btClose = document.querySelector('#bt_close');
        let textUser = document.querySelector('.text_twitter');

        for(let i =0; i<imagens_modal.length;i++){
            imagens_modal[i].addEventListener('click',function(){
                modalImg.src = imagens[(page - 1)*5+i];
                modal.classList.toggle('modal_active');
                textUser.innerHTML = username[(page - 1)*5+i]
            });
        }
        btClose.addEventListener('click', function(e){
        modal.classList.remove('modal_active');
        });

    }
        uploadImages(1)
