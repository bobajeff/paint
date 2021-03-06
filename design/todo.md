### Plan for project

- [x] mock up smarphone interface
    - [x] workout the interface for planned features
    - [x] polish the brush settings and selection ui
        - [x] mock up a quick action buttons for the tools in the toolbox
    - [x] mock up low-level settings interface
    - [x] polish quick action buttons (for layers and tools)
        - maybe move them up at the top with the normal buttons as context buttons
    - [x] polish normal buttons 
    - [x] polish up Brush Dynamic Presets Menu & Brush Selection Menu
    - [x] figure out how non-brush/pen tools fit in with the ui
    - [x] mock up undo/redo in the ui
- [ ] Prototype Interface
    - [x] Start webpack/node project
    - [ ] Implement frontend from mockup
        - [ ] Implemnet single page app
            - [ ] Use router to handle navigation through the app
                - [ ] Make editing page
                    - [ ] Make Toolbox
                        - make tools selectable on long_press
                        - make tool give visual feedback when pressed
                        - make tool get focus if tapped on it (and other tool lose focus)
                    - [ ] Make Top row of buttons
                        - Menu
                        - undo
                        - redo
                        - layers
                - [ ] Make editing/menu page
                - [ ] Make editing/layers page
                - [ ] Make editing/tool_selection page
                - [ ] Make editing/brush_settings page
- [ ] Implement base features
    - [ ] Start a base wasmgen project
    - [ ] Implement drawing to canvas
    - [ ] Implement layers
    - [ ] Undo / redo
    - [ ] Save
    - [ ] Import