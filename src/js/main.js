import {aggregation} from "./multipleInherit";

class Mix {
    constructor() {
        this.name = "mix"
    }

    mixMethod() {
        console.log(this.name)
    }
}

class Base {
    static baseMethod() {
        console.log("baseMethod")
    }
}

class Inherit extends Object(aggregation(Base, Mix)) {
    constructor() {
        super()
        this.name = "inherit"
    }
}

const inherit = new Inherit()
inherit.mixMethod()
Base.baseMethod()