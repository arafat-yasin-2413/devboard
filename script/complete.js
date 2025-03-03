const completedButtons = document.querySelectorAll(".completed-btn");

const taskAssigned = document.getElementById("task-assigned");
const totalTask = document.getElementById("total-task");

for (let button of completedButtons) {
	button.addEventListener("click", function () {
		// showing alert
		alert("Board updated successfully");

		console.log("okay te click korar por dekhacchi...");
        // ok te click korar por nicher kaj gulo hobe

        // protibar number gulo ke dhori
		let taskAssignedInt = parseInt(taskAssigned.innerText);
		let totalTaskInt = parseInt(totalTask.innerText);

        // protibar number gulo ke update kori
		taskAssigned.innerText = taskAssignedInt - 1;
		totalTask.innerText = totalTaskInt + 1;

        
        
        
        
        
        
        
        // button ta disable kori
        button.disabled = true;
        button.classList.add('opacity-50', 'cursor-not-allowed', 'bg-gray-400');
	});
}
