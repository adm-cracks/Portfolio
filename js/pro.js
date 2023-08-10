navigator.getBattery().then((battery) => {
    function updateAllBatteryInfo() {
        updateChargeInfo();
        updateLevelInfo();
        updateChargingInfo();
        updateDischargingInfo();
    }
    updateAllBatteryInfo();

    battery.addEventListener("chargingchange", () => {
        updateChargeInfo();
    });

    function updateChargeInfo() {
        document.getElementById("cha").innerHTML = `charging : ${battery.charging ? "✔️" : "❌"}`;
    }

    battery.addEventListener("levelchange", () => {
        updateLevelInfo();
    });

    function updateLevelInfo() {
        document.getElementById("bat").innerHTML = `🔋: ${battery.level * 100}%`;
    }

    battery.addEventListener("chargingtimechange", () => {
        updateChargingInfo();
    });

    function updateChargingInfo() {
        console.log(`Battery charging time: ${battery.chargingTime} seconds`);
    }

    battery.addEventListener("dischargingtimechange", () => {
        updateDischargingInfo();
    });

    function updateDischargingInfo() {
        console.log(`Battery discharging time: ${battery.dischargingTime} seconds`);
    }
});
