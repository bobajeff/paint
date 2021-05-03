function tool_tap(){
    console.log()
}
import html from './tool-box.html';
const template = document.createElement('template')


var tool_list;
var focused_tool;
var add_tool;
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
        tool_list = this.$('.tool-list');
        this.addplusbutton();
        this.addtool("./res/low_res_pen.webp", "pen");
        this.addtool("./res/low_res_pen.webp", "pen");

    }
    buttonpress(btn) {
        console.log(btn.className + " tapped");
        if (btn.className != "add-tool" && btn.className != "tool-focused")
        {
            if (focused_tool)
            {focused_tool.className = "tool"}
            btn.className = "tool-focused";
            focused_tool = btn;
        }
        if (btn.className == "add-tool"){
            this.addtool("./res/low_res_pen.webp", "pen");
        }
    }
    addtool(imageaddr, name) {
        const img = document.createElement("img");
        img.src = imageaddr;
        img.alt = name;
        const button = document.createElement("button");
        button.className = "tool";
        button.addEventListener('click', ()=>{this.buttonpress(button)}, false);
        button.appendChild(img);        
        tool_list.insertBefore(button, add_tool.nextSibling);
    }
    addplusbutton() {
        const plus = document.createElement("button");
        plus.className = "add-tool";
        plus.addEventListener('click', ()=>{this.buttonpress(plus)}, false);
        plus.textContent = "+"
        tool_list.appendChild(plus);
        add_tool = plus;

    }
}

customElements.define('tool-box', ToolBox)


