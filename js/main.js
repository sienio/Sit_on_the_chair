document.addEventListener('DOMContentLoaded', function() {

    var comboBox = document.querySelectorAll('.drop_down_list');
    var lists = document.querySelectorAll('.list_panel');
    var transportChk = document.querySelector('#transport');
    var summaryPanelLeft = document.querySelector('.panel_left');
    var summaryPanelRight = document.querySelector('.panel_right');
    var sum = document.querySelector('.sum').firstElementChild;
    var arr = ['', 0, '', 0, '', 0, '', 0];

    for (var i = 0, len = comboBox.length; i < len; i++) {

        var label = comboBox[i].querySelector('.list_label');
        var arrow = comboBox[i].querySelector('.list_arrow');
        var listItems = comboBox[i].querySelectorAll('li');

        arrow.addEventListener('click', showListItems);

        for (var j = 0, liLen = listItems.length; j < liLen; j++) {

            listItems[j].addEventListener('mouseover', mouseOver);
            listItems[j].addEventListener('mouseout', mouseOut);
            listItems[j].addEventListener('click', selectedItems);
        }
    }

    transportChk.addEventListener('click', chkChecked);

    //funkcja pokazująca listę elementów dropa
    function showListItems() {
        if (!this.parentElement.lastElementChild.classList.contains('show')) {
            for (var j = 0, len2 = lists.length; j < len2; j++) {
                lists[j].classList.remove('show');
            }
            this.parentElement.lastElementChild.classList.add('show');
        } else {
            this.parentElement.lastElementChild.classList.remove('show');
        }
    }

    function mouseOver() {
        this.style.color = 'white';
        this.style.background = '#24ba9f';
    }

    function mouseOut() {
        this.style.color = '';
        this.style.background = '';
    }

    function selectedItems() {
        this.parentElement.classList.remove('show');

        var chairTitle = comboBox[0].children[0];
        var chairColor = comboBox[1].children[0];
        var chairPatern = comboBox[2].children[0];

        if (this.dataset.order === '1') {
            arr[0] = this.dataset.type;
            arr[1] = Number(this.dataset.typePrice);
            chairTitle.innerText = arr[0];
            chairTitle.style.color = '#000';
            summaryPanelLeft.children[0].innerText = arr[0];
            summaryPanelRight.children[0].innerText = arr[1];
        }

        if (this.dataset.order === '2') {
            arr[2] = this.dataset.color;
            arr[3] = Number(this.dataset.colorPrice);
            chairColor.innerText = arr[2];
            chairColor.style.color = '#000';
            summaryPanelLeft.children[1].innerText = arr[2];
            summaryPanelRight.children[1].innerText = arr[3];
        }

        if (this.dataset.order === '3') {
            arr[4] = this.dataset.pattern;
            arr[5] = Number(this.dataset.patternPrice);
            chairPatern.innerText = arr[4];
            chairPatern.style.color = '#000';
            summaryPanelLeft.children[2].innerText = arr[4];
            summaryPanelRight.children[2].innerText = arr[5];
        }

        sum.innerText = total() + ' zł';

    }

    function chkChecked() {

        if (transportChk.checked) {
            arr[6] = this.parentElement.lastElementChild.innerText;
            arr[7] = Number(this.dataset.transportPrice);
            summaryPanelLeft.children[3].innerText = arr[6];
            summaryPanelRight.children[3].innerText = arr[7];
        } else {
            arr[6] = '';
            arr[7] = 0;
            summaryPanelLeft.children[3].innerText = '';
            summaryPanelRight.children[3].innerText = '';
        }

        sum.innerText = total() + ' zł';
    }

    function total() {
        var totalPrice = arr[1] + arr[3] + arr[5] + arr[7];
        return totalPrice;
    }
})
