const householdData = [

    { id:"H01", members:1, ac:0, fan:5, tv:1, washing:0, fridge:1, units:82, bill:610 },

    { id:"H02", members:2, ac:2, fan:5, tv:2, washing:2, fridge:1, units:128, bill:890 },

    { id:"H03", members:3, ac:1, fan:6, tv:2, washing:2, fridge:1, units:142, bill:970 },

    { id:"H04", members:4, ac:3, fan:6, tv:3, washing:3, fridge:1, units:188, bill:1260 },

    { id:"H05", members:5, ac:3, fan:7, tv:3, washing:3, fridge:1, units:207, bill:1370 },

    { id:"H06", members:6, ac:4, fan:7, tv:4, washing:4, fridge:1, units:242, bill:1570 },

    { id:"H07", members:2, ac:1, fan:4, tv:1, washing:1, fridge:1, units:108, bill:760 },

    { id:"H08", members:3, ac:2, fan:5, tv:2, washing:2, fridge:1, units:154, bill:1050 },

    { id:"H09", members:4, ac:2, fan:6, tv:2, washing:3, fridge:1, units:171, bill:1160 },

    { id:"H10", members:7, ac:5, fan:8, tv:4, washing:5, fridge:1, units:286, bill:1810 },

    { id:"H11", members:1, ac:1, fan:4, tv:1, washing:0, fridge:1, units:96, bill:690 },

    { id:"H12", members:5, ac:2, fan:6, tv:3, washing:3, fridge:1, units:194, bill:1310 },

    { id:"H13", members:3, ac:1, fan:5, tv:2, washing:2, fridge:1, units:136, bill:930 },

    { id:"H14", members:4, ac:4, fan:6, tv:3, washing:3, fridge:1, units:214, bill:1420 },

    { id:"H15", members:6, ac:3, fan:7, tv:4, washing:4, fridge:1, units:239, bill:1550 },

    { id:"H16", members:2, ac:0, fan:5, tv:1, washing:1, fridge:1, units:101, bill:720 },

    { id:"H17", members:3, ac:2, fan:5, tv:2, washing:2, fridge:1, units:151, bill:1030 },

    { id:"H18", members:5, ac:4, fan:7, tv:3, washing:4, fridge:1, units:226, bill:1480 },

    { id:"H19", members:4, ac:2, fan:6, tv:3, washing:2, fridge:1, units:176, bill:1190 },

    { id:"H20", members:7, ac:6, fan:8, tv:5, washing:5, fridge:1, units:310, bill:1930 },

    { id:"H21", members:1, ac:0, fan:4, tv:1, washing:0, fridge:1, units:76, bill:570 },

    { id:"H22", members:2, ac:2, fan:5, tv:2, washing:1, fridge:1, units:121, bill:850 },

    { id:"H23", members:3, ac:3, fan:6, tv:2, washing:2, fridge:1, units:166, bill:1130 },

    { id:"H24", members:4, ac:3, fan:6, tv:3, washing:3, fridge:1, units:195, bill:1320 },

    { id:"H25", members:6, ac:5, fan:7, tv:4, washing:4, fridge:1, units:267, bill:1710 },

    { id:"H26", members:5, ac:2, fan:7, tv:3, washing:3, fridge:1, units:203, bill:1340 },

    { id:"H27", members:2, ac:1, fan:4, tv:2, washing:1, fridge:1, units:116, bill:820 },

    { id:"H28", members:3, ac:0, fan:6, tv:2, washing:2, fridge:1, units:129, bill:890 },

    { id:"H29", members:4, ac:4, fan:6, tv:3, washing:3, fridge:1, units:209, bill:1390 },

    { id:"H30", members:7, ac:5, fan:8, tv:4, washing:5, fridge:1, units:294, bill:1860 },

    { id:"H31", members:1, ac:0, fan:5, tv:1, washing:0, fridge:1, units:88, bill:650 },

    { id:"H32", members:2, ac:3, fan:5, tv:2, washing:1, fridge:1, units:139, bill:950 },

    { id:"H33", members:5, ac:3, fan:7, tv:3, washing:3, fridge:1, units:218, bill:1440 },

    { id:"H34", members:4, ac:1, fan:6, tv:2, washing:2, fridge:1, units:159, bill:1080 },

    { id:"H35", members:6, ac:4, fan:8, tv:4, washing:4, fridge:1, units:255, bill:1650 },

    { id:"H36", members:3, ac:1, fan:5, tv:2, washing:2, fridge:1, units:145, bill:990 },

    { id:"H37", members:5, ac:4, fan:7, tv:4, washing:4, fridge:1, units:231, bill:1510 },

    { id:"H38", members:2, ac:0, fan:5, tv:1, washing:1, fridge:1, units:105, bill:750 },

    { id:"H39", members:6, ac:5, fan:7, tv:4, washing:5, fridge:1, units:276, bill:1760 },

    { id:"H40", members:3, ac:2, fan:6, tv:2, washing:2, fridge:1, units:153, bill:1040 }

];



/*
    Historical sample data.

    December is NOT included here.

    The interactive predictor will calculate
    the next month from three values entered
    by the user.
*/

const monthlyTrend = [

    { month:"Jan", units:162 },

    { month:"Feb", units:157 },

    { month:"Mar", units:171 },

    { month:"Apr", units:190 },

    { month:"May", units:218 },

    { month:"Jun", units:207 },

    { month:"Jul", units:181 },

    { month:"Aug", units:176 },

    { month:"Sep", units:170 },

    { month:"Oct", units:184 },

    { month:"Nov", units:168 }

];