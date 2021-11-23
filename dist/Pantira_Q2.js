class EuropCar {
    //arg-constructor
    constructor(id, name, color, distanceUsed) {
        this.id = id;
        this.name = name;
        this.distanceUsed = distanceUsed;
    }
    showCar() {
        return `${this.name} `;
    }
    use(disstance) {
        return `${this.distanceUsed}`;
    }
}
