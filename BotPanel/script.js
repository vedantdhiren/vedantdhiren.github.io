// Data matrices extracted directly from your shop_utils.py configuration structures
const equityStocks = {
    "RELIANCE": { name: "Reliance Industries", price: 310 },
    "TATA": { name: "Tata Group", price: 1240 },
    "INFOSYS": { name: "Infosys Tech", price: 680 },
    "NVIDIA": { name: "NVIDIA Compute", price: 742 },
    "APPLE": { name: "Apple Inc", price: 182 },
    "ARAMCO": { name: "Saudi Aramco", price: 320 },
    "TESLA": { name: "Tesla Energy", price: 240 },
    "MICROSOFT": { name: "Microsoft Cloud", price: 415 }
};

const hardwareAssets = {
    "ANTMINER_S19": { name: "Antminer S19 Pro", price: 5000 },
    "WHATSMINER_M30": { name: "Whatsminer M30S", price: 12000 },
    "JASMINER_X16": { name: "Jasminer X16-Q", price: 140000 },
    "MICROBT_M66": { name: "Whatsminer M66 Hydro", price: 1800000 },
    "TATA_STEEL": { name: "Tata Steel Foundry", price: 150000 },
    "APPLE_STORE": { name: "Apple Global Flagship", price: 2000000 },
    "GIGAFACTORY": { name: "Tesla Automated Gigafactory", price: 90000000 },
    "NVIDIA_SUPER": { name: "NVIDIA DGX SuperPOD", price: 1200000000 }
};

/**
 * Replicates the mathematical fluctuations from your shop.py background ticker task
 * using the identical uniform distribution metrics (-0.08 to +0.09)
 */
function processMarketFluctuations(assetGroup) {
    let outputHTML = "";
    
    for (const [ticker, asset] of Object.entries(assetGroup)) {
        const deltaFactor = (Math.random() * (0.09 - (-0.08)) + (-0.08));
        const baselinePrice = asset.price;
        
        // Replicates python: Math.max(10, int(price * (1 + random.uniform(-0.08, 0.09))))
        asset.price = Math.max(10, Math.floor(asset.price * (1 + deltaFactor)));
        
        const operatorSign = asset.price >= baselinePrice ? "+" : "";
        const glyphArrow = asset.price >= baselinePrice ? "▲" : "▼";
        const variancePercentage = (asset.price >= baselinePrice ? "pos" : "neg");
        const formattedPercent = glyphArrow + " " + operatorSign + (deltaFactor * 100).toFixed(1) + "%";

        outputHTML += `
            <div class="ticker-item">
                <span>${asset.name} (${ticker}):</span>
                <span>$${asset.price.toLocaleString()}</span>
                <span class="${variancePercentage}">${formattedPercent}</span>
            </div>
        `;
    }
    // Returns duplicated track blocks to enable a seamless gap-free marquee stream wrap
    return outputHTML + outputHTML;
}

// Global broadcast routine updates
function refreshingLiveBroadcastFeeds() {
    document.getElementById('equityTrack').innerHTML = processMarketFluctuations(equityStocks);
    document.getElementById('hardwareTrack').innerHTML = processMarketFluctuations(hardwareAssets);
}

// Evaluates cycles every 3 seconds matching standard market ticker update vectors
setInterval(refreshingLiveBroadcastFeeds, 3000);
refreshingLiveBroadcastFeeds();

/**
 * Replicates your bank_utils.py daily interest engine parameters
 * loops compounding balances through matching depository capacity limits
 */
function calculateYield() {
    let capitalReserves = parseFloat(document.getElementById('calcDeposit').value) || 0;
    const timelineHorizon = parseInt(document.getElementById('calcDays').value) || 0;
    
    let interestMultiplier = 0.020;
    let classificationTier = "APEX CLEARING (100K CAP)";

    // Explicit capacity ceiling index matching get_interest_rate() structures
    if (capitalReserves >= 1000000000000) { interestMultiplier = 0.040; classificationTier = "FEDERAL RESERVE SOVEREIGN RESERVE (1T CAP)"; }
    else if (capitalReserves >= 50000000000) { interestMultiplier = 0.035; classificationTier = "BLACKROCK ASSET MANAGEMENT (50B CAP)"; }
    else if (capitalReserves >= 1000000000) { interestMultiplier = 0.030; classificationTier = "JPMORGAN CHASE INSTITUTIONAL (1B CAP)"; }
    else if (capitalReserves >= 50000000) { interestMultiplier = 0.025; classificationTier = "GOLDMAN SACHS WEALTH (50M CAP)"; }
    else if (capitalReserves >= 1000000) { interestMultiplier = 0.020; classificationTier = "MORGAN STANLEY PRIVATE (1M CAP)"; }
    else if (capitalReserves >= 500000) { interestMultiplier = 0.020; classificationTier = "FIDELITY CAPITAL (500K CAP)"; }
    else if (capitalReserves >= 250000) { interestMultiplier = 0.020; classificationTier = "VANGUARD TRUST (250K CAP)"; }

    document.getElementById('calcTier').innerText = classificationTier;
    document.getElementById('calcRate').innerText = (interestMultiplier * 100).toFixed(1) + "%";

    // Compounding routine processing matrix matching python logic loop iterations
    let aggregatedCompoundedWorth = capitalReserves;
    for (let dayIndex = 0; dayIndex < timelineHorizon; dayIndex++) {
        aggregatedCompoundedWorth += Math.floor(aggregatedCompoundedWorth * interestMultiplier);
    }

    document.getElementById('calcTotal').innerText = "\$" + Math.floor(aggregatedCompoundedWorth).toLocaleString();
}
