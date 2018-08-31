import React from 'react'
import {connect} from 'react-redux'
import './index.css'

const mapStateToProps = state => ({tasks: state.reducerTasks.tasks})

const ConnectedTasks = ({tasks}) => {
    return (
        <div className={'tasks'}>
            <h1 className={'tasks__title'}>Список задач</h1>
            {
                tasks.length
                    ? tasks.map(item => <div className={'task'} key={item.id}>{item.name}</div>)
                    : <p>Пока нет добавленных задач</p>

            }
        </div>
    )
}

const Tasks = connect(mapStateToProps)(ConnectedTasks)

export default Tasks