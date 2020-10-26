import {ExcelComponent} from '@core/ExcelComponent';

export class Table extends ExcelComponent {
    static className = 'excel__table'

    toHTML() {
        return `
        <div class="row">
\t\t\t\t
\t\t\t\t<div class="row-info"></div>
\t\t\t\t
\t\t\t\t<div class="row-data">
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tA
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tB
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tC
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tA
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tB
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tC
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tA
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tB
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tC
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tA
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tB
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tC
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tA
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tB
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tC
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tA
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tB
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tC
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tA
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tB
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tC
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tA
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tB
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tC
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tA
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tB
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tC
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tA
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tB
\t\t\t\t\t</div>
\t\t\t\t\t<div class="column">
\t\t\t\t\t\tC
\t\t\t\t\t</div>
\t\t\t\t
\t\t\t\t</div>
\t\t\t
\t\t\t</div>
\t\t\t
\t\t\t<div class="row">
\t\t\t\t<div class="row-info">
\t\t\t\t\t1
\t\t\t\t</div>
\t\t\t\t
\t\t\t\t<div class="row-data">
\t\t\t\t\t<div class="cell selected" contenteditable="">A1</div>
\t\t\t\t\t<div class="cell" contenteditable="">B2</div>
\t\t\t\t\t<div class="cell" contenteditable="">C3</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t\t
\t\t\t<div class="row">
\t\t\t\t<div class="row-info">
\t\t\t\t\t2
\t\t\t\t</div>
\t\t\t\t
\t\t\t\t<div class="row-data">
\t\t\t\t\t<div class="cell">A1</div>
\t\t\t\t\t<div class="cell">B2</div>
\t\t\t\t\t<div class="cell">C3</div>
\t\t\t\t</div>
\t\t\t</div>
        `
    }
}
