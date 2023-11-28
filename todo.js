
document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var taskName = document.getElementById('taskName').value;
    var taskDescription = document.getElementById('taskDescription').value;
    var taskDeadline = document.getElementById('taskDeadline').value;
    var taskPriority = document.getElementById('taskPriority').value;
    var taskLabel = document.getElementById('taskLabel').value;
  
    var taskItem = document.createElement('li');
    taskItem.innerHTML = '<strong>' + taskName + '</strong><br>' + taskDescription + '<br>Deadline: ' + taskDeadline + '<br>Priority: ' + taskPriority + '<br>Label: ' + taskLabel;
    taskItem.classList.add(taskPriority);
    document.getElementById('taskList').appendChild(taskItem);
  
    document.getElementById('taskForm').reset();
  });