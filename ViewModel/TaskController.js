import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Task from '../model/taskModel';
import Parameter from '../model/parameterModel';

const TaskController = () => {
    const {listTask,getLisst,addTask,updateTask,deleteTask,closeRealm}=Task()
    const {listParameter,getList,addParameter,updateParameter,}=Parameter()
    // useEffect(()=>{
        
    //         console.log(listTask)
    //         listTask.forEach(task=>{
    //             deleteTask(task)
    //         })
    // },[listTask])


    const getListTask=()=>{
        const now=new Date();
        const list= listTask.filter((task)=>task.start_date<=now && now<=task.due_date )
        return list;
    }

    const handleAddTask=(name,start_date,due_date,time_set,id_project,state,description)=>{
        console.log(name)
        console.log(start_date)
        console.log(due_date)
        console.log(time_set)
        console.log(state)
        console.log(description)
        const time=parseInt(time_set, 10);
        const a=parseInt(listParameter[0].init_time, 10);
        const b=parseInt(listParameter[0].break_time, 10);
        const c=parseInt(listParameter[0].long_break_after, 10);
        const d=parseInt(listParameter[0].long_break_time, 10);
        addTask(name,start_date,due_date,time,id_project,state,description,a,b,d,c)
    }

    const handleDeleteTask=(task)=>{
        deleteTask(task)
    }

    const handleSearch=(search)=> {
        const listt=getListTask()
        const list=listt.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    return list}
    
    const handleUpdate=(task, name, description,time_done)=>{
        console.log(time_done)
        updateTask(task,name,task.start_date,task.due_date,task.time_set,time_done,task.idproject,task.state, description,task.count_time,task.break_time,task.long_break_time,task.long_break_after)
    }

    return {
        listTask,
        getListTask,
        handleAddTask,
        handleDeleteTask,
        handleSearch,
        handleUpdate,
    };
};

export default TaskController;