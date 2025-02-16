const info = {
	name: 'CollageBot',
	projectVersion: 'alpha',
	authors: 'Zhyvotov, Aliev, Konovalov, Rudenko, Lehanov, Podosochniy',
	main: 'mainScripts.js',
}

console.log(`Code is working`)

import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import axios from 'axios'


dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
const CRONITOR_API_KEY = process.env.CRONITOR_API_KEY

app.use(express.json())

// Подключение к MongoDB
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('MongoDB connected'))
	.catch(err => console.error('MongoDB connection error:', err))

// Пример схемы и модели MongoDB
const TaskSchema = new mongoose.Schema({
	name: String,
	status: String,
	createdAt: { type: Date, default: Date.now },
})

const Task = mongoose.model('Task', TaskSchema)

// Пример API эндпоинта
app.get('/tasks', async (req, res) => {
	try {
		const tasks = await Task.find()
		res.json(tasks)
	} catch (err) {
		res.status(500).json({ error: 'Ошибка сервера' })
	}
})

// Мониторинг с Cronitor
async function monitorTask() {
	try {
		await axios.get(`https://cronitor.link/${CRONITOR_API_KEY}/ping`)
		console.log('Cronitor ping successful')
	} catch (error) {
		console.error('Cronitor ping failed:', error)
	}
}

setInterval(monitorTask, 60000) // Пинг каждую минуту

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
