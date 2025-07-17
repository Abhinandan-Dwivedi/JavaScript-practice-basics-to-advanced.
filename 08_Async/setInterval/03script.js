let time = document.querySelector('.time');

window.addEventListener('keydown', function(e){
    time.innerHTML = 
    `<table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${ (e.key == " ") ? 'space': e.key}</td>
    <td>${e.keyCode} </td>
    <td>${e.code}</td>
  </tr>
</table>`
});