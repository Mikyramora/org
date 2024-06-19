import {useState} from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

//cuando trabajamos con estados tienen que estar dentro de un componente o una funcion y al definirlo debe ser antes del return
//un el useState siempre llevamos corchete, primero el nomnre de la variable,la funcion que se va a actualizar y en usestate el valor inicial  

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState (false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(), 
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(), 
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(), 
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: true
  },
  {
    id: uuid(), 
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(), 
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }
  ])

  const [equipos, actualizarEquipos] = useState ([
    {
      id: uuid(), 
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(), 
      titulo: "Front End",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff"

    },      
    {
      id: uuid(), 
      titulo: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0f8e2"

    },  
    {
      id: uuid(), 
      titulo: "Devops",
      colorPrimario: "#e06b69",
      colorSecundario: "#fde7e8"

    }, 
    {
      id: uuid(), 
      titulo: "UX y Diseño",
      colorPrimario: "#db6cbf",
      colorSecundario: "#fae9f5"

    },
    {
      id: uuid(), 
      titulo: "Móvil",
      colorPrimario: "#ffba05",
      colorSecundario: "#fff5d9"

    },
    {
      id: uuid(), 
      titulo:  "Innovación y Gestión",
      colorPrimario: "#ff8a29",
      colorSecundario: "#ffeedf"
    }
  ])

  //rendering condicional es como si fuera un if para mostrar o no ciertos elementos
  //ternario  --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra es la manera reducida, hay diferentes maneras de llegar al mismo resultado


  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador", colaborador);
    //spread operator los tres puntitos significan que estan copiando algo, un valor
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => {
      return colaborador.id !== id
    })
    actualizarColaboradores(nuevosColaboradores);
    
  }


  //Actualizar color de equipo
  const actualizarColor = (color, id) =>{
    console.log("Actualizar: ", color, id);
    const equiposActualizados = equipos.map((equipo)=>{
      if (equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }


  //Crear equipo a

  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid()}])
}

  //like
  const like= (id) => {
    console.log("like", id);
    const colaboradoresActualizados = colaboradores.map ((colaborador) =>{
      if (colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  
  return (
    <div className="App"> 
      <Header />
      {/* { mostrarFormulario === true ? <Formulario /> : <div></div>} */}
      {
        mostrarFormulario && <Formulario 
          equipos = {equipos.map((equipo) => equipo.titulo)}
          registrarColaborador= {registrarColaborador}
          crearEquipo= {crearEquipo}
        />
      }
      
      <MiOrg cambiarMostrar= {cambiarMostrar}/>
      {
        equipos.map((equipo) => <Equipo 
          datos= {equipo} 
          key= {equipo.titulo}
          colaboradores= {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador= {eliminarColaborador}
          actualizarColor= {actualizarColor}
          like = {like}
          />
        )
      }
      <Footer/>


    </div>
  );
}

export default App;
