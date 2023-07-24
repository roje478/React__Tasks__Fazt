import { useState } from "react";

function TaskForm({createTask}) {
	const [title, setTitle] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault()
        createTask(title)
    }
	return (
		<form onSubmit={handleSubmit}>
			<input
				placeholder="Escribe tu tarea"
				onChange={(e) => setTitle(e.target.value)}
			/>
			<button>guardar</button>
		</form>
	);
}

export default TaskForm;
