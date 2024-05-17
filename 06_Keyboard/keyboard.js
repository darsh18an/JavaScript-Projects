const insert = document.getElementById('insert');

window.addEventListener('keypress', (e)=>{
  insert.innerHTML = `
  <table>
  <tr>
    <th>Key</th>
    
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' '? 'Space': e.key}</td>
    
    <td>${e.code}</td>
  </tr>
</table>
  `;
});