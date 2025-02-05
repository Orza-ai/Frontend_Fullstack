import React from 'react'
import ENVIROMENT from '../utils/constants/enviroment'
import { getAuthenticatedHeaders } from '../fetching/customHeaders'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import '../Styles/homeStyle.css'

const HomeScreen = () => {
    const { 
        data: workspace_response, 
        error: workspace_response_error, 
        loading: workspace_loading 
    } = useFetch(ENVIROMENT.API_URL + '/api/workspace', {
        method: "GET",
        headers: getAuthenticatedHeaders()
    })
console.log(workspace_response)
return (
    <section className='dark-background'>
        <div>
            <div className='sub-header'>
                <h1>
                    <picture className='waving-hand-gif'>
                        <source src='https://a.slack-edge.com/6c404/marketing/img/homepage/bold-existing-users/waving-hand.gif'
                        srcSet='https://a.slack-edge.com/6c404/marketing/img/homepage/bold-existing-users/waving-hand.gif 1x, https://a.slack-edge.com/6c404/marketing/img/homepage/bold-existing-users/waving-hand.gif 2x'/>
                        <img src='https://a.slack-edge.com/6c404/marketing/img/homepage/bold-existing-users/waving-hand.gif' srcSet='https://a.slack-edge.com/6c404/marketing/img/homepage/bold-existing-users/waving-hand.gif 1x, https://a.slack-edge.com/6c404/marketing/img/homepage/bold-existing-users/waving-hand.gif 2x'/>
                    </picture>
                <span>Bienvenido a la app {/* en un futuro podrian poner el nombre del usuario */}</span>
                </h1>
            </div>
            <div className='workspaces'>
                <h2>Tus espacios de trabajo</h2>
                <div>
                    {
                    workspace_loading
                    ? <h2>Cargando</h2>
                    : (
                        workspace_response.data.workspaces.length ?  
                        workspace_response.data.workspaces.map(workspace => {
                            return (
                                <div key={workspace._id}>
                                    <h3>{workspace.name}</h3>
                                    <Link to={`/workspace/${workspace._id}`}>Ir al workspace</Link>
                                </div>
                            )
                        })
                        : <h3>Aun no creaste ningun espacio de trabajo!</h3>
                    )
                    }
                </div>
            </div>
            <div className='create-workspace-button'>
                <span>Aun no tienes espacios de trabajo?</span>
                <Link to='/workspace/new'>Crear un espacio de trabajo</Link>
            </div>
        </div>
    </section>
)
}

export default HomeScreen