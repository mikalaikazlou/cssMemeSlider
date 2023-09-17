const btns = document.querySelectorAll('.pagination_btn_item');
const meme_sl_item = document.querySelectorAll('.meme_item');
const btn_slider = document.querySelectorAll('.btn');
const text_content = document.querySelectorAll('.text_content');

function removeActiveClass(obj, className) {
    obj.forEach((e) => {
        e.classList.remove(className);
    });
}

function getPositionChild(obj) {
    if (obj.classList.contains('first')) {
        return 1;
    }
    else if(obj.classList.contains('second')){
        return 2;
    }
    else if(obj.classList.contains('third')){
        return 3;
    }
    else if(obj.classList.contains('fourth')){
        return 4;
    }
}

function addActiveClassForChaildNth(positionChaid) {
    removeActiveClass(meme_sl_item, 'active_slide');
    removeActiveClass(btn_slider, 'active_btn');
    removeActiveClass(text_content, 'active_text');

    let classNameSliderBtn =`div.pagination_meme :nth-child(${positionChaid}) > div.btn`;
    let classNameSlider =`div.meme_list :nth-child(${positionChaid})`;
    let classNameText =`div.text_meme :nth-child(${positionChaid})`;

    document.querySelector(classNameSlider).classList.add('active_slide');
    document.querySelector(classNameSliderBtn).classList.add('active_btn');
    document.querySelector(classNameText).classList.add('active_text');
}

btns.forEach((e) => {
    e.addEventListener('click', () => {
        let numberElem = getPositionChild(e);
        addActiveClassForChaildNth(numberElem);

    })
})