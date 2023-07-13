import Realm from 'realm';
import React, { useState, useEffect } from 'react';


const Parameter = () => {
  const [realm, setRealm] = useState(null);
  const [listParameter, setListParameter] = useState([{init_time: 0,
    break_time: 0,
    long_break_after: 0,
    long_break_time: 0,}]);
  
  useEffect(() => {
    
    Realm.open({
      schema: [
        { name: 'Parameter',
          properties: {
            init_time: 'int',
            break_time: 'int',
            long_break_after: 'int',
            long_break_time: 'int',
          },
        }
      ],
      path: 'parameter.realm',
    }).then(realm1 => {
      setTimeout(() => {
        setRealm(realm1);
        setListParameter(realm1.objects('Parameter'));
      }, 1000)
        // addParameter(10,10,10,10)
    });
    return () => {
      if (realm !== null && !realm.isClosed) {
        realm.close();
      }
    };
  }, []);

  const getList = () => {
    Realm.open({
        schema: [
            { name: 'Parameter',
              properties: {
                init_time: 'int',
                break_time: 'int',
                long_break_after: 'int',
                long_break_time: 'int',
              },
            }
          ],
        }).then(realm => {
            setListParameter(realm.objects('Parameter'));
    });
  };

  const addParameter = (init_time,break_time,long_break_after,long_break_time) => {
    if (!realm) {
      return;
    }
    let newProject = null;
    
    realm.write(() => {
        newProject=realm.create('Parameter', { 
            init_time: init_time,
            break_time: break_time,
            long_break_after: long_break_after,
            long_break_time: long_break_time,
       });
      setListParameter(realm.objects('Parameter'));
    });
    return newProject;
  };

  const updateParameter = (parameter,init_time,break_time,long_break_after,long_break_time) => {
    realm.write(() => {
      parameter.init_time= init_time,
      parameter.break_time= break_time,
      parameter.long_break_after= long_break_after,
      parameter.long_break_time= long_break_time,
        setListParameter(realm.objects('Parameter'));
    });
  };


  return {
    listParameter,
    getList,
    addParameter,
    updateParameter,
  };
};

export default Parameter;