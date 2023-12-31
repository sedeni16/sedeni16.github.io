class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <header class="nav-header container padding-block-600">
      <div class="nav-logo"><a href="index.html"><img src="images/logov5.svg" alt=""></a></div>
      <nav>
        <ul class="nav-list">
          <li><a href="index.html">Home</a></li>
          <li id="sub-nav-active">
            <a href="#">Explore</a>
            <div class="sub-nav-list">
              <ul role="list" class="sub-nav-list">
                <li><a href="applications.html">Applications</a></li>
                <li><a href="video.html">Video Resources</a></li>
                <li><a href="equation.html">Equation Writer</a></li>
                <li><a href="presentation.html">Presentation Software</a></li>
                <li><a href="quizapp.html">Quiz Applications</a></li>
                <li><a href="aiapp.html">AI Applications</a></li>
              </ul>
            </div>
          </li>
          <li><a href="digitalcalculator.html">Calculus Calculator</a></li>
          <li><a href="about.html">About us</a></li>
        </ul>
      </nav>
    </header>
      `;
    }
  }
  class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
      <footer>
      <div class="content">
        <div class="top">
          <div class="logo-details">
            <span class="logo_name">Calcutech</span>
          </div>
          <div class="media-icons">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
        <div class="link-boxes">
          <ul class="box">
          <li class="link_name">Explore</li>
          <li><a href="applications.html">Math Applications</a></li>
          <li><a href="digitalcalculator.html">Digital Calculator</a></li>
          <li><a href="equation.html">Equation Writer</a></li>
          <li><a href="presentation.html">Presentation Software</a></li>
          </ul>
          <ul class="box">
            <li class="link_name">Application</li>
            <li><a href="quizapp.html">Quiz Applications</a></li>
            <li><a href="aiapp.html">AI Applications</a></li>
            <li><a href="applications.html">Math Applications</a></li>
          </ul>
          <ul class="box">
            <li class="link_name">Calculator</li>
            <li><a href="#">Microsoft Math Solver</a></li>
            <li><a href="#">Derivative Calculator</a></li>
            <li><a href="#">Integral Calculator</a></li>
            <li><a href="#">Graphing Calculator</a></li>
          </ul>
        </div>
      </div>
      <div class="bottom-details container">
        <div class="bottom_text">
          <span class="copyright_text">Copyright © 2021 <a href="#">CalcuTech.</a>All rights reserved</span>
          <span class="policy_terms">
            <a href="#">Privacy policy</a>
            <a href="#">Terms & condition</a>
          </span>
        </div>
      </div>
    </footer>
      `;
    }
  }

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);