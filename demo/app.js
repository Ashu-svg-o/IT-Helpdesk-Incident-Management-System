const incidents = [
  {id:'INC1001', title:'Wi-Fi not connecting', category:'Network', priority:'P2', group:'Network Support', status:'Open'},
  {id:'INC1002', title:'Printer offline', category:'Printer', priority:'P3', group:'Desktop Support', status:'Resolved'},
  {id:'INC1003', title:'Laptop running slowly', category:'Hardware', priority:'P3', group:'Desktop Support', status:'Open'},
  {id:'INC1004', title:'Application not launching', category:'Software', priority:'P2', group:'Application Support', status:'Resolved'}
];

const tbody = document.querySelector('#incidentRows');
const search = document.querySelector('#search');

function render() {
  const q = search.value.toLowerCase();
  const filtered = incidents.filter(i =>
    `${i.id} ${i.title} ${i.category} ${i.priority} ${i.group} ${i.status}`.toLowerCase().includes(q)
  );

  tbody.innerHTML = filtered.map(i => `
    <tr>
      <td>${i.id}</td>
      <td>${i.title}</td>
      <td>${i.category}</td>
      <td>${i.priority}</td>
      <td>${i.group}</td>
      <td><span class="status ${i.status.toLowerCase()}">${i.status}</span></td>
    </tr>
  `).join('');

  document.querySelector('#openCount').textContent = incidents.filter(i => i.status === 'Open').length;
  document.querySelector('#resolvedCount').textContent = incidents.filter(i => i.status === 'Resolved').length;
  document.querySelector('#p2Count').textContent = incidents.filter(i => i.priority === 'P2').length;
}

search.addEventListener('input', render);
render();
