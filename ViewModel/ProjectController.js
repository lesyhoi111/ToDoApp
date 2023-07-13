import React, { useState, useEffect } from 'react';
import Project from '../model/projectModel';
import Task from '../model/taskModel';

const ProjectController = () => {
    const {listProject,getList,addProject,updateProject,deleteProject,}=Project()

    
    const handleAddProject=(name)=>{
        const now= new Date();
        addProject(name,now,now)
    }
   
    return {
        listProject,
        handleAddProject
    };
};

export default ProjectController;