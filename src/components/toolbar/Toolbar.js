import {ExcelComponent} from '@core/ExcelComponent';

export class Toolbar extends ExcelComponent {
    static className = 'excel__toolbar'

    toHTML() {
        return `
        <div class="button">
\t\t\t\t<i class="material-icons">format_align_left</i>
\t\t\t</div>
\t\t\t
\t\t\t<div class="button">
\t\t\t\t<i class="material-icons">format_align_center</i>
\t\t\t</div>
\t\t\t
\t\t\t<div class="button">
\t\t\t\t<i class="material-icons">format_align_right</i>
\t\t\t</div>
\t\t\t
\t\t\t<div class="button">
\t\t\t\t<i class="material-icons">format_bold</i>
\t\t\t</div>
\t\t\t
\t\t\t<div class="button">
\t\t\t\t<i class="material-icons">format_italic</i>
\t\t\t</div>
\t\t\t
\t\t\t<div class="button">
\t\t\t\t<i class="material-icons">format_underlined</i>
\t\t\t</div>
        `
    }
}
