let cajaPrincipal = document.querySelector('#caja');

/* ESTILOS CSS PARA EL USUARIO*/

let estilosSombra = document.querySelector('#estilosSombra');
let estilosWidth = document.querySelector('#estilosWidth');
let estilosHeight = document.querySelector('#estilosHeight');
let estilosBc = document.querySelector('#estilosBc');
let estilosBorder = document.querySelector('#estilosBorder');


/*  INPUTS CAJA */
let inputAlto = document.querySelector('#altoCaja');
let valorAlto = document.querySelector('#valorAlto');
let inputAncho = document.querySelector('#anchoCaja');
let valorAncho = document.querySelector('#valorAncho');
let borderCaja = document.querySelector('#borderCaja');
let valorRadius = document.querySelector('#valorRadius');
let colorCaja = document.querySelector('#colorCaja');
let valorColorCaja = document.querySelector('#valorColorCaja');


inputAlto.addEventListener('input', (e) => {
    valorAlto.value = e.target.value;
    cajaPrincipal.style.height = `${e.target.value}px`;
    estilosHeight.textContent = `${e.target.value}px;`;
});

inputAncho.addEventListener('input', (e) => {
    valorAncho.value = e.target.value;
    cajaPrincipal.style.width = `${e.target.value}px`;
    estilosWidth.textContent = `${e.target.value}px;`;

});

borderCaja.addEventListener('input', (e) => {
    valorRadius.value = e.target.value;
    cajaPrincipal.style.borderRadius = `${e.target.value}rem`;
    estilosBorder.textContent = `${e.target.value}rem;`;
});

colorCaja.addEventListener('input', (e) => {
    valorColorCaja.value = e.target.value;
    cajaPrincipal.style.backgroundColor = e.target.value;
    estilosBc.textContent =  e.target.value;
});

/*  INPUTS SHADOWS */


let inputSombraHorizontal = document.querySelector('#desplazamientoX');
let valorSombraHorizontal = document.querySelector('#valorDesplazamientoX');

let inputSombraVertical = document.querySelector('#desplazamientoY');
let valorSombraVertical = document.querySelector('#valorDesplazamientoY');

let inputBlur = document.querySelector('#blur');
let valorBlur = document.querySelector('#valorBlur');

let inputSpread = document.querySelector('#spread');
let valorSpread = document.querySelector('#valorSpread');

let inputColorSombra = document.querySelector('#colorSombra');
let valorColorSombra = document.querySelector('#valorColorSombra');

cajaPrincipal.style.boxShadow = `${valorSombraHorizontal.value}px ${valorSombraVertical.value}px ${valorBlur.value}px ${valorSpread.value}px ${valorColorSombra.value}`;

inputSombraHorizontal.addEventListener('input', (e) => {

    valorSombraHorizontal.value = e.target.value;
    
    cajaPrincipal.style.boxShadow = `${valorSombraHorizontal.value}px ${valorSombraVertical.value}px ${valorBlur.value}px ${valorSpread.value}px ${valorColorSombra.value}`;

    estilosSombra.textContent =`${valorSombraHorizontal.value}px ${valorSombraVertical.value}px ${valorBlur.value}px ${valorSpread.value}px ${valorColorSombra.value}`;
});

inputSombraVertical.addEventListener('input', (e) => {
    valorSombraVertical.value = e.target.value;
    cajaPrincipal.style.boxShadow = `${valorSombraHorizontal.value}px ${valorSombraVertical.value}px ${valorBlur.value}px ${valorSpread.value}px ${valorColorSombra.value}`;
    estilosSombra.textContent =`${valorSombraHorizontal.value}px ${valorSombraVertical.value}px ${valorBlur.value}px ${valorSpread.value}px ${valorColorSombra.value}`;
});

inputBlur.addEventListener('input', (e) => {
    valorBlur.value = e.target.value;
    cajaPrincipal.style.boxShadow = `${valorSombraHorizontal.value}px ${valorSombraVertical.value}px ${valorBlur.value}px ${valorSpread.value}px ${valorColorSombra.value}`;
    estilosSombra.textContent =`${valorSombraHorizontal.value}px ${valorSombraVertical.value}px ${valorBlur.value}px ${valorSpread.value}px ${valorColorSombra.value}`;
});

inputSpread.addEventListener('input', (e) => {
    valorSpread.value = e.target.value;
    cajaPrincipal.style.boxShadow = `${valorSombraHorizontal.value}px ${valorSombraVertical.value}px ${valorBlur.value}px ${valorSpread.value}px ${valorColorSombra.value}`;
    estilosSombra.textContent =`${valorSombraHorizontal.value}px ${valorSombraVertical.value}px ${valorBlur.value}px ${valorSpread.value}px ${valorColorSombra.value}`;
});

inputColorSombra.addEventListener('input', (e) => {
    valorColorSombra.value = e.target.value;
    cajaPrincipal.style.boxShadow = `${valorSombraHorizontal.value}px ${valorSombraVertical.value}px ${valorBlur.value}px ${valorSpread.value}px ${valorColorSombra.value}`;
    estilosSombra.textContent =`${valorSombraHorizontal.value}px ${valorSombraVertical.value}px ${valorBlur.value}px ${valorSpread.value}px ${valorColorSombra.value}`;
});

