import React, { useState, useEffect } from 'react';
import Parameter from '../model/parameterModel';
import Task from '../model/taskModel';

const EditSettingController = () => {
    const {listParameter,getList,addParameter,updateParameter,}=Parameter()
    // const {listTask,getLisst,addTask,updateTask,deleteTask,closeRealm}=Task()
    // useEffect(()=>{
    //     closeRealm
    // },[])

    const handleUpdateParameter=(parameter,init_time,break_time,long_break_after,long_break_time)=>{
        console.log('handleUpdateParameter');
        const a=parseInt(init_time, 10)*60;
        const b=parseInt(break_time, 10)*60;
        const c=parseInt(long_break_after, 10)*60;
        const d=parseInt(long_break_time, 10)*60;
        updateParameter(parameter,a,b,c,d)
    }
    const handleAddParameter=(init_time,break_time,long_break_after,long_break_time)=>{
        const a=parseInt(init_time, 10);
        const b=parseInt(break_time, 10);
        const c=parseInt(long_break_after, 10);
        const d=parseInt(long_break_time, 10);
        addParameter(a,b,c,d)
    }
   
    return {
        listParameter,
        getList,
        handleUpdateParameter,
        handleAddParameter
    };
};

export default EditSettingController;