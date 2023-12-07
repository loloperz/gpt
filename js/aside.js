class Aside extends HTMLElement {

    constructor() {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
    }
  
    connectedCallback() {
      this.render()
    }
  
    render() {
      this.shadow.innerHTML =
        /*html*/`
          <style>
            
            aside{
                background-color: hsl(0, 0%, 0%);
                max-width: 235px;
                min-width: 235px;
                height: 100%;
                }

          </style>
              
            <aside>
                <section>
                    <slot name="new-chat"><slot>
                </section>
                <section>
                    <slot name="history"></slot>
                </section>
                    <slot name="user-login"></slot>
            </aside>
                    
             
         
        `   
        
     
  
      
    }
      
  }
  
  customElements.define('aside-component', Aside);