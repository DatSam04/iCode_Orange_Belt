const galleryContainer = document.querySelector('.gallery-container');
const galleryControlContainer = document.querySelector('.gallery-control');
const galleryControl = ['previous', 'next']
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel{
    constructor(container, items, controls){
        this.carouselContainer = container;
        this.carouselControl = controls;
        this.carouselArray = [...items];
    }

    updateGallery(){
        this.carouselArray.forEach(e1 => {
            e1.classList.remove('gallery-item-1');
            e1.classList.remove('gallery-item-2');
            e1.classList.remove('gallery-item-3');
            e1.classList.remove('gallery-item-4');
            e1.classList.remove('gallery-item-5');
        })

        this.carouselArray.slice(0, 5).forEach((e1, i) => {
            e1.classList.add(`gallery-item-${i+1}`);
        })
    }

    setCurrentState(direction){
        if(direction.className == 'gallery-control-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControl(){
        this.carouselControl.forEach(control => {
            galleryControlContainer.appendChild(document.createElement('button')).className =  `gallery-control-${control}`;
            document.querySelector(`.gallery-control-${control}`).innerText = control
        });
    }

    useControl(){
        const triggers = [...galleryControlContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControl);
exampleCarousel.setControl();
exampleCarousel.useControl();