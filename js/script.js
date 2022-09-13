

// Partendo dal markup in allegato, rifare lo slider usando Vuejs.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

var app = new Vue(
    {
    el: '#root',
    data: {
        // Variabile Active
        currentActiveElement:0,
        slides: [
    
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
        ]

    },

    methods: {

        // Funzione che mostra l'elemento successivo:

        showNextElement() {
            
            // Se currentActiveElement è maggiore della lungherzza dell' array:
            if(this.currentActiveElement < this.slides.length - 1) {
                // incremento currentActiveElement di 1 :
                this.currentActiveElement++;
            }
            else{

                // altrimenti ricominciam dal primo indice array = 0
                this.currentActiveElement = 0;
            }
        },
        // Funzione che mostra l'elemento precedente:
        showPrevElement() {

            // se currentActiveElement è maggiore di 0:
            if(this.currentActiveElement > 0) {
                // decremento currentActiveElement di 1:
                this.currentActiveElement--;
            }
            else{
                // altrimenti riparte dalla fine(indice array = lunghezza array)
                this.currentActiveElement = this.slides.length - 1;
            }

         },
        }

    },
);
