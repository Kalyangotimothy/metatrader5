<?php
ob_start();
error_reporting(0);
include "../functions/csrf.php";
?>
<!DOCTYPE html>
<html lang="zxx" class="js">
<head>
<meta charset="utf-8">
<meta name="author" content="Softnio">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="A powerful and conceptual apps base dashboard template that especially builds for developers and programmers.">
<link rel="shortcut icon" href="images/favicon.png">
<title>Giant Hunter - Forex Pro Trading Bot</title>
<link rel="stylesheet" href="assets/css/dashlite19ce.css?ver=3.0.3">
<link rel="stylesheet" href="css/preloader.css"/>
<link rel="stylesheet" href="css/toastr.min.css"/>
<style>
/* Global Styling */
body {
    background-image: linear-gradient(#000000b3, #000000b3), url(../Images/bg2.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
}
.card {
    background-color: transparent!important;
/*}*/
/*.card-header {*/
/*    background-color: #4797ff;*/
}
.heading-container {
    text-align: center;
    margin-bottom: 20px;
}
.heading {
    font-weight: bold;
    display: inline-block;
}
#headingNumber {
    font-size: 30px; /* Matching the size of USD */
    color: white;
}
.heading-usd {
    font-size: 30px; /* Matching the size of the total balance */
    color: white;
}

/* Red Card Styling for the Total Balance */
.red-card {
    background-color: #4797ff;
    color: white;
    padding: 10px 15px;  /* Reduced the padding */
    font-size: 1.5rem;    /* Adjusted the font size of the container */
    border-radius: 8px;
    margin-bottom: 20px;
    text-align: center;
}

/* Table Styling */
table {
    width: 100%;
    border-collapse: collapse;
    border: 2px solid #559bfb;
    background-color: transparent; /* Removed the background color */
}
th, td {
    border: 1px solid #559bfb;
    padding: 8px;
    text-align: left;
    color: white;
}
th {
    background-color: transparent; /* Removed the background color */
}

/* Specific column adjustments */
th:nth-child(1), td:nth-child(1) {
    width: 150px; /* Reduced width of the "Pair" column */
}
th:nth-child(2), td:nth-child(2) {
    width: 100px; /* Increased width of the "Lot Size" column */
}
.buy {
    color: #4797ff;
}
.sell {
    color: red;
}
</style>
</head>
<body class="nk-body npc-crypto bg-white has-sidebar">

<!-- Preloader -->
<div id="preloader">
    <div class="spinner"><img class="loading-image" src="../../image/loader.gif"></div>
</div>

<div class="nk-app-root">
<div class="nk-main">
<?php include "sidebar2.php"; ?>
<div class="nk-wrap">
<?php include "header2.php"; ?>
<div class="nk-content nk-content-fluid">
<div class="container-xl wide-lg">
<div class="nk-content-body">
<div class="row">
<div class="col-xxl-3 col-xl-12 col-lg-12" id="trade">
<div class="card-header" style="margin-bottom: 20px;">

<!-- Total Balance in Red Card -->
<div class="red-card" id="headingContainer">
  <span id="headingNumber">0</span> <span>USD</span> <!-- Total balance with USD text -->
</div>

<!-- Trading Table -->
<table id="profitTable">
  <thead>
    <tr>
      <th style="width: 150px;"><b>Pair</b></th> <!-- Adjusted column width -->
      <th style="width: 100px;"><b>Lot Size</b></th> <!-- Adjusted column width -->
      <th style="text-align: center;"><b>Profit</b></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>XAU/USD <span class="sell">sell</span></td>
      <td>0.35</td>
      <td style="text-align: center;" id="profit1">$168.45</td>
    </tr>
      <td>XAU/USD <span class="sell">sell</span></td>
      <td>0.35</td>
      <td style="text-align: center;" id="profit2">$168.45</td>
    </tr>
    <tr>
      <td>XAU/USD <span class="sell">sell</span></td>
      <td>0.35</td>
      <td style="text-align: center;" id="profit3">$168.45</td>
    </tr>
      <td>XAU/USD<span class="sell">sell</span></td>
      <td>0.35</td>
      <td style="text-align: center;" id="profit4">$168.45</td>
    </tr>
    <tr>
      <td>XAU/USD <span class="sell">sell</span></td>
      <td>0.35</td>
      <td style="text-align: center;" id="profit5">$168.45</td>
    </tr>
      <td>XAU/USD <span class="sell">sell</span></td>
      <td>0.35</td>
      <td style="text-align: center;" id="profit6">$168.45</td>
    </tr>
    <tr>
      <td>USD/JPY <span class="buy">buy</span></td>
      <td>0.15</td>
      <td style="text-align: center;" id="profit7">$69.53</td>
    </tr>
    <tr>
      <td>USD/JPY <span class="buy">buy</span></td>
      <td>0.15</td>
      <td style="text-align: center;" id="profit8">$69.53</td>
    </tr>
    <tr>
      <td>USD/JPY <span class="buy">buy</span></td>
      <td>0.15</td>
      <td style="text-align: center;" id="profit9">$69.53</td>
    </tr>
    <tr>
      <td>USD/JPY <span class="buy">buy</span></td>
      <td>0.15</td>
      <td style="text-align: center;" id="profit10">$69.53</td>
    </tr>
    <tr>
      <td>USD/JPY <span class="buy">buy</span></td>
      <td>0.15</td>
      <td style="text-align: center;" id="profit11">$69.53</td>
    </tr>
    <tr>
      <td>USD/JPY <span class="buy">buy</span></td>
      <td>0.15</td>
      <td style="text-align: center;" id="profit12">$69.53</td>
    </tr>
    <tr>
      <td>USD/JPY <span class="buy">buy</span></td>
      <td>0.15</td>
      <td style="text-align: center;" id="profit13">$69.53</td>
    </tr>
    <tr>
      <td>USD/JPY <span class="buy">buy</span></td>
      <td>0.15</td>
      <td style="text-align: center;" id="profit14">$69.53</td>
    </tr>
    
  </tbody>
</table>

</div>
</div>
</div>
</div>
</div>
</div>
</div>

<?php include "footer2.php"; ?>
</div>
</div>
</div>

<!-- JavaScript -->
<script>
  function updateProfitAndTotal() {
    let totalProfit = 0;
    
    for (let i = 1; i <= 20; i++) {
      let profitElement = document.getElementById(`profit${i}`);
      if (!profitElement) continue;

      let currentProfit = parseFloat(profitElement.innerText.replace('$', ''));
      let change = (Math.random() < 0.5 ? 1 : -1) * (Math.random() * 5).toFixed(2);
      let newProfit = Math.max(10, (currentProfit + parseFloat(change))).toFixed(2);
      
      profitElement.innerText = `$${newProfit}`;
      totalProfit += parseFloat(newProfit);
    }

    // Update the total balance with USD text together
    document.getElementById('headingNumber').innerText = totalProfit.toFixed(2);
  }

  setInterval(updateProfitAndTotal, 800);
</script>

<script src="assets/js/bundle19ce.js?ver=3.0.3"></script>
<script src="assets/js/scripts19ce.js?ver=3.0.3"></script>
<script src="assets/js/demo-settings19ce.js?ver=3.0.3"></script>
<script src="vendor/common/common.min.js"></script>
<script src="js/index.js"></script>
<script type="module" src="js/demo_trade.js"></script>
<script>
$("#customSwitch1").change(function() {
    window.location = "crypto-trade";
});
</script>

</body>
</html>
