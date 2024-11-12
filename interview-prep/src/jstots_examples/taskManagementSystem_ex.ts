export interface Task{
    id: number,
    title: string,
    description: string,
    completed: boolean,
    dueDate: Date,
}

const task1 : Task = {
    id: 1,
    title: "Complete TypeScript exercise",
    description: "Practice using TypeScript utility types by completing an exercise",
    completed: false,
    dueDate: new Date("2023-12-01")
};

// function that takes in an existing task, updates with values, and returns a partial task
function updateTask (task : Task, updates: Partial<Task> ) : Task {
    for(let key in updates){
        if (updates[key as keyof Task] !== undefined) {

            // TypeScript needs a type assertion here since `key` is a string, not a specific property of Task
            // (task[key as keyof Task] as any) = updates[key as keyof Task];

            // Type assertion to ensure compatible types
            (task[key as keyof Task] as unknown) = updates[key as keyof Task] as typeof task[keyof Task];
        }
    }
    return task;
}

function  getSummary(task : Task) : Omit<Task, "description"> {
    const { description, ...result } = task; // Use Destructuring tp Exclude `description`
    return result;
}

function  countTasksByStatus(tasksToCount: Task[]) : Record< 'completed' | 'pending' , number>{// {'completed': number, 'pending': number}{
    const result = {'completed': 0, 'pending': 0};
    // loop thru task,  if completed increment result.completed,  if not completed increment result.pending
    for(let task of tasksToCount ){
        if (task['completed']){
            result.completed = result.completed+1;
        }else{
            result.pending = result.pending +1;
        }
    }
    return result;

}


console.log(updateTask(task1, { completed: true, title: "Updated Title" }));
console.log(getSummary(task1));

const tasks: Task[] = [
    { id: 1, title: "Task 1", description: "First task", completed: true, dueDate: new Date() },
    { id: 2, title: "Task 2", description: "Second task", completed: false, dueDate: new Date() },
    { id: 3, title: "Task 3", description: "Third task", completed: true, dueDate: new Date() },
  ];

console.log(countTasksByStatus(tasks));
