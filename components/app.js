
export function renderApp() {
  root.innerHTML = `
    <div class="container">
      <h1>Asistencia</h1>
      <form id="attendanceForm">
        <input type="text" id="studentName" placeholder="Nombre del estudiante" required>
        <select id="attendanceStatus">
          <option value="si vino">Si vino</option>
          <option value="no vino">No vino</option>
          <option value="si vino tarde">Si vino tarde</option>
        </select>
        <button type="submit">Registrar</button>
      </form>
      <h2>Lista de Asistencia</h2>
      <ul id="attendanceList"></ul>
    </div>
  `; 
  

  let attendanceForm = document.getElementById("attendanceForm");
  let attendanceList = document.getElementById("attendanceList");

  attendanceForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("studentName").value;
    let status = document.getElementById("attendanceStatus").value;
    let date = new Date().toLocaleDateString();

    let listItem = document.createElement("li");
    listItem.textContent = `Fecha: ${date} - ${name} - ${status}`;

    let className = status.toLowerCase().replace(/\s/g, "-"); // Reemplaza espacios con guiones
    listItem.classList.add(className);
    attendanceList.appendChild(listItem);
    
    attendanceForm.reset();
  });
}
