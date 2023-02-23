$(function (){
    dropdown();
});

function dropdown() {

    const DROPDOWN = '[data-dropdown]'
    const DROPDOWN_LIST = '[data-dropdown-list]'
    const DROPDOWN_ARROW = '[data-dropdown-arrow]'
    const DROPDOWN_ACTION = '[data-dropdown-action]'
    const DROPDOWN_TITLE = '[data-dropdown-title]'
    const DROPDOWN_INPUT = '[data-dropdown-input]'
    const DROPDOWN_ITEM = 'dropdownItem'
    const OPEN_DROPDOWN = 'sdropdownOpen'

    class Dropdown {
        static attach() {
            const select = new Dropdown()
            select.init()
        }

        init() {
            if (this.findSelect()) {
            this.applyListener()
            }
        }

        applyListener() {
            document.querySelector('*').addEventListener('click', e => {
            const element = e.target.closest(DROPDOWN_ACTION)

            if (this.isCallSelectElement(element)) {
                if (this.isOpened()) {
                this.closeSelectList()
                } else {
                this.openSelectList()
                }
            }

            if (this.isCallSelectItemElement(element)) {
                this.addSelectedValue(element)
            }

            if (this.isCallSelectElement(element) !== true && this.selectOverlayIsClickedElement(element) !== true) {
                this.closeSelectList()
            }
            })
        }

        isCallSelectElement(element) {
            return element && OPEN_DROPDOWN in element.dataset
        }

        isCallSelectItemElement(element) {
            return element && DROPDOWN_ITEM in element.dataset
        }

        findSelect() {
            const select = document.querySelector(DROPDOWN)

            if (select) {
            this.select = select
            this.selectList = this.select.querySelector(DROPDOWN_LIST)
            this.selectArrow = this.select.querySelector(DROPDOWN_ARROW)
            this.selectTitle = this.select.querySelector(DROPDOWN_TITLE)
            this.selectInput = this.select.querySelector(DROPDOWN_INPUT)
            return true
            }
            return false
        }

        isOpened() {
            return this.selectList.classList.contains('dropdown__list_opened')
        }

        openSelectList() {
            this.selectList.classList.add('dropdown__list_opened')
            this.selectArrow.classList.add('dropdown__arrow_rotate')
        }

        closeSelectList() {
            this.selectList.classList.remove('dropdown__list_opened')
            this.selectArrow.classList.remove('dropdown__arrow_rotate')
        }

        addSelectedValue(element) {
            this.selectTitle.innerHTML = element.innerHTML
            this.selectInput.value = element.innerHTML
        }

        selectOverlayIsClickedElement(element) {
            return element && 'dropdown' in element.dataset
        }
    }

    Dropdown.attach()
}



