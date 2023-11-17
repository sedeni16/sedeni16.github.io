class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <header class="primary-header">
      <div class="container">
        <div class="nav-wrapper">
          <a href="index.html"><img src="images/logov5.svg" alt=""></a>
          <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
            <img class="icon-hamburger" src="images/icon-hamburger.svg" alt="" aria-hidden="true">
            <img class="icon-close" src="images/icon-close.svg" alt="" aria-hidden="true">
            <span class="visually-hidden">Menu</span>
          </button>
          <nav class="primary-navigation" id="primary-navigation">
            <ul aria-label="Primary" role="list" class="nav-list">
              <li id="sub-nav-active">
                <a href="#">Explore</a>
                <div class="sub-nav-list">
                  <ul role="list" class="nav-list">
                    <li><a href="application.html">Applications</a></li>
                    <!-- <li><a href="videoresources.html">Video Resources</a></li> -->
                    <li><a href="digitalcalculator.html">Digital Calculator</a></li>
                    <li><a href="equation.html">Equation Writer</a></li>
                    <li><a href="pdfmaterials.html">PDF Teaching Materials</a></li>
                    <li><a href="presentation.html">Presentation Software</a></li>
                    <li><a href="quizapp.html">Quiz Applications</a></li>
                    <li><a href="aiapp.html">AI Applications</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">Calculator</a>
                <div class="sub-nav-list">
                  <ul role="list" class="nav-list">
                    <li><a href="#">Scientific Calculator</a></li>
                    <li><a href="#">Graphing Calculator</a></li>
                    <li><a href="#">Calculus Solver</a></li>
                    <li><a href="#">Unit Conversion</a></li>
                    <li><a href="#">Fraction</a></li>
                    <!-- <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li> -->
                  </ul>
                </div>
              </li>
              <li><a href="#">Testimonial</a></li>
              <li><a href="#">About us</a></li>
              <!-- <li><a href="#">About Us</a></li> -->
            </ul>
          </nav>
          <!-- <button class="button | display-sm-none display-md-inline-flex">Get Started</button> -->
        </div>
      </div>
    </header>
      `;
    }
  }
  class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
      <footer class="primary-footer | padding-block-700 bg-neutral-900 text-neutral-100">
      <div class="container">
        <div class="even-columns">
          <div>
            <a href="#">
              <svg class="logo">
                <use xlink:href="images/logov5-white.svg#logov5-white"></use>
              </svg>
            </a>
            <ul class="social-list" role="list" aria-label="Social links">
              <li><a aria-label="facebook" href="">
                <svg class="social-icon">
                  <use href="images/social-icons.svg#icon-facebook"></use>
                </svg>
              </a></li>
              <li><a aria-label="youtube" href="">
                <svg class="social-icon">
                  <use href="images/social-icons.svg#icon-youtube"></use>
                </svg>
              </a></li>
              <li><a aria-label="twitter" href="">
                <svg class="social-icon">
                  <use href="images/social-icons.svg#icon-twitter"></use>
                </svg>
              </a></li>
              <li><a aria-label="pinterest" href="">
                <svg class="social-icon">
                  <use href="images/social-icons.svg#icon-pinterest"></use>
                </svg>
              </a></li>
              <li><a aria-label="instagram" href="">
                <svg class="social-icon">
                  <use href="images/social-icons.svg#icon-instagram"></use>
                </svg>
              </a></li>
            </ul>
          </div>
          <div>
            <nav class="footer-nav">
              <ul class="flow flow-spacer" aria-label="footer" role="list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </nav>
          </div>
          <div>
            <form action="">
              <input type="email"><button class="button">Go</button>
              <p>Copyright 2023. All Right Reserve</p>
            </form>
          </div>
        </div>
      </div>
    </footer>   
      `;
    }
  }

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);