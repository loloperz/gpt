class Aside extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();

    const toggleBtn = this.shadowRoot.querySelector('.toggle-btn');
    const sidebar = this.shadowRoot.querySelector('.sidebar');
    const arrows = this.shadowRoot.querySelectorAll('.arrow');

    toggleBtn.addEventListener('click', () => {
      this.active = !this.active;
      sidebar.classList.toggle('active', this.active);
      toggleBtn.classList.toggle("reversed")
      this.reversed = !this.reversed;
      arrows.forEach(arrow => arrow.classList.toggle('reversed', this.reversed));
    });
  }
  render() {
    this.shadowRoot.innerHTML =
      /*html*/ `
      <style>
        aside {
          background-color: hsl(0, 0%, 0%);
          max-width: 235px;
          min-width: 235px;
          height: 100%;
          transition: margin-left 0.5s;
          position: relative;
        }
        .sidebar.active {
          margin-left: -235px;
        }

        .toggle-btn {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 50%;
          cursor: pointer;
          background-color: transparent;
          border: none;
          padding: 0;
          right: -5em;
        }
        
        .arrow {
          width: 0.2rem;
          height: 1rem;
          background-color: #fff;
        }
        .toggle-btn:hover .arrow.reversed:first-child {
          transform: rotate(-15deg);
        }
        .toggle-btn:hover .arrow.reversed:last-child {
          transform:  rotate(15deg);
        }
        .arrow:first-child {
          border-radius: 1rem 1rem 0 0;
        }

        .arrow:last-child{
          border-radius: 0 0 1rem 1rem;
        }

        .toggle-btn:hover .arrow:first-child {
          transform: rotate(15deg);
          transform-origin: 0 100%;
        }

        .toggle-btn:hover .arrow:last-child {
          transform: rotate(-15deg);
          transform-origin: 0 0;
        }

      </style>
  
      <aside class="sidebar">
        <slot name="content"></slot>
        <button class="toggle-btn">
          <div class="arrow"></div>
          <div class="arrow"></div>
        </button>
      </aside>
      
    `
    
  }
}

customElements.define('aside-component', Aside);