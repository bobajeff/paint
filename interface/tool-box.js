import html from './tool-box.html';
const template = document.createElement('template')

        template.innerHTML = html;
        class ToolBox extends HTMLElement {

            $(selector) {
                return this.shadowRoot && this.shadowRoot.querySelector(selector)
            }

            constructor() {
                super()
                if (!this.shadowRoot) {
                    this.attachShadow({ mode: 'open' })
                    this.shadowRoot.appendChild(template.content.cloneNode(true))
                }
            }
        }

        customElements.define('tool-box', ToolBox)
