const toDoList = {
data() {
        return {
            Tasks: [],
            newTasks: {
                done: false
            }
        };
    },

    methods: {
        addTask: function (){
            if (this.newTasks.text) {
                this.Tasks.push(this.newTasks)
                this.newTasks = {
                    done: false
                };
                localStorage.setItem("tasks", JSON.stringify(this.Tasks));
            } else {
                alert("Task text is required");
            }
        }
    },

    beforeCreate(){
        console.log(this.newTasks)
    },
    created(){
        console.log(this.newTasks)
    },
};

Vue.createApp(toDoList).mount('#app');