let tasks = [];

function login() {
  const id = document.getElementById("userId").value;
  if (id) {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
  }
}

function logout() {
  location.reload();
}

function showAdd() {
  document.getElementById("content").innerHTML = `
    <h2>Tambah Tugas</h2>
    <input id="taskInput" placeholder="Nama tugas">
    <button onclick="addTask()">Simpan</button>
  `;
}

function addTask() {
  const task = document.getElementById("taskInput").value;
  if (task) {
    tasks.push(task);
    alert("Tugas ditambahkan");
  }
}

function showTasks() {
  let html = "<h2>Daftar Tugas</h2>";
  tasks.slice().reverse().forEach(t => {
    html += `<div class="task">${t}</div>`;
  });
  document.getElementById("content").innerHTML = html;
}

function deleteLast() {
  tasks.pop();
  alert("Tugas terakhir dihapus");
}