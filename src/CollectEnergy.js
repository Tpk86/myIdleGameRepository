class CollectEnergy {
    constructor() {
        this.myEnergy = {
            energy : 0,
            energyPerClick: 1,
            energyPerClickCost: 10,
        }

        this.$collectedEnergy = document.querySelector(".collectedEnergy");
        this.$perClickUpgradeBtn = document.querySelector(".perClickUpgradeBtn");
        this.$collectEnergyBtn = document.querySelector(".collectEnergyBtn");
    }

    init() {
        window.setInterval(() => {
            this._collectEnergy();
        }, 1000);

        this._setEvents();
    }

    _setEvents() {
        this.$collectEnergyBtn.addEventListener(
            "click", () => this._collectEnergy()
        )

        this.$perClickUpgradeBtn.addEventListener(
            "click", () => this._buyEnergyPerClick()
        )
    }

    _update() {
        const energyCounterStr = `Energy: ${this.myEnergy.energy}`;
        const buttonStr = `Upgrade Battery (Currently Level ${this.myEnergy.energyPerClick}) Cost: ${this.myEnergy.energyPerClickCost} Energy`;

        this.$collectedEnergy.innerHTML = energyCounterStr;
        this.$perClickUpgradeBtn.innerHTML = buttonStr;
    }

    _collectEnergy() {
        this.myEnergy.energy = this.myEnergy.energy + this.myEnergy.energyPerClick;
            
        this._update();
    }

    _buyEnergyPerClick() {
        if (this.myEnergy.energy >= this.myEnergy.energyPerClickCost) {
            this.myEnergy.energy -= this.myEnergy.energyPerClickCost;
            this.myEnergy.energyPerClick += 1;
            this.myEnergy.energyPerClickCost *= 2;
            
            this._update();
        }
    }

}

export default CollectEnergy;