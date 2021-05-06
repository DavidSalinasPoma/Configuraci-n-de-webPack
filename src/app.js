// Importar clases
import { showAlert } from './messages';

// Importando una libreria externa jquery
import $ from 'jquery';

// Importando css
import './styles.scss';

let botonAlerta = document.getElementById('btn-alert');
botonAlerta.addEventListener('click', showAlert);

// Utilizando la libreria jquery
$('#btn-jq').on('click', () => {
    alert('Click con jQuery');
});