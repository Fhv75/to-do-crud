import { getDatabaseConnection } from "./db/conn";

export default class TodoManager {
	private prisma: any;

	constructor() {
		this.prisma = getDatabaseConnection();
	}

	async addTodo(title: string) {
		try {
			const newTask = await this.prisma.task.create({
				data: {
					title: title,
				},
			});
			console.log("Created task: " + newTask.title);
		} catch (error) {
			console.error("Error creating the task:");
			console.error(error);
		}
	}

	async listTodos(filter: string) {
		try {
			switch (filter) {
				case "all":
					const tasks = await this.prisma.task.findMany();
					console.log(tasks);
					break;

				case "pending":
					const pendingTasks = await this.prisma.task.findMany({
						where: {
							isdone: false,
						},
					});
					console.log(pendingTasks);
					break;

				case "done":
					const tasksDone = await this.prisma.task.findMany({
						where: {
							isdone: true,
						},
					});
					console.log(tasksDone);
					break;

				default:
					break;
			}
		} catch (error) {
			console.error("Error fetching tasks");
			console.error(error);
		}
	}

	async markDone(id: number) {
		try {
			const task = await this.prisma.task.findUnique({
				where: { id: id },
			});

			const updatedTask = await this.prisma.task.update({
				where: { id: id },
				data: {
					isdone: !task.isdone,
				},
			});
            if (updatedTask.isdone === true) {
                console.log("Task '" + updatedTask.title + "' set to done");
            } else {
                console.log("Task '" + updatedTask.title + "' set to pending");
            }
		} catch (error) {
			console.error("Error updating task");
			console.error(error);
		}
	}

	async deleteTodo(id: number) {
		try {
			const task = await this.prisma.task.delete({
				where: { id: id },
			});

			console.log("Task '" + task.title + "' removed from database.");
		} catch (error) {
			console.error("Error removing task");
			console.error(error);
		}
	}
}
