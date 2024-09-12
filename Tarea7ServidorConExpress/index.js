import express from 'express'
const app= express()
const port =3002

app.use(express.json())

let estudiantes = [
    { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
    { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
    { id: 3, name: 'Charlie', age: 21, major: 'Physics' }
]


app.get('/estudiantes', (req,res)=>{
    res.send(estudiantes)
})

app.get('/estudiantes/:id',(req,res)=>{
    const id = req.params.id
    const result = estudiantes.find((estudiante)=> estudiante.id === parseInt(id))
    if (result) res.send(result)
    else {
        res.send('El estudiante no fue encontrado')
        res.send(result)}
})

app.delete('/estudiantes/:id', (req,res)=>{
    const id = req.params.id
    const result= estudiantes.findIndex((estudiante)=>estudiante.id=parseInt(id))
    if (result !== -1)
        estudiantes.splice(result,1)
        res.send(`El ID del estudiante eliminado es ${id}`)
})

app.post('/estudiantes', (req,res)=>{
    console.log(req.body)
    estudiantes.push(req.body)
    res.send(`Se ha agregado el (la) estudiante ${req.body.name}`)

})

app.listen(port, () =>{
    console.log(`el puerto ${port}`)
})


