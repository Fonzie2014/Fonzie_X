<!-- Alphonse Mboumba
Main File HTML for Spending limite
update 1.7
08/15/17 -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
  <link rel="stylesheet" href="main.css">
  <script src="iTwinna.js" charset="utf-8"></script>
  <link rel="stylesheet" href="menubar.css">
  <title>Home page</title>
</head>
<body>
  <?php include "menubar.php" ?>
  <section>
    <h2 id="my-account-style"><a href="my_account_page.html">My Account</a></h2>
  </section>
  <section>
    <h2 id="starting-fresh-link"><a href="loginPage.html">Start Fresh</a></h2>
  </section>
  <section class="page-title-section-box">
    <h2 id="page-title-style">Spending Plan</h2>
    <!-- <marquee class="text-font-size" behavior="alternate" direction="left">Site Under Contractions</marquee> -->
  </section>
  <section class="date-paycheck-input">
      <p>Month:
        <time datetime="8-4-2017">
          <input type="datetime-local " name="" value="8/11/2017">
          <input type="datetime-local " name="" value="8/25/2017">
        </time>
      </p>
      <p >Monthly Income: $
        <input id="payCheckAmount" type="number"  name="" value="411.29">
      </p>
    </section>
    <!-- <section class="short-terms-goals-box">
    <figcaption class="fontSize" class="shortTerm">
      Short-Term financial goal for the month:
    </figcaption>
      <textarea name="shortTerm" rows="8" cols="34" autofocus></textarea>

  </section> -->
  <!-- <section> -->

    <aside class="asideBoxHelp">
      <p class="asideBoxPara">Help</p>
      <aside class="insideAsideBoxAside">
        <ul>
          <li class="asideBoxList"> <a class="asideBoxHelpLinks" href="about.html">About Me</a></li>
          <li class="asideBoxList"> <a class="asideBoxHelpLinks" href="Fonzie-I-Porject.html">Fonzie I Project</a></li>
          <li class="asideBoxList"> <a class="asideBoxHelpLinks" href="contact.html">Contact Me</a></li>
          <li class="asideBoxList"><a class="asideBoxHelpLinks" href="resume.html">Alphonse Resume</a></li>
        </ul>
      </aside>
    </aside>
  <!-- </section> -->

  <section class="table-section">
    <section>
      <form action="" method="get">
        <select name="" id="KindOfTables">
          <option value="1">Saving</option>
          <option value="2">Bills</option>
          <option value="3">Everyday use</option>
          <option value="4">Other</option>
        </select>
        <input id="itemName" maxlength="30" type="text" name="item-name" placeholder="Enter Item Name">
        <input id="itemAmount" max="100000" min="1" type="number" name="Amount" placeholder="$Amount">
      </form>
      <button onclick="myFunction()" onclick="btnClick()">Try it</button>
    </section>
    <table id="myTable1">
      <tr >
        <th id="saving-style" colspan="4">Saving</th>
      </tr>
      <tr>
        <th>Expense Name</th>
        <th>Amount Want Saving</th>
        <th>Amount Saved</th>
        <th>Amount in Saving</th>
      </tr>
      <tr>
        <td>Total</td>
        <td id="myTotal">1000</td>
        <td>1000</td>
        <td>1000</td>
      </tr>
  </table>
  <br>
  <table id="myTable2">
      <tr >
        <th id="bills-style" colspan="4">Bills</th>
      </tr>
      <tr>
        <th>Expense Name</th>
        <th>Amount Due</th>
        <th>Amount Paid</th>
        <th>Amount Remaining</th>
      </tr>
      <tr>
        <td>Total</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
    <table id="myTable3">
      <tr >
        <th id="everyday-use-style" colspan="4">EveryDay</th>
      </tr>
      <tr>
        <th>Expense Name</th>
        <th>Amount Due</th>
        <th>Amount Paid</th>
        <th>Amount Remaining</th>
      </tr>
      <tr>
        <td>Total</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
    <table id="myTable4">
      <tr >
        <th id="other-style" colspan="4">Other</th>
      </tr>
      <tr>
        <th>Expense Name</th>
        <th>Amount Due</th>
        <th>Amount Paid</th>
        <th>Amount Remaining</th>
      </tr>
      <tr>
        <td>Total</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </section>
  <section class="short-terms-goals-display">
    <aside class="">
      <marquee behavior="scroll" direction="right"> Your Short Term Goal will display bellow</marquee>
      <p class="short-term-box">Short Term Goal</p>
    </aside>
  </section>
  <aside class="">
    <ul>
      <li><a href="contact.html">Help</a></li>
      <li>|</li>
      <li><a href="#">FeedBack</a></li>
      <li>|</li>
      <li><a href="#">Privace Policy & Security</a></li>
      <li>|</li>
      <li><a href="#">Terms of Use</a></li>
      <li>|</li>
      <li><a href="#">Legal</a></li>
      <li>|</li>
      <li><a href="#">Site Map</a></li>
    </ul>
  </aside>
    <footer  id="WeekOneiTiwnna" class="footerBox">
      <ul>
        <li>Making Money Count</li>
        <li> | </li>
        <li>Start With A & B</li>
        <li> | </li>
        <li> &copy; 2017 Fonzie</li>
        <li> | </li>
        <li> I </li>
        <li> | </li>
        <li>Project</li>
        <li> | </li>
        <li>Power By</li>
        <li  class="iTwinna">iTwinna</li>
      </ul>
    </footer>
</body>
</html>









































<!--  -->
