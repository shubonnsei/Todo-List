document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById('taskInput');
    const addTask = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTask.addEventListener('click', function () {
        const taskValue = taskInput.value.trim();

        if (taskValue) {
            // 创建新的任务列表项
            const li = document.createElement('li');
            li.textContent = taskValue;

            // 创建删除按钮
            const delBtn = document.createElement('button');
            delBtn.textContent = 'del';
            delBtn.addEventListener('click', function () {
                taskList.removeChild(li);
            });

            li.appendChild(delBtn);
            taskList.appendChild(li);

            // 清空输入框
            taskInput.value = '';
        }
    });
});

