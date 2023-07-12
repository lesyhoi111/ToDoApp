import React, { useState, useEffect } from 'react';
import Task from '..model/taskModel';
import Parameter from '../model/parameterModel';

const HomeController = () => {
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
        return listTask.filter((task)=>{
            return task.start_date<=now && now<=task.due_date
        })
    }

    const handleAddTask=(name,start_date,due_date,time_set,id_project,state,description)=>{
        addTask(name,start_date,due_date,time_set,id_project,state,description,listParameter[0].init_time,listParameter[0].break_time,listParameter[0].long_break_time,listParameter[0].long_break_after)
    }

    const handleDeleteTask=(task)=>{
        deleteTask(task)
    }

    const handleSearch=(list,search)=> list.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    return {
        listTask,
        getListTask,
        handleAddTask,
        handleDeleteTask,
        handleSearch
    };
};

export default HomeController;