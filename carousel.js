window.onload = function(){
    new Slider({
        images: '.carousel .photo img',
        next: '.carousel .tabs .next',
        prev: '.carousel .tabs .prev',
        delay: '2500'
    })
    function Slider(obj){
        this.images = document.querySelectorAll(obj.images)
        this.btNext = document.querySelector(obj.next)
        this.btPrev = document.querySelector(obj.prev)

        this.next = function(){
            console.log("asd")
        }

        this.prev = function(){
            console.log("das")
        }

        this.btNext.addEventListener('click', this.next)

        this.btPrev.addEventListener('click', this.prev)
    }
}