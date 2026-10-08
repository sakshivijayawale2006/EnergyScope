document.addEventListener("DOMContentLoaded", function () {

    try {

        Chart.defaults.font.family = "DM Sans";


        // ==========================================
        // BASIC FUNCTIONS
        // ==========================================

        function average(arr) {

            if (!arr.length) return 0;

            return arr.reduce(
                (a, b) => a + b,
                0
            ) / arr.length;

        }


        function money(value) {

            return "₹" +
                Math.round(value)
                    .toLocaleString("en-IN");

        }


        function formatNumber(value) {

            return Math.round(value)
                .toLocaleString("en-IN");

        }


        function getCategory(units) {

            if (units < 140)
                return "Low";

            if (units < 210)
                return "Medium";

            return "High";

        }


        // ==========================================
        // SAMPLE DATA STATISTICS
        // ==========================================

        const totalHouseholds =
            householdData.length;


        const averageUnits =
            average(
                householdData.map(
                    h => h.units
                )
            );


        const averageBill =
            average(
                householdData.map(
                    h => h.bill
                )
            );


        const highestHousehold =
            householdData.reduce(
                (max, h) =>
                    h.units > max.units
                        ? h
                        : max,
                householdData[0]
            );


        // ==========================================
        // HERO
        // ==========================================

        const heroHouseholds =
            document.getElementById(
                "heroHouseholds"
            );


        const heroAverage =
            document.getElementById(
                "heroAverage"
            );


        if (heroHouseholds) {

            heroHouseholds.textContent =
                totalHouseholds;

        }


        if (heroAverage) {

            heroAverage.textContent =
                Math.round(averageUnits) +
                " kWh";

        }


        // ==========================================
        // SAMPLE STAT CARDS
        // ==========================================

        const statHouseholds =
            document.getElementById(
                "statHouseholds"
            );


        const statAverage =
            document.getElementById(
                "statAverage"
            );


        const statBill =
            document.getElementById(
                "statBill"
            );


        const statHighest =
            document.getElementById(
                "statHighest"
            );


        if (statHouseholds)
            statHouseholds.textContent =
                totalHouseholds;


        if (statAverage)
            statAverage.textContent =
                Math.round(averageUnits) +
                " kWh";


        if (statBill)
            statBill.textContent =
                money(averageBill);


        if (statHighest)
            statHighest.textContent =
                highestHousehold.units +
                " kWh";


        // ==========================================
        // FAMILY SIZE CHART
        // ==========================================

        function createSurveyChart() {

            const canvas =
                document.getElementById(
                    "surveyChart"
                );

            if (!canvas) return;


            const familyCounts = {};


            householdData.forEach(h => {

                if (!familyCounts[h.members]) {

                    familyCounts[h.members] = 0;

                }

                familyCounts[h.members]++;

            });


            new Chart(canvas, {

                type: "doughnut",

                data: {

                    labels:
                        Object.keys(
                            familyCounts
                        ).map(
                            x =>
                                x +
                                " Members"
                        ),

                    datasets: [{

                        data:
                            Object.values(
                                familyCounts
                            ),

                        backgroundColor: [
                            "#7c3aed",
                            "#06b6d4",
                            "#f59e0b",
                            "#ef4444",
                            "#10b981",
                            "#ec4899",
                            "#6366f1"
                        ]

                    }]

                },

                options: {

                    responsive: true,

                    maintainAspectRatio: false,

                    plugins: {

                        legend: {
                            position: "bottom"
                        }

                    }

                }

            });

        }


        // ==========================================
        // SAMPLE MONTHLY CHART
        // ==========================================

        function createConsumptionChart() {

            const canvas =
                document.getElementById(
                    "consumptionChart"
                );

            if (!canvas) return;


            new Chart(canvas, {

                type: "line",

                data: {

                    labels:
                        monthlyTrend.map(
                            m => m.month
                        ),

                    datasets: [{

                        label:
                            "Sample Consumption",

                        data:
                            monthlyTrend.map(
                                m => m.units
                            ),

                        borderColor:
                            "#7c3aed",

                        backgroundColor:
                            "rgba(124,58,237,0.10)",

                        borderWidth: 3,

                        fill: true,

                        tension: 0.35,

                        pointRadius: 5

                    }]

                },

                options: {

                    responsive: true,

                    maintainAspectRatio: false,

                    plugins: {

                        legend: {
                            position: "bottom"
                        }

                    },

                    scales: {

                        y: {

                            title: {

                                display: true,

                                text:
                                    "Electricity Consumption (kWh)"

                            }

                        }

                    }

                }

            });

        }


        // ==========================================
        // CATEGORY CHART
        // ==========================================

        function createCategoryChart() {

            const canvas =
                document.getElementById(
                    "categoryChart"
                );

            if (!canvas) return;


            const counts = {

                Low: 0,

                Medium: 0,

                High: 0

            };


            householdData.forEach(h => {

                counts[
                    getCategory(h.units)
                ]++;

            });


            new Chart(canvas, {

                type: "bar",

                data: {

                    labels: [
                        "Low",
                        "Medium",
                        "High"
                    ],

                    datasets: [{

                        label:
                            "Households",

                        data: [
                            counts.Low,
                            counts.Medium,
                            counts.High
                        ],

                        backgroundColor: [
                            "#10b981",
                            "#f59e0b",
                            "#ef4444"
                        ],

                        borderRadius: 8

                    }]

                },

                options: {

                    responsive: true,

                    maintainAspectRatio: false,

                    plugins: {

                        legend: {
                            display: false
                        }

                    },

                    scales: {

                        y: {

                            beginAtZero: true

                        }

                    }

                }

            });

        }


        // ==========================================
        // APPLIANCE CHART
        // ==========================================

        function createApplianceChart() {

            const canvas =
                document.getElementById(
                    "applianceChart"
                );

            if (!canvas) return;


            const appliances = {

                AC:
                    average(
                        householdData.map(
                            h => h.ac
                        )
                    ),

                Fans:
                    average(
                        householdData.map(
                            h => h.fan
                        )
                    ),

                TV:
                    average(
                        householdData.map(
                            h => h.tv
                        )
                    ),

                Washing:
                    average(
                        householdData.map(
                            h => h.washing
                        )
                    ),

                Fridge:
                    average(
                        householdData.map(
                            h => h.fridge
                        )
                    )

            };


            new Chart(canvas, {

                type: "bar",

                data: {

                    labels: [
                        "AC",
                        "Fans",
                        "TV",
                        "Washing",
                        "Fridge"
                    ],

                    datasets: [{

                        label:
                            "Average Usage",

                        data:
                            Object.values(
                                appliances
                            ),

                        backgroundColor: [
                            "#7c3aed",
                            "#06b6d4",
                            "#f59e0b",
                            "#ec4899",
                            "#10b981"
                        ],

                        borderRadius: 8

                    }]

                },

                options: {

                    responsive: true,

                    maintainAspectRatio: false,

                    plugins: {

                        legend: {
                            display: false
                        }

                    }

                }

            });

        }


        // ==========================================
        // FAMILY SIZE VS ELECTRICITY
        // ==========================================

        function createFamilyChart() {

            const canvas =
                document.getElementById(
                    "familyChart"
                );

            if (!canvas) return;


            const groups = {};


            householdData.forEach(h => {

                if (!groups[h.members]) {

                    groups[h.members] = [];

                }

                groups[h.members]
                    .push(h.units);

            });


            const labels =
                Object.keys(groups)
                    .sort(
                        (a, b) =>
                            a - b
                    );


            const values =
                labels.map(
                    member =>
                        Math.round(
                            average(
                                groups[member]
                            )
                        )
                );


            new Chart(canvas, {

                type: "line",

                data: {

                    labels:
                        labels.map(
                            x =>
                                x +
                                " Members"
                        ),

                    datasets: [{

                        label:
                            "Average kWh",

                        data: values,

                        borderColor:
                            "#06b6d4",

                        backgroundColor:
                            "rgba(6,182,212,0.10)",

                        borderWidth: 3,

                        fill: true,

                        tension: 0.35,

                        pointRadius: 6

                    }]

                },

                options: {

                    responsive: true,

                    maintainAspectRatio: false,

                    plugins: {

                        legend: {
                            position: "bottom"
                        }

                    }

                }

            });

        }

// ==========================================
        // TABLE
        // ==========================================

        function renderTable(
            data = householdData
        ) {

            const tableBody =
                document.getElementById(
                    "dataTableBody"
                );

            if (!tableBody) return;


            tableBody.innerHTML = "";


            data.forEach(h => {

                const row =
                    document.createElement(
                        "tr"
                    );


                row.innerHTML = `

                    <td>${h.id}</td>

                    <td>${h.members}</td>

                    <td>${h.ac}</td>

                    <td>${h.fan}</td>

                    <td>${h.tv}</td>

                    <td>${h.washing}</td>

                    <td>${h.fridge}</td>

                    <td>${h.units} kWh</td>

                    <td>${money(h.bill)}</td>

                    <td>
                        <span class="category-badge ${getCategory(h.units).toLowerCase()}">
                            ${getCategory(h.units)}
                        </span>
                    </td>

                `;


                tableBody.appendChild(row);

            });

        }


        // ==========================================
        // TABLE SEARCH
        // ==========================================

        const searchInput =
            document.getElementById(
                "searchInput"
            );


        if (searchInput) {

            searchInput.addEventListener(
                "input",
                function () {

                    const value =
                        searchInput.value
                            .toLowerCase();


                    const filtered =
                        householdData.filter(
                            h =>

                                h.id
                                    .toLowerCase()
                                    .includes(value)

                                ||

                                String(
                                    h.members
                                ).includes(value)

                                ||

                                String(
                                    h.units
                                ).includes(value)

                        );


                    renderTable(filtered);

                }
            );

        }


        // ==========================================
        // USER 3-MONTH PREDICTION
        // ==========================================

        let userPredictionChart = null;


        function calculatePrediction(
            values
        ) {

            const x = [1, 2, 3];

            const y = values;

            const n = 3;


            const sumX =
                x.reduce(
                    (a, b) => a + b,
                    0
                );


            const sumY =
                y.reduce(
                    (a, b) => a + b,
                    0
                );


            const sumXY =
                x.reduce(
                    (sum, value, index) =>
                        sum +
                        value *
                        y[index],
                    0
                );


            const sumXX =
                x.reduce(
                    (sum, value) =>
                        sum +
                        value * value,
                    0
                );


            const denominator =
                n * sumXX -
                sumX * sumX;


            const slope =
                (
                    n * sumXY -
                    sumX * sumY
                ) / denominator;


            const intercept =
                (
                    sumY -
                    slope * sumX
                ) / n;


            let prediction =
                intercept +
                slope * 4;


            prediction =
                Math.max(
                    0,
                    prediction
                );


            return Math.round(
                prediction
            );

        }


        function showUserPrediction() {

            const month1 =
                Number(
                    document.getElementById(
                        "month1"
                    ).value
                );


            const month2 =
                Number(
                    document.getElementById(
                        "month2"
                    ).value
                );


            const month3 =
                Number(
                    document.getElementById(
                        "month3"
                    ).value
                );


            const error =
                document.getElementById(
                    "predictionError"
                );


            if (
                !month1 ||
                !month2 ||
                !month3 ||
                month1 <= 0 ||
                month2 <= 0 ||
                month3 <= 0
            ) {

                error.textContent =
                    "Please enter all three monthly kWh values.";

                return;

            }


            error.textContent = "";


            const values = [
                month1,
                month2,
                month3
            ];


            const prediction =
                calculatePrediction(
                    values
                );


            document.getElementById(
                "userPrediction"
            ).textContent =
                formatNumber(
                    prediction
                );


            document.getElementById(
                "resultMonth1"
            ).textContent =
                month1 + " kWh";


            document.getElementById(
                "resultMonth2"
            ).textContent =
                month2 + " kWh";


            document.getElementById(
                "resultMonth3"
            ).textContent =
                month3 + " kWh";


            const difference =
                prediction -
                month3;


            const message =
                document.getElementById(
                    "predictionMessage"
                );


            if (difference > 0) {

                message.textContent =
                    `Your electricity consumption is showing an upward trend. EnergyScope predicts approximately ${prediction} kWh for the next month, around ${difference} kWh higher than Month 3.`;

            }

            else if (difference < 0) {

                message.textContent =
                    `Your electricity consumption is showing a downward trend. EnergyScope predicts approximately ${prediction} kWh for the next month, around ${Math.abs(difference)} kWh lower than Month 3.`;

            }

            else {

                message.textContent =
                    `Your recent consumption is relatively stable. EnergyScope predicts approximately ${prediction} kWh for the next month.`;

            }


            createUserPredictionChart(
                values,
                prediction
            );

        }


        const predictBtn =
            document.getElementById(
                "predictBtn"
            );


        if (predictBtn) {

            predictBtn.addEventListener(
                "click",
                showUserPrediction
            );

        }


        function createUserPredictionChart(
            values,
            prediction
        ) {

            const canvas =
                document.getElementById(
                    "userPredictionChart"
                );


            if (!canvas) return;


            if (userPredictionChart) {

                userPredictionChart.destroy();

            }


            userPredictionChart =
                new Chart(canvas, {

                    type: "line",

                    data: {

                        labels: [
                            "Month 1",
                            "Month 2",
                            "Month 3",
                            "Next Month"
                        ],

                        datasets: [

                            {

                                label:
                                    "Previous Usage",

                                data: [
                                    values[0],
                                    values[1],
                                    values[2],
                                    null
                                ],

                                borderColor:
                                    "#7c3aed",

                                backgroundColor:
                                    "rgba(124,58,237,0.10)",

                                borderWidth: 3,

                                fill: true,

                                tension: 0.3,

                                pointRadius: 6

                            },


                            {

                                label:
                                    "Prediction",

                                data: [
                                    null,
                                    null,
                                    null,
                                    prediction
                                ],

                                borderColor:
                                    "#f97316",

                                backgroundColor:
                                    "#f97316",

                                borderWidth: 4,

                                borderDash:
                                    [8, 6],

                                pointRadius: 8,

                                tension: 0

                            }

                        ]

                    },

                    options: {

                        responsive: true,

                        maintainAspectRatio:
                            false,

                        plugins: {

                            legend: {

                                position:
                                    "bottom"

                            }

                        },

                        scales: {

                            y: {

                                title: {

                                    display:
                                        true,

                                    text:
                                        "Electricity Consumption (kWh)"

                                }

                            }

                        }

                    }

                });

        }



        // ==========================================
        // APPLIANCE ELECTRICITY CALCULATOR
        // ==========================================

        let applianceResultChart =
            null;


        function calculateApplianceUsage() {

            const familyMembers =
                Number(
                    document.getElementById(
                        "familyMembers"
                    ).value
                );


            const acHours =
                Number(
                    document.getElementById(
                        "acHours"
                    ).value
                );


            const fanCount =
                Number(
                    document.getElementById(
                        "fanCount"
                    ).value
                );


            const fanHours =
                Number(
                    document.getElementById(
                        "fanHours"
                    ).value
                );


            const tvHours =
                Number(
                    document.getElementById(
                        "tvHours"
                    ).value
                );


            const lightCount =
                Number(
                    document.getElementById(
                        "lightCount"
                    ).value
                );


            const lightHours =
                Number(
                    document.getElementById(
                        "lightHours"
                    ).value
                );


            const fridgeUsage =
                Number(
                    document.getElementById(
                        "fridgeUsage"
                    ).value
                );


            const washingCycles =
                Number(
                    document.getElementById(
                        "washingCycles"
                    ).value
                );


            const otherUnits =
                Number(
                    document.getElementById(
                        "otherUnits"
                    ).value
                );


            // --------------------------------------
            // ESTIMATED MONTHLY ENERGY
            // --------------------------------------

            const acUnits =
                1.5 *
                acHours *
                30;


            const fanUnits =
                0.07 *
                fanCount *
                fanHours *
                30;


            const tvUnits =
                0.10 *
                tvHours *
                30;


            const lightUnits =
                0.01 *
                lightCount *
                lightHours *
                30;


            const fridgeUnits =
                fridgeUsage *
                30;


            const washingUnits =
                0.5 *
                washingCycles *
                4.33;


            const other =
                Math.max(
                    0,
                    otherUnits
                );


            /*
                Small household adjustment.

                Family members are not directly multiplied
                into the total because appliance usage is
                already entered separately.

                We use a small shared-use adjustment only.
            */

            const familyAdjustment =
                Math.max(
                    0,
                    familyMembers - 4
                ) * 2;


            const total =
                acUnits +
                fanUnits +
                tvUnits +
                lightUnits +
                fridgeUnits +
                washingUnits +
                other +
                familyAdjustment;


            const roundedTotal =
                Math.round(total);


            // --------------------------------------
            // ESTIMATED BILL
            // --------------------------------------

            /*
                This is an illustrative project estimate.

                Default energy rate:
                ₹8 per kWh

                Fixed charge:
                ₹100

                Actual electricity tariffs vary by
                location, provider and billing slab.
            */

            const ratePerUnit = 8;

            const fixedCharge = 100;

            const estimatedBill =
                roundedTotal *
                ratePerUnit +
                fixedCharge;


            // --------------------------------------
            // DISPLAY
            // --------------------------------------

            document.getElementById(
                "estimatedUnits"
            ).textContent =
                formatNumber(
                    roundedTotal
                );


            document.getElementById(
                "estimatedBill"
            ).textContent =
                money(
                    estimatedBill
                );


            // --------------------------------------
            // BREAKDOWN
            // --------------------------------------

            const breakdown = [

                {
                    name: "Air Conditioner",
                    value: acUnits
                },

                {
                    name: "Fans",
                    value: fanUnits
                },

                {
                    name: "Television",
                    value: tvUnits
                },

                {
                    name: "Lights",
                    value: lightUnits
                },

                {
                    name: "Refrigerator",
                    value: fridgeUnits
                },

                {
                    name: "Washing Machine",
                    value: washingUnits
                },

                {
                    name: "Other Appliances",
                    value: other
                }

            ];


            renderBreakdown(
                breakdown,
                roundedTotal
            );


            createApplianceResultChart(
                breakdown
            );


            window.lastCalculation = {

                total:
                    roundedTotal,

                bill:
                    estimatedBill,

                breakdown:
                    breakdown,

                familyMembers:
                    familyMembers,

                acHours:
                    acHours,

                fanHours:
                    fanHours,

                tvHours:
                    tvHours

            };


            return window.lastCalculation;

        }
// ==========================================
        // DISPLAY BREAKDOWN
        // ==========================================

        function renderBreakdown(
            breakdown,
            total
        ) {

            const container =
                document.getElementById(
                    "breakdownList"
                );


            if (!container) return;


            container.innerHTML = "";


            breakdown.forEach(item => {

                const percentage =
                    total > 0
                        ? (
                            item.value /
                            total
                        ) * 100
                        : 0;


                const div =
                    document.createElement(
                        "div"
                    );


                div.className =
                    "breakdown-item";


                div.innerHTML = `

                    <span>
                        ${item.name}
                    </span>

                    <strong>
                        ${Math.round(item.value)} kWh
                        (${percentage.toFixed(0)}%)
                    </strong>

                `;


                container.appendChild(div);

            });

        }



        // ==========================================
        // RESULT PIE CHART
        // ==========================================

        function createApplianceResultChart(
            breakdown
        ) {

            const canvas =
                document.getElementById(
                    "applianceResultChart"
                );


            if (!canvas) return;


            if (applianceResultChart) {

                applianceResultChart.destroy();

            }


            applianceResultChart =
                new Chart(canvas, {

                    type: "doughnut",

                    data: {

                        labels:
                            breakdown.map(
                                x => x.name
                            ),

                        datasets: [{

                            data:
                                breakdown.map(
                                    x =>
                                        Math.round(
                                            x.value
                                        )
                                ),

                            backgroundColor: [

                                "#7c3aed",

                                "#06b6d4",

                                "#f59e0b",

                                "#ec4899",

                                "#10b981",

                                "#ef4444",

                                "#6366f1"

                            ]

                        }]

                    },

                    options: {

                        responsive: true,

                        maintainAspectRatio:
                            false,

                        plugins: {

                            legend: {

                                position:
                                    "bottom"

                            }

                        }

                    }

                });

        }



        // ==========================================
        // CALCULATE BUTTON
        // ==========================================

        const calculateBtn =
            document.getElementById(
                "calculateBtn"
            );


        if (calculateBtn) {

            calculateBtn.addEventListener(
                "click",
                function () {

                    calculateApplianceUsage();


                    const resultSection =
                        document.getElementById(
                            "calculatorResult"
                        );


                    if (resultSection) {

                        resultSection.scrollIntoView({

                            behavior:
                                "smooth"

                        });

                    }

                }
            );

        }



        // ==========================================
        // HIGH BILL COMPARISON
        // ==========================================

        const compareBillBtn =
            document.getElementById(
                "compareBillBtn"
            );


        if (compareBillBtn) {

            compareBillBtn.addEventListener(
                "click",
                function () {

                    compareActualBill();

                }
            );

        }



        function compareActualBill() {

            const actual =
                Number(
                    document.getElementById(
                        "actualBill"
                    ).value
                );


            const result =
                document.getElementById(
                    "billComparison"
                );


            if (!actual || actual <= 0) {

                result.innerHTML = `

                    <div class="comparison-warning">

                        ⚠️ Please enter your actual
                        electricity bill.

                    </div>

                `;

                return;

            }


            if (!window.lastCalculation) {

                calculateApplianceUsage();

            }


            const estimated =
                window.lastCalculation.bill;


            const difference =
                actual -
                estimated;


            const percentage =
                estimated > 0
                    ? (
                        difference /
                        estimated
                    ) * 100
                    : 0;


            if (difference > 0) {

                result.innerHTML = `

                    <div class="comparison-warning">

                        <strong>
                            ⚠️ Your actual bill is higher
                            than the estimated bill.
                        </strong>

                        <br><br>

                        Estimated:
                        ${money(estimated)}

                        <br>

                        Actual:
                        ${money(actual)}

                        <br>

                        Difference:
                        ${money(Math.abs(difference))}
                        higher
                        (${Math.abs(percentage).toFixed(1)}%)

                        <br><br>

                        This can happen because of different
                        electricity tariffs, fixed charges,
                        taxes, billing slabs, additional
                        appliances or electricity usage that
                        was not entered in the calculator.

                    </div>

                `;


                showHighBillReasons();

            }

            else {

                result.innerHTML = `

                    <div class="comparison-success">

                        <strong>
                            ✅ Your actual bill is close to
                            or below the EnergyScope estimate.
                        </strong>

                        <br><br>

                        Estimated:
                        ${money(estimated)}

                        <br>

                        Actual:
                        ${money(actual)}

                    </div>

                `;

            }

        }



        // ==========================================
        // HIGH BILL REASONS
        // ==========================================

        function showHighBillReasons() {

            if (!window.lastCalculation)
                return;


            const data =
                window.lastCalculation;


            const reasons = [];


            if (data.acHours >= 5) {

                reasons.push(
                    "❄️ High AC usage may be a major contributor."
                );

            }


            if (data.fanHours >= 10) {

                reasons.push(
                    "🌀 Fans are being used for long hours."
                );

            }


            if (data.tvHours >= 7) {

                reasons.push(
                    "📺 Television usage is relatively high."
                );

            }


            if (data.total >= 250) {

                reasons.push(
                    "⚡ Overall estimated consumption is high."
                );

            }


            if (
                data.familyMembers >= 6
            ) {

                reasons.push(
                    "👨‍👩‍👧 A larger household can result in greater appliance usage."
                );

            }


            reasons.push(
                "🔌 Standby appliances and devices can add additional consumption."
            );


            reasons.push(
                "💰 Your actual tariff may be different from the project's illustrative ₹8/kWh estimate."
            );


            const result =
                document.getElementById(
                    "billComparison"
                );


            result.innerHTML += `

                <div class="comparison-warning"
                     style="margin-top:12px;">

                    <strong>
                        🔍 Possible Reasons
                    </strong>

                    <br><br>

                    ${reasons.join(
                        "<br><br>"
                    )}

                </div>

            `;

        }



        // ==========================================
        // INITIALIZE SAMPLE DASHBOARD
        // ==========================================

        createSurveyChart();

        createConsumptionChart();

        createCategoryChart();

        createApplianceChart();

        createFamilyChart();

        renderTable();


        // ==========================================
        // DEMO PREDICTION
        // ==========================================

        const demoValues =
            monthlyTrend
                .slice(-3)
                .map(
                    item => item.units
                );


        const demoPrediction =
            calculatePrediction(
                demoValues
            );


        const heroPrediction =
            document.getElementById(
                "heroPrediction"
            );


        if (heroPrediction) {

            heroPrediction.textContent =
                demoPrediction +
                " kWh";

        }


        console.log(
            "EnergyScope loaded successfully."
        );


        console.log(
            "Demo next-month prediction:",
            demoPrediction,
            "kWh"
        );


    }

    catch (error) {

        console.error(
            "EnergyScope Error:",
            error
        );

    }

});