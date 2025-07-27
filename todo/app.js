const inputText = document.getElementById('input-text')
const addBtn = document.getElementById('add-btn')
const delBtn = document.getElementById('del-btn')
const taskList = document.getElementById('task-list')
const emptyState = document.getElementById('empty-state')

// Show/hide empty state
function toggleEmptyState() {
    const tasks = taskList.children.length
    emptyState.style.display = tasks === 0 ? 'block' : 'none'
}

// Initial state
toggleEmptyState()

// Add task functionality
const addBtnTask = addBtn.addEventListener('click', ()=>{
    const createLi = document.createElement('li')
    const inputValue = inputText.value.trim()
   
    if(inputValue !== ''){
        createLi.className = 'task-item'
        createLi.innerHTML = `
            <input type="checkbox" class="task-checkbox">
            <span class="task-text">${inputValue}</span>
            <button type="button" class="task-delete" onclick="deleteTask(this)">
                <i class="fas fa-trash"></i>
                Delete
            </button>
        `
        
        // Add change event to checkbox for completed styling
        const checkbox = createLi.querySelector('.task-checkbox')
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                createLi.classList.add('completed')
            } else {
                createLi.classList.remove('completed')
            }
        })
        
        inputText.value = ''
        taskList.appendChild(createLi)
        toggleEmptyState()
    }
    else{
        // Better alert styling
        showNotification('Please enter a task!', 'warning')
    }
})

// Add task on Enter key press
inputText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addBtn.click()
    }
})

// Delete individual task
const deleteTask = (button) => {
    const taskItem = button.parentNode
    taskItem.style.animation = 'slideOut 0.3s ease-in'
    setTimeout(() => {
        taskItem.parentNode.removeChild(taskItem)
        toggleEmptyState()
    }, 250)
}

// Delete checked tasks
const deleteCheckedTask = () => {
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked')
    
    if (checkBoxes.length === 0) {
        showNotification('No completed tasks to delete!', 'info')
        return
    }
    
    checkBoxes.forEach((checkbox) => {
        const taskItem = checkbox.parentNode
        taskItem.style.animation = 'slideOut 0.3s ease-in'
        setTimeout(() => {
            taskItem.parentNode.removeChild(taskItem)
            toggleEmptyState()
        }, 250)
    })
    
    showNotification(`Deleted ${checkBoxes.length} completed task(s)!`, 'success')
}

// Simple notification system
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification')
    if (existingNotification) {
        existingNotification.remove()
    }
    
    const notification = document.createElement('div')
    notification.className = `notification notification-${type}`
    notification.textContent = message
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: 600;
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    `
    
    // Set background color based on type
    const colors = {
        success: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
        warning: 'linear-gradient(135deg, #ed8936 0%, #dd6b20 100%)',
        info: 'linear-gradient(135deg, #4299e1 0%, #3182ce 100%)',
        error: 'linear-gradient(135deg, #fc8181 0%, #e53e3e 100%)'
    }
    
    notification.style.background = colors[type] || colors.info
    
    document.body.appendChild(notification)
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in'
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification)
            }
        }, 300)
    }, 3000)
}

// Add CSS animations for notifications
const style = document.createElement('style')
style.textContent = `
    @keyframes slideInRight {
        from { opacity: 0; transform: translateX(100px); }
        to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes slideOutRight {
        from { opacity: 1; transform: translateX(0); }
        to { opacity: 0; transform: translateX(100px); }
    }
    
    @keyframes slideOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-20px); }
    }
`
document.head.appendChild(style)


