let potions = 0;
let inflation = .1;
let autoClicksOn = false;
let clickUpgrades = {
    malfoy: {
        price: 100,
        quantity: 0,
        multiplier: 2
    },
    macmillan: {
        price: 300,
        quantity: 0,
        multiplier: 10
    }
};
let automaticUpgrades = {
    granger: {
        price: 1000,
        quantity: 0,
        multiplier: 100
    },
    snape: {
        price: 10000,
        quantity: 0,
        multiplier: 200
    }
}
function spendMoney(price) {
    potions = potions - price
};
function makeMoney(price) {
    potions = price + potions
};
function collectAutoUpgrades() {
    let price = 0
    if (automaticUpgrades.granger.quantity >= 1) {
        price = price + (automaticUpgrades.granger.quantity * automaticUpgrades.granger.multiplier)
    }
    if (automaticUpgrades.snape.quantity >= 1) {
        price = price + (automaticUpgrades.snape.quantity * automaticUpgrades.snape.multiplier)
    }
    makeMoney(price);
    update();
};
function startInterval() {
    if (autoClicksOn == true) {
        return
    }
    collectionInterval = setInterval(collectAutoUpgrades, 3000);
    autoClicksOn = true;
};

function upgradeMalfoy() {
    if (potions >= clickUpgrades.malfoy.price) {
        clickUpgrades.malfoy.quantity++;
        spendMoney(clickUpgrades.malfoy.price)
        clickUpgrades.malfoy.price = (clickUpgrades.malfoy.price * inflation) + clickUpgrades.malfoy.price;
        clickUpgrades.malfoy.price = Math.round(clickUpgrades.malfoy.price);
        update()
        updateMalfoy()
    };
    console.log("upgrade potion hit")
};
function upgradeMacmillan() {
    if (potions >= clickUpgrades.macmillan.price) {
        clickUpgrades.macmillan.quantity++;
        spendMoney(clickUpgrades.macmillan.price)
        clickUpgrades.macmillan.price = (clickUpgrades.macmillan.price * inflation) + clickUpgrades.macmillan.price;
        clickUpgrades.macmillan.price = Math.round(clickUpgrades.macmillan.price);
        update()
        updateMacmillan()
    };
    console.log("upgrade potion hit")
};
function upgradeGranger() {
    if (potions >= automaticUpgrades.granger.price) {
        automaticUpgrades.granger.quantity++;
        spendMoney(automaticUpgrades.granger.price)
        automaticUpgrades.granger.price = (automaticUpgrades.granger.price * inflation) + automaticUpgrades.granger.price;
        automaticUpgrades.granger.price = Math.round(automaticUpgrades.granger.price);
        update()
        updateGranger()
        startInterval()
    };
    console.log("upgrade potion hit")
};
function upgradeSnape() {
    if (potions >= automaticUpgrades.snape.price) {
        automaticUpgrades.snape.quantity++;
        spendMoney(automaticUpgrades.snape.price)
        automaticUpgrades.snape.price = (automaticUpgrades.snape.price * inflation) + automaticUpgrades.snape.price;
        automaticUpgrades.snape.price = Math.round(automaticUpgrades.snape.price);
        update()
        updateSnape()
        startInterval()
    };
    console.log("upgrade potion hit")
};
function add() {
    let collection = 1;
    if (clickUpgrades.malfoy.quantity >= 1) {
        collection = collection + (clickUpgrades.malfoy.quantity * clickUpgrades.malfoy.multiplier)
    }
    if (clickUpgrades.macmillan.quantity >= 1) {
        collection = collection + (clickUpgrades.macmillan.quantity * clickUpgrades.macmillan.multiplier)
    }
    makeMoney(collection);
    update();
};


function update() {
    let potionsElement = document.getElementById("potionsNum");
    potionsElement.innerHTML = `potions brewed: ${potions}`;
};

function updateMalfoy() {
    let malfoyElement = document.getElementById("malfoyNum");
    malfoyElement.innerHTML = `Malfoys collected: ${clickUpgrades.malfoy.quantity}`;
    let malfoyPrice = document.getElementById("malfoyPrice");
    malfoyPrice.innerHTML = clickUpgrades.malfoy.price;
}
function updateMacmillan() {
    let macmillanElement = document.getElementById("macmillanNum");
    macmillanElement.innerHTML = `Macmillans collected: ${clickUpgrades.macmillan.quantity}`;
    let macmillanPrice = document.getElementById("macmillanPrice");
    macmillanPrice.innerHTML = clickUpgrades.macmillan.price;
}
function updateGranger() {
    let grangerElement = document.getElementById("grangerNum");
    grangerElement.innerHTML = `Grangers collected: ${automaticUpgrades.granger.quantity}`;
    let grangerPrice = document.getElementById("grangerPrice");
    grangerPrice.innerHTML = automaticUpgrades.granger.price;
}
function updateSnape() {
    let snapeElement = document.getElementById("snapeNum");
    snapeElement.innerHTML = `Snapes collected: ${automaticUpgrades.snape.quantity}`;
    let snapePrice = document.getElementById("snapePrice");
    snapePrice.innerHTML = automaticUpgrades.snape.price;
}


















