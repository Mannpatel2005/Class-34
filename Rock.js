class Rock{
    constructor(x,y,width,height){
        var option = {
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,width,height,option)
        this.width = width
        this.height = height
        this.image = loadImage("images/rock1.png")
        World.add(myWorld, this.body)
    }
    show(){
        imageMode (RIGHT) 
  image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)

    }
}