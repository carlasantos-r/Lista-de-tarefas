const toDoList = {
data() {
        return {
            Tasks: [],
            newTasks: {
                done: false
            },
        };
    },

    methods: {
        addTask: function (){
            if (this.newTasks.text) {
                this.Tasks.push(this.newTasks)
                this.newTasks = {
                    done: false
                };
                // localStorage.setItem("my tasks", JSON.stringify(this.Tasks));
            } else {
                alert("Task text is required");
            }
        },
        storeTasks(){
            localStorage.setItem("my tasks", JSON.stringify(this.Tasks));
        }
    },

    created(){
    this.Tasks = localStorage.getItem("my tasks") ? JSON.parse(localStorage.getItem("my tasks")) : this.Tasks
    },
    
};

Vue.createApp(toDoList).mount('#app');