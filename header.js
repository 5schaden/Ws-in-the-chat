class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="topbar">
        <div class="brand">
          <a href="index.html">Dzulfiqar Galih Devara</a>
        </div>
        <nav class="nav">
          <a href="index.html">Home</a>
          <a href="writings.html">Writings</a>
          <a href="project.html">Projects</a>
          <a href="contact.html">Contact</a>
        </nav>
        <div class="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="mobile-menu">
          <a href="index.html">Home</a>
          <a href="writings.html">Writings</a>
          <a href="project.html">Projects</a>
          <a href="contact.html">Contact</a>
        </div>
      </div>
    `;

    const menuToggle = this.querySelector('.menu-toggle');
    const mobileMenu = this.querySelector('.mobile-menu');

    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }
}

customElements.define('site-header', SiteHeader);
