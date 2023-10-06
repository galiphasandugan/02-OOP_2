"use strict"

/* -------------------------------------------------------
    MODULES
------------------------------------------------------- *

// Class decleration
// class PascalNamedClassName{...}


// Class Expression 

const PascalNamedClassName = class{
    undefinedProperty   // değeri undefined
    extraField = 'field-value'


    constructor(parameter1,parameter2='default-value'){
        this.parameter1 = parameter1
        this.parameter2 = parameter2
    }

    methodName(){
        return this
    }
    methodName2(){
        return this.extraField
    }

    
}


// instance

const instance = new PascalNamedClassName('parameter-1-value','parameter-2-value')
console.log(instance)
console.log(instance.methodName2())
instance.extraField ='new-value'
console.log(instance.extraField)

/* -------------------------------------------------------*

class Car{

    isRunning = false

    constructor(brand,model,year){
            this.brand = brand
            this.model = model
            this.year = year
    }

    ruEngine(){
        this.isRunning = true
        console.log('Motor Çalıştı')
        return this.isRunning
    }

}


const ford = new Car('Ford','Mustang',1967)

console.log(ford)
console.log(ford.isRunning)
ford.ruEngine()
console.log(ford.isRunning)
    
const mercedes = new Car('Mercedes','CLK200',2000)

console.log(mercedes)

/* -------------------------------------------------------*

// inheritance bir classının bütün özelliklerini başka bir class a aktarmak


class Vehicle{

    vehicleIsActive = false

    constructor(vehicleType){
        this.vehicleType = vehicleType
    }
}


class Car extends Vehicle{

    isRunning = false

    constructor(brand,model,year,vehicleType='lolipop'){
            super(vehicleType)  // parent i yani baba objeyi belirtir
            this.brand = brand // İÇİNDE BULUNDUĞUM CLASS I BELİRTİR
            this.model = model
            this.year = year
          
    }

    ruEngine(){
        this.isRunning = true
        console.log('Motor Çalıştı')
        return this.isRunning
    }

}

const ford = new Car('Ford','Mustang',1967,'SUV')
console.log(ford)


class Accessory extends Car {

    constructor(accessoryName, brand, model, year, vehicleType = 'Car') {
        super(brand, model, year, vehicleType)
        this.accessoryName = accessoryName
    }
}

const fordClimate = new Accessory("Bosch Climate",...Object.values(ford))
console.log(fordClimate)


/* -------------------------------------------------------*

// polyMorfizm

class Vehicle{

    vehicleIsActive = false

    constructor(vehicleType){
        this.vehicleType = vehicleType
    }

    getDetails(){
        console.log('vehicle.getDetails')
        return this.vehicleType
    }
}


class Car extends Vehicle{

    isRunning = false

    constructor(brand,model,year,vehicleType='lolipop'){
            super(vehicleType)  // parent i yani baba objeyi belirtir
            this.brand = brand // İÇİNDE BULUNDUĞUM CLASS I BELİRTİR
            this.model = model
            this.year = year
          
    }

    ruEngine(){
        this.isRunning = true
        console.log('Motor Çalıştı')
        return this.isRunning
    }

    getDetails(){
        console.log('Car.getDetails')
        return {
            brand:this.brand,
            model:this.model,
            year:this.year,
            vehicleType:super.getDetails(),  // parent daki methodları çağırma yolu
            vehicleIsActive: super.vehicleIsActive  
              //super nokta demek parentin özellilklerini getirir

        }
    }

}


const ford = new Car('Ford','Mustang', 1967)
console.log(ford)
console.log(ford.getDetails())


/* -------------------------------------------------------*



class Vehicle{

    vehicleIsActive = false // her yerden erişirim
    _protectedProp =true // instance dan erişemem extend ettiğimden erişirim
    #privateProp = true  // sadece parent dan erişirim

    constructor(vehicleType){
        this.vehicleType = vehicleType
    }

        // Override yapma lütfen:
        _protectedMethod() {
            console.log('Vehicle protectedMethod çalıştı')
            return true
        }
    
        #privateMethod() {
            console.log('Vehicle privateMethod çalıştı')
            return true
        }
    
        getDetails() {
            console.log('Vehicle getDetails çalıştı')
            console.log( 'privateProp', this.#privateProp )
            console.log( this.#privateMethod() )
        }
}


class Car extends Vehicle{

    isRunning = false

    constructor(brand,model,year,vehicleType='lolipop'){
            super(vehicleType)  // parent i yani baba objeyi belirtir
            this.brand = brand // İÇİNDE BULUNDUĞUM CLASS I BELİRTİR
            this.model = model
            this.year = year
          
    }

    ruEngine(){
        this.isRunning = true
        console.log('Motor Çalıştı')
        return this.isRunning
    }

    getDetails(){
        console.log('Car.getDetails')
        return {
            brand:this.brand,
            model:this.model,
            year:this.year,
            vehicleType:super.getDetails(),  // parent daki methodları çağırma yolu
            vehicleIsActive: super.vehicleIsActive  
              //super nokta demek parentin özellilklerini getirir

        }
    }

}
const ford = new Car('Ford','Mustang', 1967)
console.log(ford)
console.log(ford.getDetails())


/* -------------------------------------------------------*/


//? GETTER & SETTER METHODS: Görevi veri getirme (getter) ve veri güncelleme (setter) olan metodlardır.
//? "STATIC" KEYWORD: Class'dan direkt erişim. (Instance erişemez.)

class Car {

    isRunning = false
    #price

    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('Motor Çalıştırıldı')
        return this.isRunning
    }

    set setPrice(newPrice) {
        // return this.#price = newPrice
        this.#price = newPrice
        console.log('Fiyat Alındı.')
        return true
    }

    get getPrice() {
        // return this.#price
        return 'Fiyat: ' + (this.#price ?? 'Henüz Belirlenmedi.')
    }

    static staticProp = 'static value'

    static staticMethod(){
        console.log('static method çalıştı')
        return this
    }
}

const ford = new Car('Ford', 'Mustang', 1967)
console.log( ford )

console.log(ford.getPrice)

ford.setPrice = 5000

console.log(ford.getPrice)


//? static ile car içirisindeki bir property ye veya methoda kolaylıkla erieşbilirim
const abc = Math.round(1.56)
console.log(abc)


console.log(Car.staticProp)
console.log(Car.staticMethod())
// ! ststic ile class ı instance a atamadan direkt erişmek istediğimiz zaman kullanırız.
/* ------------------------------------------------------- */